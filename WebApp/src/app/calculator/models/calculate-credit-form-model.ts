export class CalculateCreditFormModel {
  loanAmount: number;
  period: number;

  constructor(value: number, period: number) {
    this.loanAmount = value;
    this.period = period;
  }
}
