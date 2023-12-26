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
      <div>
        {/* {dataProdusct.map((item) => ( */}
        <Card
          className="max-w-xs  mr-1  h-[200px] cursor-pointer  mt-1"
          decoration="top"
          decorationColor="indigo"
          onClick={() => {
            onClick?.(item);
          }}
        >
          <img
            src={item.img || "https://picsum.photos/200/300"}
            alt={item.name}
            className="w-[100%] h-[100px]"
          />
          <Text className="absolute bottom-0  left-1  ">{item.name}</Text>
          <Metric className="absolute top-0 left-1">{item.price}$</Metric>
          <Text className="top-0 absolute right-1">Qty:{item.qty}</Text>
        </Card>
      </div>
    </>
  );
};
export default Product;
