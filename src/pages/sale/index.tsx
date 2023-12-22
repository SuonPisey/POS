import { Card, TextInput, Text, Button, Metric } from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import TableProdusctList from "../../components/hook/usePage/sale/table";
import Product from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const SalePage: React.FC = () => {
  return (
    <>
      {/* Manage input TextInput */}
      <div className="flex">
        <TextInput placeholder="Search" className="mx-5 my-5" />
        <TextInput placeholder="Customer Name" className="mx-5 my-5" />
        <TextInput placeholder="Sale Rap" className="mx-5 my-5" />
        <TextInput placeholder="Customer" className="mx-5 my-5" />
        <TextInput placeholder="Staff" className="mx-5 my-5" />
      </div>
      <div className="  mx-5  grid grid-cols-2 gap-1  ">
        <Category />
        <Product />
        <TableProdusctList />
        <div className="absolute bottom-0  h-16 w-16 right-2/4 pl-20 pb-60 ">
          <div className="flex">
            <p>SubTotal:</p>
            <p className="pl-48">100$</p>
          </div>
          <div className="flex">
            <p>Discount:</p>
            <p className="pl-48">20%</p>
          </div>
          <div className="flex">
            <p>Total:</p>
            <p className="pl-[222px]">100$</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalePage;
