const {Router} = require("express");
const { sendEmailController } = require("../controllers/email.controller");


const router = Router();

router.post("/email", sendEmailController);

module.exports = router;