import { Button } from "@tremor/react";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const databutton: {
  value: string;
}[] = [
  {
    value: "allpe",
  },
  {
    value: "allle",
  },
  {
    value: "allle",
  },
  {
    value: "allle",
  },
  {
    value: "allle",
  },
  {
    value: "Apple Watch",
  },
  {
    value: "Orange Watch",
  },
  {
    value: "Banana Watch",
  },
  {
    value: "Para Watch",
  },
  {
    value: "allle",
  },
];
const Category: React.FC = () => {
  // Add your component logic here

  return (
    <>
      {/* Category */}
      <div className="overflow-x-auto flex w-[100%] max-h-16 overflow-red">
        {databutton.map((item) => (
          <Button
            size="xl"
            className="bg-slate-100  mx-2 h-8  active:bg-cyan-400"
          >
            {item.value}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Category;
