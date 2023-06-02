"use strict"

var express = require("express");
var router = express.Router();

router.get("/", function(request,response){
    response.json({
        "nome": "joao filho",
        "email": "joao@joao.com"
    });
});

//consulta
router.use("/consulta", require("./consulta.js"));
//medico
router.use("/medico", require("./medico.js"));
//paciente
router.use("/paciente", require("./paciente.js"));

module.exports = router;