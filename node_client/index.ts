import { DefaultService } from "./generated";

async function caller() {
  const response = await DefaultService.getUsers("123");
  console.log(response);
}

caller();
