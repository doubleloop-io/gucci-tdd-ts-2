export class ProfitCalculator {
    static readonly ExchangeRates: Record<string, number> = {
        GBP: 1.0,
        USD: 1.6,
        EUR: 1.2,
    }

    localCurrency: string
    localAmount = 0
    foreignAmount = 0

    constructor(localCurrency: string) {
        this.localCurrency = localCurrency

        if (!ProfitCalculator.ExchangeRates[localCurrency]) {
            throw new Error(`Invalid currency '${localCurrency}'`)
        }
    }

    add(amount: number, currency: string, incoming: boolean) {
        let realAmount = amount

        if (!ProfitCalculator.ExchangeRates[currency]) {
            throw new Error(`Invalid currency '${currency}'`)
        }

        const exchangeRate =
            (ProfitCalculator.ExchangeRates[currency] || 0) /
            (ProfitCalculator.ExchangeRates[this.localCurrency] || 0)

        realAmount = Math.floor(realAmount / exchangeRate)

        if (!incoming) {
            realAmount = -realAmount
        }

        if (this.localCurrency == currency) {
            this.localAmount += realAmount
        } else {
            this.foreignAmount += realAmount
        }
    }

    calculateProfit() {
        return this.localAmount - this.calculateTax() + this.foreignAmount
    }

    calculateTax() {
        if (this.localAmount < 0) {
            return 0
        }

        return Math.floor(this.localAmount * 0.2)
    }
}
