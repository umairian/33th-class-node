const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student")

router.post("/", studentController.post);

router.get("/", studentController.getAll);

router.get("/:studentId", studentController.getSingle)

router.put("/:studentId", studentController.update)

router.delete("/:studentId", studentController.deleteUser)

module.exports = router;