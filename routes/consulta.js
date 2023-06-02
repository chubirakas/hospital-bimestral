var express = require("express");
var consultaController = require("../controller/ConsultaController");
var router = express.Router();

router.get("/", consultaController.getAll);
router.get("/:_id", consultaController.getById);
router.post("/", consultaController.add);
router.put("/:_id", consultaController.update);
router.delete("/:_id", consultaController.delete);

module.exports = router;