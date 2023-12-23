import { useCartStore } from "@/store/useCartStore";
import {
  TableHead,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@tremor/react";

const TableProdusctList = () => {
  const { cart, deleteFromCart} = useCartStore();

  return (
    <>
      {/* Table */}
      <div className="  h-[561px] border-2   	border-slate-800   overflow-y-auto ">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>No</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Qty</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Discount</TableHeaderCell>
              <TableHeaderCell>Total</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody className="  ">
            {cart.items.map((item, idx) => (
              <TableRow key={item.id} onDoubleClick={() => {
                deleteFromCart(item)
              }} className="select-none">
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{0}</TableCell>
                <TableCell>{item.price * item.qty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </Card> */}
      </div>
    </>
  );
};
export default TableProdusctList;
