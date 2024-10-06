"use client";

import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { useState } from "react";
import { Button } from "../../components/ui/button";

const DatePage = () => {
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`nepali date picker ${date}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen flex-col items-center justify-center gap-3 bg-slate-600"
    >
      <div className="flex flex-col gap-16">
        <div className=" ">
          <NepaliDatePicker
            inputClassName="form-control"
            className="w-96 text-lg hover:border-blue-500"
            value={date}
            onChange={(value: string) => setDate(value)}
            options={{ calenderLocale: "en", valueLocale: "en" }}
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DatePage;
