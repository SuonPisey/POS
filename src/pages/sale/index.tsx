import Product, { Item } from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";
import { useCartStore } from "@/store/useCartStore";
import { Button, TextInput } from "@tremor/react";
import ListDataItem from "@/components/hook/usePage/sale/list";
import React, { ChangeEvent, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductData: Item[] = [
  {
    id: "1",
    categoryId: "2",
    name: "Apple",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
    code: "123",
  },
  {
    id: "2",
    categoryId: "1",
    name: "Iphone 1",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
    code: "1234",
  },
  // Existing items...
];

// for (let i = 0; i < 1000; i++) {
//   const newItem: Item = {
//     id: `${i + 3}`,
//     name: `Product ${i + 3}`,
//     qty: 1,
//     price: 10,
//     img: "https://picsum.photos/200/300",
//     code: `${i + 3}`,
//   };
//   ProductData.push(newItem);
// }

const SalePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [inputValue, setInputValue] = useState<string>("");
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    // searchItem({
    //   name: e.target.value,
    // });
  }
  console.log(inputValue);
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <TextInput
          placeholder="Search"
          className="mx-5 my-5"
          onChange={handleSearch}
        />
        <TextInput placeholder="Customer Name" className="mx-5 my-5" />
        <Button className="bg-slate-400   my-5 mx-5" onClick={clearCart}>
          Reset All current order
        </Button>
        <p className="mx-5 my-8">Rating Change:4100/$</p>
      </div>
      <div className="  mx-5  grid grid-cols-3    ">
        <div className="w-[100%] col-span-2">
          <Category />
          <p className="text-center">Product</p>
          <div className="   grid grid-cols-6 gap-5 h-[760px] px-1 w-[150]  overflow-y-auto   ">
            {inputValue === ""
              ? ProductData.map((item, idx) => (
                  <Product
                    item={item}
                    key={`idx-${idx}`}
                    onClick={(item) => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        qty: item.qty,
                        price: item.price,
                        subTotal: 0,
                        categoryId: ""
                      });
                    }}
                  />
                ))
              : ProductData.filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()) ||
                    item.code?.toLowerCase().includes(inputValue.toLowerCase())
                ).map((item, idx) => (
                  <Product
                    item={item}
                    key={`idx-${idx}`}
                    onClick={(item) => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        qty: item.qty,
                        price: item.price,
                        subTotal: 0,
                        categoryId: ""
                      });
                    }}
                  />
                ))}
          </div>
        </div>
        <div className="border-x-0 w-full ml-2">
          <ListDataItem />
        </div>
      </div>
    </>
  );
};
export default SalePage;
