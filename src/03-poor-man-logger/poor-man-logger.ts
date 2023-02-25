import { writeFile } from "fs/promises"
import { EOL } from "node:os"

export class PoorManLogger {
    private readonly fileName = "log.txt"

    async log(level: string, message: string | null | undefined) {
        if (!message) message = "(message was null)"

        await writeFile(this.fileName, `${level} ${message}${EOL}`, {
            flag: "a",
        })
    }
}
