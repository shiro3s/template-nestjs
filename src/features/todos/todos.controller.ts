import { Controller, Get, ParseIntPipe, Query, UsePipes, DefaultValuePipe, ParseBoolPipe, ValidationPipe } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { FindTodosDto } from "./dto/todos.dto";

@Controller("todos")
export class TodosController {
	constructor(private readonly todosService: TodosService) {}

	@Get()
	findAll(
    @Query(
      new ValidationPipe({
        transform: true,
      }),
    ) todosDto: FindTodosDto
  ) {
		return this.todosService.findAll(todosDto);
	}
}
