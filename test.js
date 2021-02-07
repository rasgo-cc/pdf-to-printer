const execAsync = require("./src/execAsync");

async function main() {
  await execAsync("lp", [
    "-d",
    "QL-570",
    "-o",
    "fit-to-page",
    "/home/mribeiro/rasgo/bomist-app/.app/.tmp/barcode_951857204.pdf"
  ]);
}

main();
