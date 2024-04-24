import { OpenAPIHono } from "@hono/zod-openapi";
import { route } from "./route";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

app.get("/ui", swaggerUI({ url: "/doc" }));

app.openapi(route, (c) => {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age: 20,
    name: "Ultra-man",
  });
});

// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
