class Expense {
  private label: string;
  private amount: number;
  private date: Date;
  constructor(
    label: string,
    amount: number,
    // the union operator | can be used for representing a union of a single type,
    // the utility of using this operator comes from using it over two or more types
    date: Date | string
  ) {
    // the setters are used to update the private properties
    this.updateLabel(label);
    this.updateAmount(amount);
    this.updateDate(date);
  }
  // Getters and setters
  getLabel(): string {
    return this.label;
  }
  // void is used in methods when there isn't the necessity to return a value
  updateLabel(label: string): void {
    this.label = label;
  }
  getAmount(): number {
    return this.amount;
  }
  updateAmount(amount: number) {
    this.amount = amount;
  }
  getDate(): Date {
    return this.date;
  }
  updateDate(date: Date | string) {
    this.date = new Date(date);
  }
}

export default Expense;
