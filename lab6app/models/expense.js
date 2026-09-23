class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The author of the book.
   @param {float} expense 
   @param {string} detail 
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class ExpenseModel
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {Expense} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {Expense[]} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }
  
  /** 
   * @return {number} 
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }
  
  /** 
   * @return {number} 
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }
  
  /** 
   * @return {number} 
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
  

}

module.exports = { Expense, ExpenseModel };
