import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TodosModule } from "@/features/todos/todos.module";

@Module({
	imports: [TodosModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
