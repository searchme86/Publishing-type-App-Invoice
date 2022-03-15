export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  form() {
    return `${this.client} owns $${this.amount} for ${this.details}`;
  }
}
