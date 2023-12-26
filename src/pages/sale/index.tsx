import Product, { Item } from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";
import { useCartStore } from "@/store/useCartStore";
import { Button, TextInput } from "@tremor/react";
import ListDataItem from "@/components/hook/usePage/sale/list";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductData: Item[] = [
  {
    id: "1",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    name: "Iphone 1",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "3",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "4",
    name: "Iphone 12jdhfashfuasdgfasdgfasdfgasdyufgasfasfjkasdgfaksjgfajkdgf",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "5",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "6",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "7",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "8",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "9",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "10",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "11",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "12",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "13",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "14",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
  {
    id: "15",
    name: "Iphone 12",
    qty: 1,
    price: 1000,
    img: "https://picsum.photos/200/300",
  },
];

const SalePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const searchCart = useCartStore((state) => state.searchCart);
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <TextInput
          placeholder="Search"
          className="mx-5 my-5"
          onChange={searchCart}
        />
        <TextInput placeholder="Customer Name" className="mx-5 my-5" />
        <Button className="bg-slate-400   my-5 mx-5" onClick={clearCart}>
          Reset All current order
        </Button>
        <p className="mx-5 my-8">Rating Change</p>
      </div>
      <div className="  mx-5  grid grid-cols-3 gap-1  ">
        <div className="w-[100%] col-span-2">
          <Category />
          <p className="text-center">Product</p>
          <div className="top-56  grid grid-cols-6 gap-5 h-[760px] px-1 w-[150]  overflow-y-auto   ">
            {ProductData.map((item, idx) => (
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
                  });
                }}
              />
            ))}
          </div>
        </div>
        <div className="border-x-0 w-full">
          <ListDataItem />
        </div>
      </div>
    </>
  );
};
export default SalePage;
