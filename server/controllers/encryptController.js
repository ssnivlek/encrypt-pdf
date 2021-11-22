const HummusRecipe = require("hummus-recipe");
const crypto = require("crypto");

async function encryptFunction(req, res) {
  if (req.file) {
    const name = await req.file.originalname;

    const id = crypto.randomBytes(20).toString("hex");

    const pdfDoc = new HummusRecipe(`${name}`, `encrypt-${name}`);

    await pdfDoc
      .encrypt({
        userPassword: id,
        ownerPassword: id,
        userProtectionFlag: 4,
      })
      .endPDF();

    res.send(`Your pdf password is: ${id}`);
  }
}
module.exports = {
  encryptFunction,
};
