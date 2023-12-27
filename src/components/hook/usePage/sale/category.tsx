import { Button } from "@tremor/react";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";
import { CategoryAPI } from "../../../../data/category";
import { useState } from "react";

const Category = () => {
  const [dateSelect, setDataSelect] = useState<string>("");
  console.log("Test",dateSelect)
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryAPI.getAll,
  });

  return (
    <>
      {/* Category */}
      <div className="overflow-x-auto flex w-[100%] max-h-16 overflow-red">
        {query.data?.map((item) => (
          <Button
            key={item.id}
            size="xl"
            className="bg-slate-100  mx-2 h-8  active:bg-slate-200 "
            onClick={() => {
              {
                setDataSelect(item.id);
              }
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Category;
