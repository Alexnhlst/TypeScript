import genUniqueId from "../utils/getUniqueId";
import truncate from "../utils/truncate";

class Expense {
  private label: string;
  private amount: number;
  private date: Date;
  private id: string;
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
    // the id is generated with the util function
    this.id = genUniqueId();
  }
  // Getters and setters
  getId(): string {
    return this.id;
  }
  getLabel(): string {
    return this.label;
  }
  updateLabel(label: string): void {
    this.label = truncate(label, 20);
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
