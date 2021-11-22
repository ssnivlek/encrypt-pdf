const express = require("express");
const multer = require("multer");

const { encryptFunction } = require("../controllers/encryptController");
// const { decryptFunction } = require("../controllers/decryptController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "../../..");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const router = express.Router();

router.post("/encrypt", upload.single("file"), encryptFunction);
// router.post("/decrypt", upload.single("file"), decryptFunction);

module.exports = router;
