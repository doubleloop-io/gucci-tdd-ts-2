import { EOL } from "node:os"
import { readFileSync } from "fs"

export class UnicodeFileToHtmlTextConverter {
    private readonly fullFilenameWithPath: string

    constructor(fullFilenameWithPath: string) {
        this.fullFilenameWithPath = fullFilenameWithPath
    }

    public convertToHtml(): string {
        const text = readFileSync(this.fullFilenameWithPath).toString()

        const lines = text.split(EOL)
        let html = ""
        for (const line of lines) {
            if (line != null) {
                html += this.htmlEncode(line)
                html += "<br />"
            }
        }

        return html
    }

    private htmlEncode(text: string) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
    }
}
