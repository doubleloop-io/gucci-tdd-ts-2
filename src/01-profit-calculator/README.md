From:
https://github.com/pvcarrera/crafted_design_exercises/tree/master/primitive-obsession

### Goals 
- Practice refactoring in small safe steps
- Practice wrap primitive into an object refactoring
- Distribute responsibilities into a lot of small objects (Value Objects)


### Requirements

* Transform all primitives into types
* Primitives cannot be passed as parameters or be returned by a method
* Primitives can only be passed into the constructor of an Object that defines what that primitive is
* Commit often so that you can leverage git if you get into trouble
* IMPORTANT: During the refactoring steps you should always stay in GREEN (few seconds are allowed)
* If you find yourself with broken test, it's an indicator that you did a step that is too big. Retrace your steps (`git checkout .` is your friend) and start again (or ask for help)
* During refactoring looks for opportunity to move some logic/behaviors to newly born objects 


### Value objects
- Are immutable
- Behave as behavior attractors
- Should hide implementation details (at least in OO)


### Refactoring steps

1. Introduce a Currency class or enum or type literal; Use it on ProfitCalculator.
2. Create an ExchangeRates first class collection; Use it on ProfitCalculator.
3. Create a Money class (amount, currency). Identify all amount operations used by ProfitCalculator and add them to it.
4. Change ProfitCalculator and its tests to use the Money class
5. Create classes Outgoing and Incoming that have an amount():Money method. Outgoing has negative amount.
6. Add a Transaction sum type -> Transaction = Incoming | Outgoing
7. Create a Transactions first class collection and store each Transaction added to ProfitCalculator.
8. Create boolean isIn(Currency) method in Transaction;
9. Create Money amountIn(Currency) in Transactions.
10. Change ProfitCalculator.calculateTax() to use methods created in steps 8 and 9.
11. Now attack calculateProfit(). Pay attention, it's slightly more complex.
    1. Create amountNotIn(Currency, ExchangeRates) in Transactions
12. Simplify ProfitCalculator, removing all the logic from add(Item). calculateProfit() must be simple
13. Change ProfitCalculator tests to pass Item instead of (money, incoming).


### Steps to wrap a primitive
- Place close to primitive to wrap (eg: ExchangeRates)
- Introduce new type (eg: ExchangeRateNew = new ExchangeRates())
- Search all **write** usage, if any, and add new usage in parallel (eg: ExchangeRateNew.setRate(...))
- Your new object is ready to use. Your tests are GREEN, right?
- Search and replace all **read** usage of the old primitive with new object. Be sure to remove all of them. Run tests often
- In case the tests become RED, no panic. `CTRL+Z` or `git checkout .`, go back to GREEN and start again with even smaller steps
- When old primitive is no longer accessed, it should be unused, and you should be able to remove it
