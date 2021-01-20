import { paymentFrequencyOptions } from "./constants";

const generateNumbers = (limit) => {
  const period = [];
  for (let year = 1; year <= limit; year++) {
    period.push(year);
  }
  return period;
};

// generate options in the Amortization period dropdown
const generatePeriodYearsOptions = () => {
  const period = generateNumbers(30);
  return period.map((item) => {
    return <option value={item}>{item} Years</option>;
  });
};

// generate options in the Amortization period months dropdown
const generatePeriodMonthsOption = () => {
  const period = generateNumbers(11);
  return period.map((item) => {
    return <option value={item}>{item} Month</option>;
  });
};

// generate options in the Term dropdown
const generateTermsOptions = () => {
  const period = generateNumbers(30);
  return period.map((item) => {
    return <option value={item}>{item} Years</option>;
  });
};

// generate options in the Payment Frequency dropdown
const generatePaymentFrequencyOptions = () => {
  return paymentFrequencyOptions.map((option) => {
    return <option value={option.key}>{option.value}</option>;
  });
};

const paymentFrequency = {
  W: 52,
  BiW: 26,
  M: 12,
  SemiM: 24
};

export const generateOptionsHelpers = {
  generatePeriodYearsOptions,
  generatePeriodMonthsOption,
  generateTermsOptions,
  generatePaymentFrequencyOptions,
  paymentFrequency
};
