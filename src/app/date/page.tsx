"use client";

import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { useState } from "react";
import { parseJSON } from "date-fns";
import NepaliDate from "nepali-date-converter";
import { Button } from "../../components/ui/button";

const DatePage = () => {
  const [date, ] = useState<string>("");

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
            className="text-xs hover:border-blue-500"
            maxYear={new NepaliDate().getYear()}
            value=""
            onChange={(date) => {
              const nepDate = new NepaliDate(date).toJsDate();
              console.log(1);
              console.log(2);
              console.log(3);
              console.log(4);
              console.log(5);
              console.log(6);
              console.log(`nepali date picker ${nepDate.getTime()}`);
              // setDate(parseJSON(nepDate));
            }}
            options={{
              calenderLocale: "en",
              valueLocale: "en",
            }}
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DatePage;
