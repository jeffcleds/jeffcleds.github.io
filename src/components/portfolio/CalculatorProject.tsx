import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalculatorProject: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "C", "DEL", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Simple Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              className="w-full text-right text-2xl p-4 mb-2"
              value={input}
              readOnly
              placeholder="0"
            />
            <Input
              type="text"
              className="w-full text-right text-3xl font-bold p-4 bg-muted"
              value={result}
              readOnly
              placeholder="Result"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <Button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className={`p-4 text-xl ${
                  btn === "C" || btn === "DEL"
                    ? "bg-destructive hover:bg-destructive/90"
                    : btn === "="
                    ? "col-span-2 bg-primary hover:bg-primary/90"
                    : ["/", "*", "-", "+"].includes(btn)
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : ""
                }`}
              >
                {btn}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculatorProject;