// la definición de nuestro servidor
const express = require("express");
const kodersUsecase = require("./koders.usecase");

// const app = express();
const server = express();

server.use(express.json());

server.get("/", (request, response) => {
  response.json({
    message: "Kodemia APIv1",
  });
});

// GET /koders -> Endpoint
server.get("/koders", (request, response) => {
  try {
    const koders = kodersUsecase.getAll();

    response.json({
      message: "All koders",
      data: {
        koders: koders,
      },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

server.post("/koders", (request, response) => {
  try {
    const newKoder = request.body;
    const koders = kodersUsecase.add(newKoder);

    response.json({
      message: "Koder added",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

server.delete("/koders", (request, response) => {
  try {
    const koders = kodersUsecase.deleteAll();
    response.json({
      message: "All koders deleted",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

server.delete("/koders/:name", (request, response) => {
  try {
    const name = request.params.name;
    const koders = kodersUsecase.deleteByName(name);

    response.json({
      message: "Koder deleted",
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);

    response.json({
      error: error.message,
    });
  }
});

module.exports = server;
