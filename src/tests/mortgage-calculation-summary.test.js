import React from "react";
import MortgageCalculationSummary from "../Components/mortgage-calculation-summary.component";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<MortgageCalculationSummary />", () => {
  let container;
  container = shallow(
    <MortgageCalculationSummary
      interestDetails={{
        mortgageAmountPerMonth: "625.00",
        termInterestAmount: "25000.00",
        termPrincipleAmount: "12500.00",
        totalAmountInPeriod: "225000.00",
        totalInterestInPeriod: "125000.00"
      }}
      mortgageDetails={{
        mortgageAmount: 100000.0,
        interestRate: 5.0,
        amortizationPeriodYear: 25,
        amortizationPeriodMonth: 0,
        paymentFrequency: "M",
        term: 5,
        prepaymentAmount: 0.0
      }}
    />
  );
  it("should render mortgage calculater component ", () => {
    expect(container).toHaveLength(1);
  });

  it("should test totalTermAmount", () => {
    expect(container.find("#totalTermAmount").props().children).toBe(
      "37500.00"
    );
  });

  it("should test totaPeriodAmount", () => {
    expect(container.find("#totalPeriodAmount").props().children).toBe(
      "225000.00"
    );
  });
});
