import { Card, List, Title } from "@tremor/react";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Table, TableCell, TableRow } from "@/components/ui/table";
import GenerateIcon from "@/components/icons/GenerateIcon";
import ModalPayment from "./modal";
const ListDataItem = () => {
  const { cart, removeFromCart } = useCartStore();
  const [subTotal, setSubTotal] = useState<number>(0);
  const clearCart = useCartStore((state) => state.clearCart);

  const rate = 4100;
  useEffect(() => {
    const sum = cart.items.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
    setSubTotal(sum);
  }, [cart.items]);
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="mt-1 pt-1  	my-auto flex">
          <p className="pt-1"> Curren Order</p>
          <GenerateIcon
            icon="delete"
            className="mb-2 cursor-pointer"
            width={20}
            onClick={clearCart}
          />
        </div>

        <div className="mt-1 pt-1 bg-slate-100  my-auto">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
      </div>
      <div className="overflow-auto h-[560px] mt-5 ">
        {cart.items.map((item, idx) => (
          <Card
            className="max-w-full max-h-20  border-x-0 select-none cursor-pointer  border-dashed border-b-2	 border-slate-600"
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
                <p>Total:${item.price * item.qty}</p>
              </div>
            </List>
          </Card>
        ))}
      </div>
      <Table>
        <TableRow>
          <TableCell className="w-[100px]">Sub Total (USD)</TableCell>
          <TableCell className="w-[100px]">${subTotal}</TableCell>
          <TableCell className="w-[100px]">Grand Total(USD)</TableCell>
          <TableCell className="w-[100px]">${subTotal}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px]">Sub Total (KH)</TableCell>
          <TableCell className="w-[100px]">{subTotal * rate}៛</TableCell>
          <TableCell className="w-[100px]">Grand Total(KH)</TableCell>
          <TableCell className="w-[100px]">{subTotal * rate}៛</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="w-[100px]">Discount </TableCell>
          <TableCell className="w-[100px]"> </TableCell>
          <TableCell className="w-[30px]"></TableCell>
          <TableCell className="w-[30px]"></TableCell>
        </TableRow>
      </Table>
      <br />
      <div>
        <ModalPayment SubTotalKH={subTotal * rate} SubTotalUSD={subTotal} />
      </div>
    </>
  );
};
export default ListDataItem;
