import {} from "@radix-ui/react-select";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { Text } from "lucide-react";
import { Textarea } from "@tremor/react";
import { Table, TableHead, TableRow } from "../ui/table";
interface SheetPaymentProps {
  className?: string; // Add className property
}
const SheetPayment: React.FC<SheetPaymentProps> = (props) => {
  const { className } = props;
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className={className}
            style={{
              borderRadius: "8px",
            }}
          >
            Payment
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle className="text-center">Payment Detail </SheetTitle>
          </SheetHeader>
          <SheetDescription className="grid grid-cols-1 gap-8">
            <div>
              <p>Receive (KH)</p>
              <Input />
            </div>
            <div>
              <p>Receive (USD)</p>
              <Input />
            </div>
            <div>
              <p>Discount</p>
              <Input />
            </div>
            <div>
              <p>Payment method</p>
              <Input />
            </div>
            <div>
              <p>Description</p>
              <Textarea className="bg-slate-100 resize- none  h-[120px]" />
            </div>
            <Table>
              <TableRow>
                <TableHead className="w-[100px]">Sub Total</TableHead>
                <TableHead className="w-[100px]">$1000</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="w-[100px]">Discount</TableHead>

                <TableHead className="w-[100px]">10%</TableHead>
              </TableRow>
            </Table>
            <Table>
              <TableRow>
                <TableHead className="w-[100px]">Grand Total (USD)</TableHead>
                <TableHead className="w-[100px]">$1000</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="w-[100px]">Grand Total (KH)</TableHead>

                <TableHead className="w-[100px]">4000000៛</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="w-[100px]">Left (USD)</TableHead>
                <TableHead className="w-[100px]">$1000</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="w-[100px]">Left (KHR)</TableHead>

                <TableHead className="w-[100px]">1000៛</TableHead>
              </TableRow>
            </Table>
          </SheetDescription>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className=" bg-slate-600 hover:bg-slate-300 text-slate-100 absolute bottom-0 w-full right-0 h-[50px]"
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default SheetPayment;
