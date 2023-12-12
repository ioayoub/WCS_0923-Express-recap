const express = require("express");

const router = express.Router();

const totoRouter = require("./routers/totoRouter");
const itemsRouter = require("./routers/totoRouter");
const articlesRouter = require("./routers/totoRouter");

router.use("/toto", totoRouter);
router.use("/items", itemsRouter);
router.use("/articles", articlesRouter);

module.exports = router;
