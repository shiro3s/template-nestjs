import { Injectable } from "@nestjs/common";
import { FindTodosDto } from "./dto/todos.dto";
import {TodosDao} from "./dao/todos.dao"

@Injectable()
export class TodosRepository {
  constructor(private readonly todosDao: TodosDao) {}

	async findAll(cond: FindTodosDto) {
		return this.todosDao.findAll(cond)
	}
}
