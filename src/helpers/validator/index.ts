import Ajv from "ajv";
import { taskSchema } from "./schemas";

const validator = new Ajv();

validator.addSchema(taskSchema, "task");

export default validator;
