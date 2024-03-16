const express = require("express");
const router = express.Router();

// const introducao = require("./");

router.get("/",(req,res)=>{
    res.send("API rodando");
})


// router.use("/",introducao);

module.exports = router;