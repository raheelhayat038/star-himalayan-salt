import React, { createContext, useContext, useState } from "react";

export type Currency = "PKR" | "USD" | "EUR" | "GBP" | "AUD";
export type Language = "en" | "ur";

interface CurrencyRate {
  [key: string]: number;
}

interface InternationalizationContextType {
  currency: Currency;
  language: Language;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: Language) => void;
  convertPrice: (pricePKR: number) => string;
  currencySymbol: string;
  exchangeRates: CurrencyRate;
}

const exchangeRates: CurrencyRate = {
  PKR: 1,
  USD: 0.0036,
  EUR: 0.0033,
  GBP: 0.0029,
  AUD: 0.0055,
};

const currencySymbols: { [key in Currency]: string } = {
  PKR: "₨",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "A$",
};

const InternationalizationContext = createContext<
  InternationalizationContextType | undefined
>(undefined);

export const InternationalizationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("PKR");
  const [language, setLanguage] = useState<Language>("en");

  const convertPrice = (pricePKR: number): string => {
    const convertedPrice = pricePKR * exchangeRates[currency];
    return `${currencySymbols[currency]}${convertedPrice.toFixed(2)}`;
  };

  return (
    <InternationalizationContext.Provider
      value={{
        currency,
        language,
        setCurrency,
        setLanguage,
        convertPrice,
        currencySymbol: currencySymbols[currency],
        exchangeRates,
      }}
    >
      {children}
    </InternationalizationContext.Provider>
  );
};

export const useInternationalization = () => {
  const context = useContext(InternationalizationContext);
  if (!context) {
    throw new Error(
      "useInternationalization must be used within InternationalizationProvider"
    );
  }
  return context;
};
