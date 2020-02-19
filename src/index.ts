import path from "path";
import Fastify from "fastify";
import autoLoad from "fastify-autoload";

const server = Fastify({
  logger: true
});

server.register(autoLoad, {
  dir: path.resolve(__dirname, "routes"),
  includeTypeScript: true
});

server.ready().then(() => {
  console.info(server.printRoutes());
  server.listen(3000);
});
