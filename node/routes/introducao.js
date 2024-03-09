const express = require("express");
const router = express.Router();


router.get("/" ,(req,res)=>{
    res.send("API rodando");
})

router.get("/hello" ,(req,res)=>{
    res.send("Hello World");
})


module.exports = router;

