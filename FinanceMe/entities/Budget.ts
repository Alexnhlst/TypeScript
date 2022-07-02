import truncate from "../utils/truncate";
import genUniqueId from "../utils/getUniqueId";
import Expense from "./Expense";
import Category from "../enums/Category";

class Budget {
  private label: string;
  private limit: number;
  private id: string;
  // enum
  private category: Category;
  // in TS is possible to create arrays by adding [] to an existing type
  // to represent an array of that type
  private expenses: Expense[];
  constructor(
    label: string,
    limit: number,
    category: Category,
    expenses: Expense[]
  ) {
    this.updateLabel(label);
    this.updateLimit(limit);
    this.updateCategory(category);
    this.id = genUniqueId();
    this.expenses = expenses;
  }
  getId(): string {
    return this.id;
  }
  getLabel(): string {
    return this.label;
  }
  updateLabel(label: string) {
    this.label = truncate(label, 15);
  }
  getLimit(): number {
    return this.limit;
  }
  updateLimit(limit: number): void {
    this.limit = limit;
  }
  getCategory(category): Category {
    return this.category;
  }
  updateCategory(category: Category) {
    this.category = category;
  }
  getExpenses(): Expense[] {
    return this.expenses;
  }
  // to get the sum of all expenses the Array.prototype.reduce() method is used
  // the first parameter passed to the callback is the accumulator, the second the Expense object
  // the result of the additition becomes the accumulator in the next iteration
  // the second parameter of reduce() sets an initial value, in this case 0
  getExpenseTotal(): number {
    return this.getExpenses().reduce(
      (sum, expense) => sum + expense.getAmount(),
      0
    );
  }
  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit();
  }
}

export default Budget;
