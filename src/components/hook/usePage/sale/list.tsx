import { Card, List, Title } from "@tremor/react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@tremor/react";
import { useEffect, useState } from "react";
const ListDataItem = () => {
  const { cart, deleteFromCart, removeFromCart } = useCartStore();
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    const sum = cart.items.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
    setSubTotal(sum);
  }, [cart.items]);
  console.log(subTotal);
  return (
    <>
      <p className="mt-1 pt-1">Curren Order </p>
      <div className="overflow-auto h-[560px] mt-5 ">
        {cart.items.map((item, idx) => (
          <Card
            className="max-w-full max-h-20 my-3 border-x-0 select-none cursor-pointer "
            key={idx}
            onClick={() => {
              removeFromCart(item);
            }}
          >
            <List>
              <Title>{item.name}</Title>
              <div className="flex">
                <p>Qty:{item.qty}</p>
                <p className="mx-auto">Price:{item.price}</p>
                <p>Total:{item.price * item.qty}$</p>
              </div>
            </List>
          </Card>
        ))}
      </div>
      <div>
        <p>
          SubTotal: <span className="ml-10">{subTotal}$</span>
        </p>
        <p>
          Discount: <span className="ml-10">0$</span>
        </p>
        <p>
          Total: <span className="ml-[70px]">{subTotal}$</span>
        </p>
      </div>
      <br /> 
      <div>
        <Button className="bg-slate-400 w-full h-[90px]">Payment</Button>
      </div>
    </>
  );
};
export default ListDataItem;
