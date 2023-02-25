From:
https://github.com/pvcarrera/crafted_design_exercises/tree/master/primitive-obsession

**Requirements**

* Transform all primitives into types
* Primitives cannot be passed as parameters or be returned by a method
* Primitives can only be passed into the constructor of an Object that defines what that primitive is

**Refactoring steps**

1. Introduce a Currency class or enum; Use it on ProfitCalculator.
2. Create an ExchangeRates first class collection; Use it on ProfitCalculator.
3. Create a Money class. Identify all amount operations used by ProfitCalculator and add them to it.
4. Change ProfitCalculator and its tests to use the Money class
5. Create classes Outgoing and Incoming that have an amount():Money method. Outgoing has negative amount.
6. Add a Transaction sum type -> Transaction = Incoming | Outgoing
7. Change ProfitCalculator and its tests to use Item.
8. Create a Transactions first class collection and store each Transaction added to ProfitCalculator.
9. Create boolean isIn(Currency) method in Transaction;
10. Create Money amountIn(Currency) in Transactions.
11. Change ProfitCalculator.calculateTax() to use methods created in steps 9 and 10.
12. Remove localAmount field from ProfitCalculator, making necessary changes.
13. Create Transactions notIn(currency) and Money amountIn(Currency, ExchangeRates) in Transactions
14. Simplify ProfitCalculator, removing all the logic from add(Item). calculateProfit() must be simple
