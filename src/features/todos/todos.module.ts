import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { TodosRepository } from "./todos.repository";
import { TodosDao } from "./dao/todos.dao";
import { PrismaModule } from "@/infra/prisma/prisma.module";

@Module({
	controllers: [TodosController],
	providers: [TodosService, TodosRepository, TodosDao],
	imports: [PrismaModule],
})
export class TodosModule {}
