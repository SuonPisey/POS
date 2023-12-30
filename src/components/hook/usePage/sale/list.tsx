import { Card, List, Title } from "@tremor/react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@tremor/react";
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
import SheetPayment from "@/components/sheet";
import { Table, TableHead, TableRow } from "@/components/ui/table";
import { Item } from "@radix-ui/react-select";
const ListDataItem = () => {
  const { cart, removeFromCart } = useCartStore();
  const [subTotal, setSubTotal] = useState<number>(0);
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
      {/* <p className="mt-1 pt-1">Curren Order </p> */}
      <div className="grid grid-cols-2">
        <div className="mt-1 pt-1 font-bold	 ">Curren Order</div>
        <div className="mt-1 pt-1 bg-slate-100 ">
          <Select >
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
            className="max-w-full max-h-20 my-3 border-x-0 select-none cursor-pointer  border-collapse border-2	 border-slate-600"
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
      {/* <div className="grid grid-cols-2">
        <div>
          <p>
            SubTotal Riel: <span className="ml-10">{subTotal * rate}៛</span>
          </p>
          <p>
            SubTotal: <span className="ml-[75px]">${subTotal}</span>
          </p>

          <p>
            Discount: <span className="ml-[75px]">0</span>
          </p>
        </div>
        <div>
          <p>
            Total Riel: <span className="ml-10">{subTotal * rate}៛</span>
          </p>
          <p>
            Total Dollar: <span className="ml-6">${subTotal}</span>
          </p>
        </div>
      </div> */}
      <Table>
        <TableRow>
          <TableHead className="w-[100px]">Sub Total (USD)</TableHead>
          <TableHead className="w-[100px]">${subTotal}</TableHead>
          <TableHead className="w-[100px]">Grand Total(USD)</TableHead>
          <TableHead className="w-[100px]">${subTotal}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="w-[100px]">Sub Total (KH)</TableHead>
          <TableHead className="w-[100px]">{subTotal * rate}៛</TableHead>
          <TableHead className="w-[100px]">Grand Total(KH)</TableHead>
          <TableHead className="w-[100px]">{subTotal * rate}៛</TableHead>

        </TableRow>
        <TableRow>

          <TableHead className="w-[100px]">Discount </TableHead>
          <TableHead className="w-[100px]">$1000</TableHead>
        </TableRow>

      </Table>
      <br />
      <div>
        {/* <Button className=" hover:bg-slate-300  bg-slate-600 w-full h-[90px] text-slate-100 hover:text-slate-600 ease-in	" >
          Payment
        </Button> */}
        <SheetPayment className="hover:bg-slate-300  bg-slate-600 w-full h-[60px] text-slate-100 hover:text-slate-600 ease-in   " />
      </div>
    </>
  );
};
export default ListDataItem;
