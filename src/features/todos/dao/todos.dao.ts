import { Injectable } from "@nestjs/common";
import { Prisma } from "@/infra/prisma/prisma";
import { FindTodosDto } from "../dto/todos.dto";

@Injectable()
export class TodosDao {
	constructor(private readonly prisma: Prisma) {}

	async findAll(cond: FindTodosDto) {
		return await this.prisma.todo.findMany({
			where: {
				title: {
					contains: cond.title
				},
				done: {
					equals: cond.done
				},
				isDeleted: {
					equals: cond.isDeleted
				}
			},
			skip: cond.offset,
			take: cond.limit
		});
	}
}
