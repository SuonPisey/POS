import { Button } from "@tremor/react";
import { useQuery } from "@tanstack/react-query";
import { CategoryAPI } from "../../../../data/category";
import { useState } from "react";

interface CategoryProps {
  onClick: (categoryId: string) => void;
}

const Category: React.FC<CategoryProps> = ({ onClick }) => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryAPI.getAll,
  });

  return (
    <>
      {/* Category */}
      <div className="overflow-x-auto flex w-[100%] max-h-16 overflow-red">
        {query.data?.map((item, idx) => (
          <Button
            key={idx}
            size="xl"
            className="bg-slate-100  mx-2 h-8  active:bg-slate-200 "
            onClick={() => {
              {
                onClick(item.id);
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
