import { Controller, Get } from "@nestjs/common";
import {TodosService} from "./todos.service"

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<string> {
    return this.todosService.findAll();
  }
}
