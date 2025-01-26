const express = require("express");
const router = express.Router();
const controller = require("../controller");
router.route("/mcqs").get(controller.getMcqs);
router.route("/empty").get(controller.getEmpty);
router.route("/error").get(controller.getError);

module.exports = router;
