import { Transform } from "class-transformer";
import { IsString, IsInt, IsBoolean, IsOptional } from "class-validator";
import {bool} from "@/utils/transform"

export class FindTodosDto {
	@IsString()
	@IsOptional()
	readonly title: string;

	@IsBoolean()
	@Transform(({ value }) => bool(value))
	readonly done: boolean = false;

	@IsBoolean()
	@Transform(({ value }) => bool(value))
	readonly isDeleted: boolean = false;

	@IsInt()
	readonly limit: number = 10;

	@IsInt()
	readonly offset: number = 0;
}
