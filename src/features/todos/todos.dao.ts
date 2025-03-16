import {Injectable} from "@nestjs/common"
import {Prisma} from "@/infra/prisma"

@Injectable()
export class TodosDao {
  constructor(private readonly prisma: Prisma) {}

  async findAll() {
    await this.prisma.todo.findMany({
      where: {

      }
    })
  }
}
