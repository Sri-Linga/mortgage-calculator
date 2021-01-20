import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MortgageCalculationSummary from "../components/mortgage-calculation-summary.component";
import MortgageCalculator from "../components/mortgage-calculator.component";

configure({ adapter: new Adapter() });

describe("<MortgageCalculater />", () => {
  let container;
  container = shallow(<MortgageCalculator />);
  it("should render mortgageamount component", () => {
    container
      .find("#mortgageamount")
      .simulate("change", { target: { value: 100000.0 } });
    expect(container.find("#mortgageamount")).toHaveLength(1);
  });

  it("should render interestRate component", () => {
    container
      .find("#interestRate")
      .simulate("change", { target: { value: 5 } });
    expect(container.find("#interestRate")).toHaveLength(1);
  });

  it("should render amortizationPeriodYear component", () => {
    container
      .find("#amortizationPeriodYear")
      .simulate("change", { target: { value: 25 } });
    expect(container.find("#amortizationPeriodYear")).toHaveLength(1);
  });

  it("should render amortizationPeriodMonth component", () => {
    container
      .find("#amortizationPeriodMonth")
      .simulate("change", { target: { value: 0 } });
    expect(container.find("#amortizationPeriodMonth")).toHaveLength(1);
  });

  it("should render paymentFrequency component", () => {
    container
      .find("#paymentFrequency")
      .simulate("change", { target: { value: 12 } });
    expect(container.find("#paymentFrequency")).toHaveLength(1);
  });

  it("should render term component", () => {
    container.find("#term").simulate("change", { target: { value: 5 } });
    expect(container.find("#term")).toHaveLength(1);
  });

  it("should render prepaymentAmount component", () => {
    container
      .find("#prepaymentAmount")
      .simulate("change", { target: { value: 0 } });
    expect(container.find("#prepaymentAmount")).toHaveLength(1);
  });

  it("should render calculateMortgage button", () => {
    container.find("#calculateMortgage").simulate("click");
    expect(container.find("#calculateMortgage")).toHaveLength(1);
    let mortgageCalculationSummaryContainer = shallow(
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
    expect(
      mortgageCalculationSummaryContainer.find("#totalPeriodAmount").props()
        .children
    ).toBe("225000.00");
  });
});
