import Product, { Item } from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";
import { useCartStore } from "@/store/useCartStore";
import ListDataItem from "@/components/hook/usePage/sale/list";
import React, { ChangeEvent, useState } from "react";
import { ModalPayment } from "@/components/hook/usePage/sale/modal";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductData: Item[] = [
  {
    id: "1",
    categoryId: "1",
    name: "Apple Apple Apple Apple Apple   ",
    qty: 1,
    price: 100,
    img: "/para.png",
    code: "123",
  },
  {
    id: "2",
    categoryId: "2",
    name: "Iphone 1",
    qty: 1,
    price: 100,
    img: "/para.png",
    code: "1234",
  },
  {
    id: "3",
    categoryId: "3",
    name: "Iphone 1",
    qty: 1,
    price: 10,
    img: "/para.png",
    code: "1234",
  },
  {
    id: "4",
    categoryId: "4",
    name: "Apple",
    qty: 1,
    price: 10,
    img: "/para.png",
    code: "123",
  },
  {
    id: "5",
    categoryId: "1",
    name: "Iphone 1",
    qty: 1,
    price: 10,
    img: "/para.png",
    code: "1234",
  },
  {
    id: "6",
    categoryId: "2",
    name: "Iphone 1",
    qty: 1,
    price: 1,
    img: "/para.png",
    code: "1234",
  },

  // Existing items...
];

for (let i = 0; i < 10; i++) {
  const newItem: Item = {
    id: `${i + 3}`,
    name: `Product iphone ${i + 3}`,
    qty: 100,
    price: 10,
    img: "/para.png ",
    code: `${i + 3}`,
  };
  ProductData.push(newItem);
}

const SalePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [selectedcategory, setSelectedCategory] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  console.log("filteredData", selectedcategory);
  const handleCategorySelect = (categoryId: string) => {
    const newData = ProductData.filter(
      (item) => item.categoryId === selectedcategory
    );
    setSelectedCategory(categoryId);
    setFilteredData(newData);
  };
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <>
      {/* <div className="grid grid-cols-4 gap-10">
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
      </div> */}
 
      <div className="  mx-5  grid grid-cols-3    ">
        <div className="w-[100%] col-span-2 h-full  ">
          <Category onClick={handleCategorySelect} />
          <p className="text-center text-font-bold">Product</p>
          <div className="   grid grid-cols-4 gap-5 h-[800px] px-1 w-[150]  overflow-y-auto   ">
            {selectedcategory === ""
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
                        categoryId: "",
                      });
                    }}
                  />
                ))
              : inputValue === ""
              ? filteredData.map((item, idx) => (
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
                        categoryId: "",
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
                        categoryId: "",
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
