import { Card, Metric,Text } from "@tremor/react";
const dataProdusct: { name?: string; qty?: string; price?: string }[] = [
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
    { name: "Apple Watch", qty: "1", price: "100" },
  ];
  
const Product = () => {
  return (
    <>
    
      {/* product */}
      <div className="absolute top-56 mx-6 grid grid-cols-5 gap-5 overflow-y-auto h-[730px] px-1 w-[900px]" >
        {dataProdusct.map((item) => (
          <Card
            className="max-w-xs  mr-1 my-1"
            decoration="top"
            decorationColor="indigo"
          >
            <Text>{item.name}</Text>
            <Metric>{item.price}</Metric>
            <Text>{item.qty}</Text>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Product;
