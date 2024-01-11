import { test, expect, beforeEach } from "vitest"
import { ProfitCalculator } from "./profile-calculator"

let gbpCalculator = new ProfitCalculator("GBP")
let eurCalculator = new ProfitCalculator("EUR")

beforeEach(() => {
    gbpCalculator = new ProfitCalculator("GBP")
    eurCalculator = new ProfitCalculator("EUR")
})

test("calculates_the_tax_at_20_percent", () => {
    gbpCalculator.add(500, "GBP", true)

    const profit = gbpCalculator.calculateProfit()
    const tax = gbpCalculator.calculateTax()

    expect(profit).toBe(400)
    expect(tax).toBe(100)
})

test("calculates_the_tax_of_multiple_amounts", () => {
    gbpCalculator.add(120, "GBP", true)
    gbpCalculator.add(200, "GBP", true)

    const profit = gbpCalculator.calculateProfit()
    const tax = gbpCalculator.calculateTax()

    expect(profit).toBe(256)
    expect(tax).toBe(64)
})

test("different_currencies_are_not_taxed", () => {
    gbpCalculator.add(120, "GBP", true)
    gbpCalculator.add(200, "USD", true)

    const profit = gbpCalculator.calculateProfit()
    const tax = gbpCalculator.calculateTax()

    expect(profit).toBe(221)
    expect(tax).toBe(24)
})

test("handle_outgoings", () => {
    gbpCalculator.add(500, "GBP", true)
    gbpCalculator.add(80, "USD", true)
    gbpCalculator.add(360, "EUR", false)

    const profit = gbpCalculator.calculateProfit()
    const tax = gbpCalculator.calculateTax()

    expect(profit).toBe(150)
    expect(tax).toBe(100)
})

test("a_negative_balance_results_in_no_tax", () => {
    gbpCalculator.add(500, "GBP", true)
    gbpCalculator.add(200, "GBP", false)
    gbpCalculator.add(400, "GBP", false)
    gbpCalculator.add(20, "GBP", false)

    const profit = gbpCalculator.calculateProfit()
    const tax = gbpCalculator.calculateTax()

    expect(profit).toBe(-120)
    expect(tax).toBe(0)
})

test("everything_is_reported_in_the_local_currency", () => {
    eurCalculator.add(400, "GBP", true)
    eurCalculator.add(200, "USD", false)
    eurCalculator.add(200, "EUR", true)

    const profit = eurCalculator.calculateProfit()
    const tax = eurCalculator.calculateTax()

    expect(profit).toBe(491)
    expect(tax).toBe(40)
})
