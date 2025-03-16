import { Injectable } from '@nestjs/common';
import {TodosRepository} from "./todos.repository"

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  findAll(): Promise<string> {
    return this.todosRepository.findAll();
  }
}
