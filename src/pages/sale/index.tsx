import Product, { Item } from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";
import { useCartStore } from "@/store/useCartStore";
import ListDataItem from "@/components/hook/usePage/sale/list";
import React, { ChangeEvent, useState } from "react";

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
    qty: 10,
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
    qty: 10,
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
];

const SalePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const handleCategorySelect = (categoryId: string) => {
    const newData = ProductData.filter(
      (item) => item.categoryId === selectedCategory
    );
    setSelectedCategory(categoryId);
    setFilteredData(newData);
  };

  return (
    <>
      <div className="  mx-5  grid grid-cols-3    ">
        <div className="w-[100%] col-span-2 h-full  ">
          <Category onClick={handleCategorySelect} />
          <div className="   grid grid-cols-5 gap-5 h-[800px] px-1 w-[150]  overflow-y-auto   mt-4">
            {selectedCategory === ""
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
                ).map(
                  (item, idx) => (
                    console.log("item", item.qty),
                    (
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
                    )
                  )
                )}
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
