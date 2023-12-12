const express = require("express");

const router = express.Router();

const { sayHelloToto } = require("../controllers/totoController");

router.post("/", sayHelloToto);

router.post("/hello", sayHelloToto);
router.post("/hello/4", sayHelloToto);
router.post("/sayHello", sayHelloToto);
router.post("/helloAgain", sayHelloToto);

module.exports = router;
