import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import React from "react";

export interface Item {
  id: string;
  name: string;
  qty: number;
  price: number;
  img?: string;
  categoryId?: string;
  code?: string;
}
interface ProductProps {
  item: Item;
  onClick?: (item: Item) => void;
}

const Product: React.FC<ProductProps> = (props) => {
  const { item, onClick } = props;
  const [qty, setQty] = React.useState(item.qty);

  const handleAdjustQty = () => {
    setQty((item.qty = item.qty - 1));
  };

  return (
    <>
      <div>
        <Card
          className="max-w-[230px] min-w-[230px]  grid gap-2 min-h-[300px] max-h-[300px] shadow-md hover:shadow-2xl  "
          style={{
            borderRadius: "0px 15px 15px 15px",
          }}
          onClick={() => {
            onClick?.(item);
            handleAdjustQty();
          }}
        >
          <div
            className="bg-red-400 w-[75px] h-[20px] text-xs	"
            style={{
              borderRadius: "0px 0px 15px 0px",
            }}
          >
            <p className="mx-auto text-center text-slate-100 mt-[2px]  ">
              {item.qty}
              <sup> Qty</sup>
            </p>
          </div>
          <CardContent className="p-0 grid gap-2 rounded-md">
            <div className="flex items-center justify-center">
              <img
                alt="POS Item Image"
                className="w-[200px] h-[150px] object-cover "
                src={item.img || "https://picsum.photos/200/300"}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="grid gap-1 text-center">
              <CardTitle className="text-md">{item.name}</CardTitle>
            </div>
          </CardContent>
          <CardFooter className="text-xs p-0 justify-start flex items-center">
            <div className="flex flex-col items-start gap-1 text-sm  ">
              {/* <Badge 
                className="items-center w-[180px] h-[30px]  cursor-pointer  hover:bg-slate-300  bg-cyan-500  "
                variant="outline"
              >
                <GenerateIcon
                  icon="dollar"
                  className="w-[20px] h-[20px] text-slate-100"
                />
                <p className="text-center mx-auto text-slate-100">
                  ${item.price}/unit
                </p>
              </Badge> */}
              <p className="pl-4 ">${item.price}/unit</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default Product;
