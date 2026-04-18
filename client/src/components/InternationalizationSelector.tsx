import { useInternationalization, type Currency, type Language } from "@/contexts/InternationalizationContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export default function InternationalizationSelector() {
  const { currency, language, setCurrency, setLanguage } =
    useInternationalization();

  const currencies: Currency[] = ["PKR", "USD", "EUR", "GBP", "AUD"];
  const languages: Language[] = ["en", "ur"];

  const languageLabels: { [key in Language]: string } = {
    en: "English",
    ur: "اردو",
  };

  return (
    <div className="flex items-center gap-3">
      <Globe className="w-4 h-4 text-accent" />
      
      {/* Currency Selector */}
      <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
        <SelectTrigger className="w-24 h-9 bg-white border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((curr) => (
            <SelectItem key={curr} value={curr}>
              {curr}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Language Selector */}
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className="w-32 h-9 bg-white border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {languageLabels[lang]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
