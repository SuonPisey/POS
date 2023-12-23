import { Button } from "@tremor/react";
import { useQuery } from '@tanstack/react-query';
import { CategoryAPI } from "../../../../data/category";

const Category = () => {
  const query = useQuery({
    queryKey: ['categories'],
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
            className="bg-slate-100  mx-2 h-8  active:bg-cyan-400"
          >
            {item.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Category;
