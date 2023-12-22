import {
    TableHead,
    TableHeaderCell,
    TableRow,
    TableCell,
    TableBody,
    Table,
} from "@tremor/react";
const data: {
  name: string;
  no?: string;
  qty: number;
  price: number;
  discount: number;
  total: number;
}[] = [
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple ",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  }, {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  }, {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
  {
    no: "1",
    name: "Apple Watch",
    qty: 1,
    price: 100,
    discount: 10,
    total: 90,
  },
];
const TableProdusctList = () => {
  return (
    <>
      {/* Table */}
      <div className=" w-[950px] h-[561px] border-2 max 	border-slate-800   overflow-y-auto ">
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
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.no}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.discount}</TableCell>
                <TableCell>{item.total}</TableCell>
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
