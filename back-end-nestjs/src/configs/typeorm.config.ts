import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// postgres DB 정보로 typeORM 생성
export const typeORMCofig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'boards',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
