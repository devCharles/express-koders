const express = require("express");
const kodersUsecase = require("./koders.usecase");

// /koders
const router = express.Router();

router.get("/", (request, response) => {
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

router.post("/", (request, response) => {
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

router.delete("/", (request, response) => {
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

router.delete("/:name", (request, response) => {
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

module.exports = router;
