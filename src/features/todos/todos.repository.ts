import {Injectable} from "@nestjs/common";

@Injectable()
export class TodosRepository {
  async findAll() {
    return "findAll"
  }
}
