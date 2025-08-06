import { Calculadora } from './calculadora_clase.mjs'
import { input } from "./utils.mjs"

const calc = new Calculadora()

async function main() {
    while (true) {
        console.log("\n=== CALCULADORA ===")
        console.log("1. Sumar")
        console.log("2. Restar")
        console.log("3. Multiplicar")
        console.log("4. Dividir")
        console.log("5. Resto")
        console.log("6. Potencia")
        console.log("0. Salir")

        const opcion = await input("Elige una opción: ")
        if (opcion === "0") break;

        const a = parseFloat(await input("Primer número: "))
        const b = parseFloat(await input("Segundo número: "))

        try {
            let resultado
            switch (opcion) {
                case "1":
                    resultado = calc.sumar(a, b)
                    break
                case "2":
                    resultado = calc.restar(a, b)
                    break
                case "3":
                    resultado = calc.multiplicar(a, b)
                    break
                case "4":
                    resultado = calc.dividir(a, b)
                    break
                case "5":
                    resultado = calc.resto(a, b)
                    break
                case "6":
                    resultado = calc.potencia(a, b)
                    break
                default:
                    console.log("Opción inválida.")
                    continue
            }
            console.log(`Resultado: ${resultado}`)
        } catch (error) {
            console.log("Error:", error.message)
        }
    }

    console.log("Gud bai")
}

main()
