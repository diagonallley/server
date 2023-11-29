const express = require("express"); // Common JS modules

// import express from 'express'; ES 2015

const app = express();

app.get("/", (req, res) => {
    res.send({ hi: "There" })

})



const PORT = process.env.PORT || 3000;

app.listen(PORT);