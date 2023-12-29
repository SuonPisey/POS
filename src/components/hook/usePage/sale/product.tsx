import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  return (
    <>
      <div>
        {/* <Card
          className="max-w-xs  mr-1  h-[200px] cursor-pointer  mt -1  hover:bg-slate-200  "
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
        </Card> */}

        <Card className="rounded-lgmax-[250px] p-2 grid gap-2 bg-slate-400 h-[300px]"
          onClick={() => {
            onClick?.(item);
          }}>
          <CardContent className="p-0 grid gap-2 rounded-md">
            <div className="flex items-center justify-center">
              <img
                alt="POS Item Image"
                className="w-full h-full object-cover"
                height="100"
                src={item.img || "https://picsum.photos/200/300"}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
            </div>
            <div className="grid gap-1 text-center">
              <CardTitle className="text-md">{item.name}</CardTitle>
            </div>
            <div className="flex flex-col items-start gap-1 text-sm">
              <Badge className="items-center" variant="outline">
                {/* <TagIcon className="h-3 w-3" /> */}
                {item.price}
              </Badge>
              <Badge className="items-center" variant="outline">
                {/* <VolumeIcon className="h-3 w-3" /> */}
                {item.qty}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="text-xs p-0 justify-end flex items-center">
            {/* <Button className="w-auto mx-auto flex items-center justify-center p-0" variant="outline"> */}
            {/* <ShoppingCartIcon className="h-4 w-4" /> */}
            {/* </Button> */}
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default Product;
