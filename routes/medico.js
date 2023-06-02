var express = require("express");
var medicoController = require("../controller/MedicoController");
var router = express.Router();

router.get("/", medicoController.getAll);
router.get("/:_id", medicoController.getById);
router.post("/", medicoController.add);
router.put("/:_id", medicoController.update);
router.delete("/:_id", medicoController.delete);

module.exports = router;