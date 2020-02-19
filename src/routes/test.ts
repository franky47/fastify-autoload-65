import { FastifyInstance } from "fastify";

export default async (server: FastifyInstance, _: never, next: () => void) => {
  server.get("/test", (req, res) => {
    res.send(req.body);
  });
  next();
};
