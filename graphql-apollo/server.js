// package.json = type : module 추가 x
// const { ApolloServer, gql } = require("apollo-server");
// package.json = type : module 추가 o
import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

// fake DB
let tweets = [
    {
        id: "1",
        text: "first",
        userId: "2",
    },
    {
        id: "2",
        text: "second",
        userId: "1",
    }
];

let users = [
    {
        id: "1",
        firstName: "yongjae",
        lastName: "won",
    },
    {
        id: "2",
        firstName: "yj",
        lastName: "w",
    }
];

// graphql 스키마
const typeDefs = gql`
    """
    This is User discription.
    """
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        """
        This is firstName + lastName.
        """
        fullName: String
    }
    """
    This is Tweet discription.
    """
    type Tweet {
        id: ID!
        text: String!
        author: User
    }
    """
    This is Like GET Method.
    """
    type Query {
        """
        This is GET Method.
        """
        allUsers: [User!]!
        allMovies: [Movie!]!
        allTweetst: [Tweet!]!
        tweet(id: ID!): Tweet
        movie(id: String!): Movie
    }
    """
    This is Like POST/PUT/DELETE Method.
    """
    type Mutation {
        """
        This is Like POST Method.
        """
        postTweet(text: String!, userId: ID!): Tweet!
        """
        This is Like DELETE Method.
        """
        deleteTweet(id: ID!): Boolean!
    }

    type Movie {
        id: Int!
        url: String!
        imdb_code: String!
        title: String!
        title_english: String!
        title_long: String!
        slug: String!
        year: Int!
        rating: Float!
        runtime: Float!
        genres: [String]!
        summary: String
        description_full: String!
        synopsis: String!
        yt_trailer_code: String!
        language: String!
        background_image: String!
        background_image_original: String!
        small_cover_image: String!
        medium_cover_image: String!
        large_cover_image: String!
    }
`;


// 스키마를 통해 fake DB 에 접근하는 리졸버
const resolvers = {
    Query: {
        allTweetst(){
            return tweets;
        },
        tweet(_, { id }){ // _, __, root => 반드시 첫번째 아규먼트는 루트가 들어가야함 (_, __, 로 대체가능)
            console.log(id);
            return tweets.find((tweet) => tweet.id === id);
        },
        allUsers(){
            return users;
        },
        allMovies(){
            return fetch("https://yts.mx/api/v2/list_movies.json")
                .then((res) => res.json())
                .then((json) => json.data.movies);
        },
        movie(_, { id }){
            return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                .then((res) => res.json())
                .then((json) => json.data.movie);
        }
    },
    Mutation: {
        postTweet(_, { text, userId }){
            const newTweet = {
                id: tweets.length + 1,
                text,
                userId,
            };
            tweets.push(newTweet);
            return newTweet;
        },
        deleteTweet(_, { id }){
            const tweet = tweets.find((tweet) => tweet.id === id);
            if (!tweet) return false;
            tweets = tweets.filter((tweet) => tweet.id !== id);
            return true;
        }
    },
    User: {
        fullName({ firstName, lastName }){
            console.log(firstName, lastName);
            return `${firstName} ${lastName}`;
        }
    },
    Tweet: {
        author({ userId }){
            // const user= users.find((user) => user.id === userId);
            // if (!user) return "err!";
            return users.find((user) => user.id === userId);
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})