import { delay, green, yellow } from "./support/helpers"

const hello = (who: string) => `Hello ${who}!`

const greet = async () => {
    const result = await delay(200)
    const message = hello("World")
    const duration = `${result}ms`

    console.log(`${green(message)} after ${yellow(duration)}`)
}

greet()
