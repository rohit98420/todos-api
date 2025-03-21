import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UsersNoSpecModule } from './users--no-spec/users--no-spec.module';

@Module({
  imports: [TodosModule, UsersNoSpecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
