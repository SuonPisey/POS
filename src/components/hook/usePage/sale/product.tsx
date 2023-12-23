import { Card, Metric, Text } from "@tremor/react";
import React from "react";

export interface Item {
  id: string;
  name: string;
  qty: number;
  price: number;
  img?: string;
}
interface ProductProps {
  item: Item;
  onClick?: (item: Item) => void;
}

const Product: React.FC<ProductProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { item, onClick } = props;

  return (
    <>
      {/* product */}
      {/* <div className=" top-56  grid grid-cols-5 gap-5 overflow-y-auto h-[250px] px-1 w-full"> */}
      <div>
        {/* {dataProdusct.map((item) => ( */}
        <Card
          className="max-w-xs  mr-1 my-1 min-h-[200px] cursor-pointer"
          decoration="top"
          decorationColor="indigo"
          onClick={() => {
            onClick?.(item);
          }}
        >
          <img
            src={item.img || "https://picsum.photos/200/300"}
            alt={item.name}
          />
          <Text className="absolute bottom-0  left-1">{item.name}</Text>
          <Metric className="absolute top-0 left-1">{item.price}$</Metric>
          <Text className="top-0 absolute right-1">{item.qty}</Text>
        </Card>
        {/* ))} */}
      </div>
    </>
  );
};
export default Product;
