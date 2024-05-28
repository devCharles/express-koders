const express = require("express");

const kodersRouter = require("./koders.router");
const mentorsRouter = require("./mentors.router");

// const app = express();
const server = express();

server.use(express.json());

// middleware a nivel de aplicación
server.use((request, response, next) => {
  console.log("Middleware de aplicación");

  const authorization = request.headers.authorization;

  if (authorization === "alohomora") {
    request.isAWizard = true;
    next();
  } else {
    response.status(403);
    response.json({
      message: "No tienes acceso",
    });
  }
});

server.use((request, response, next) => {
  console.log("Middleware de aplicación 2");
  next();
});

// montar el router en el server
server.use("/koders", kodersRouter);
server.use("/mentors", mentorsRouter);

server.get("/", (request, response) => {
  response.json({
    message: "Kodemia APIv1",
  });
});

module.exports = server;
