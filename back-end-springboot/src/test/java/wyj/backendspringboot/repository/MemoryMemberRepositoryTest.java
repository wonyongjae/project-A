package wyj.backendspringboot.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
// import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import wyj.backendspringboot.domain.Member;

class MemoryMemberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach
    public void afterEach() {
        repository.clearStore();
    };
    
    @Test
    public void save() {
        Member member = new Member();
        member.setName("wyj");

        repository.save(member);
        Member result = repository.findById(member.getId()).get();
        // System.out.println("result = " + (result == member));
        // Assertions.assertEquals(member, result);
        assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName(){
        Member member1 = new Member();
        member1.setName("wyj1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("wyj2");
        repository.save(member2);

        Member wyj2 = repository.findByName("wyj2").get();
        assertThat(wyj2).isEqualTo(member2);
    }

    @Test
    public void findAll(){
        Member member1 = new Member();
        member1.setName("wyj1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("wyj2");
        repository.save(member2);

        List<Member> list = repository.findAll();
        assertThat(list.size()).isEqualTo(2);
    }

    
}
