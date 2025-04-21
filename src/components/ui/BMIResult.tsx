import Card from "./Card";
import { Activity, AlertCircle, ThumbsUp, Heart } from "lucide-react";
import { BMIResult as BMIResultType } from "@/lib/calculateBMI";

interface BMIResultProps {
  result: BMIResultType;
}

export default function BMIResult({ result }: BMIResultProps) {
  const { bmi, category, message } = result;

  const getCategoryColors = () => {
    switch (category) {
      case "Underweight":
        return "bg-blue-100 text-blue-800";
      case "Normal":
        return "bg-green-100 text-green-800";
      case "Overweight":
        return "bg-yellow-100 text-yellow-800";
      case "Obese":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case "Underweight":
        return (
          <AlertCircle
            className="mr-2"
            size={20}
            aria-hidden="true"
          />
        );
      case "Normal":
        return (
          <ThumbsUp
            className="mr-2"
            size={20}
            aria-hidden="true"
          />
        );
      case "Overweight":
        return (
          <Activity
            className="mr-2"
            size={20}
            aria-hidden="true"
          />
        );
      case "Obese":
        return (
          <Heart
            className="mr-2"
            size={20}
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="mb-8">
      <div className="text-center mb-4">
        <h3
          className="text-2xl font-bold mb-2"
          id="bmi-result-heading">
          Your BMI Result
        </h3>
        <div
          className="text-4xl font-bold text-blue-600"
          aria-label={`BMI value: ${bmi}`}>
          {bmi}
        </div>
      </div>

      <div
        className={`rounded-lg p-3 flex items-center mb-3 ${getCategoryColors()}`}
        role="status"
        aria-label={`BMI Category: ${category}`}>
        {getCategoryIcon()}
        <span className="font-medium">{category}</span>
      </div>

      <p
        className="text-gray-700"
        aria-label="Health recommendation">
        {message}
      </p>
    </Card>
  );
}
