const fs = require("fs");
const path = require("path");
const readline = require("readline");

const INVENTORY_FILE = path.join(__dirname, "inventario.inv");

async function leerEImprimirInventario(volverAlMenu) {
  try {
    if (!fs.existsSync(INVENTORY_FILE)) {
      throw new Error(`No se encontró el archivo: ${INVENTORY_FILE}`);
    }

    const stream = fs.createReadStream(INVENTORY_FILE, { encoding: "utf8" });

    await new Promise((resolve, reject) => {
      stream.on("error", reject);

      const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
      rl.on("line", (linea) => {
        console.log(linea);
      });
      rl.on("close", resolve);
    });

  } catch (err) {
    console.error("⚠️ Error al leer el archivo:", err.message);
  } finally {
    volverAlMenu();
  }
}

function iniciarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const mostrarMenu = () => {
    console.log("\n=== MENÚ ===");
    console.log("1. Leer archivo .inv e imprimir su contenido");
    console.log("2. Salir");

    rl.question("Seleccione una opción (1-2): ", async (respuesta) => {
      const opcion = (respuesta || "").trim();

      switch (opcion) {
        case "1":
          await leerEImprimirInventario(mostrarMenu);
          break;
        case "2":
          console.log("Saliendo... ¡Hasta luego!");
          rl.close();
          break;
        default:
          console.log("Opción no válida. Intente de nuevo.");
          mostrarMenu();
      }
    });
  };

  mostrarMenu();
}

iniciarMenu();
