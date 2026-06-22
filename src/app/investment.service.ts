import type { IResultsData } from "./results-data.model";
import type { IInvestmentInput } from "./user-input/investment-input.model";
import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  resultData = signal<IResultsData[] | undefined>(undefined);

  calculateInvestmentResults(data: IInvestmentInput) {
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set(annualData);
  }
}
