var express = require("express");
var pacienteController = require("../controller/PacienteController");
var router = express.Router();

router.get("/", pacienteController.getAll);
router.get("/:_id", pacienteController.getById);
router.post("/", pacienteController.add);
router.put("/:_id", pacienteController.update);
router.delete("/:_id", pacienteController.delete);

module.exports = router;