import { Injectable } from "@nestjs/common";
import { TodosRepository } from "./todos.repository";
import { FindTodosDto } from "./dto/todos.dto";

@Injectable()
export class TodosService {
	constructor(private readonly todosRepository: TodosRepository) {}

	findAll(cond: FindTodosDto) {
		return this.todosRepository.findAll(cond);
	}
}
