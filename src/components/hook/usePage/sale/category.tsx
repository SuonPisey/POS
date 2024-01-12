import { Button } from "@tremor/react";
import { useQuery } from "@tanstack/react-query";
import { CategoryAPI } from "../../../../data/category";
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
      <div className="overflow-x-auto flex w-[100%] max-h-16 overflow-red h-14">
        {query.data?.map((item, idx) => (
          <Button
            key={idx}
            size="xl"
            className="bg-slate-100  mx-2   active:bg-slate-200    rounded-lg   hover:shadow-lg  hover:bg-slate-300  ease-in"
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
