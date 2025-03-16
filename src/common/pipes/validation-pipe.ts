import {
	PipeTransform,
	ArgumentMetadata,
	BadRequestException,
} from "@nestjs/common";
import { ZodSchema } from "zod";

export class ValidationPipe implements PipeTransform {
	constructor(private schema: ZodSchema) {}

	transform(value: unknown, metadata: ArgumentMetadata) {
		try {
			console.log(13, value)
			const parsedValue = this.schema.parse(value);
			return parsedValue;
		} catch(error) {
			console.log(error)
			throw new BadRequestException("Validation failed");
		}
	}
}
