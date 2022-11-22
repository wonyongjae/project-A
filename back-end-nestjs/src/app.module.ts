import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMCofig } from './configs/typeorm.config';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMCofig)],
})
export class AppModule {}
