import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useCartStore } from "@/store/useCartStore";

interface ModalPaymentProps {
  className?: string; // Add className property
  SubTotalUSD?: number;
  SubTotalKH?: number;
}

const ModalPayment: React.FC<ModalPaymentProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [valueReceiveKh, setValueReceiveKh] = React.useState("");
  const [valueReceiveUsd, setValueReceiveUsd] = React.useState("");
  const { className, SubTotalUSD, SubTotalKH } = props;
  const clearCart = useCartStore((state) => state.clearCart);

  const handleChangeReceiveUsd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueReceiveUsd(e.target.value);
    console.log(valueReceiveUsd);
  };
  const handleChangeReceiveKh = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueReceiveKh(e.target.value);
    console.log(valueReceiveKh);
  };

  const handleSubmit = () => {
    clearCart();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="hover:bg-slate-300   bg-cyan-400 w-full h-[50px] text-slate-100 hover:text-slate-600 ease-in  mx-auto  ">
          Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-slate-100  sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle>Payment Detail</DialogTitle>
          <div>
            <Tabs className="w-full select-none " defaultValue="tab1 ">
              <TabsList className="flex justify-around items-center p-4 bg-slate-100 rounded-t-lg">
                <Label htmlFor="name" className="text-right">
                  Sub total(USD):$ {SubTotalUSD}
                </Label>
                {/* <TabsTrigger value="tab2">Sub total(KH):100000៛</TabsTrigger> */}
                <Label htmlFor="name" className="text-right">
                  Sub total(KH):{SubTotalKH} ៛
                </Label>
              </TabsList>
              <TabsContent className="hidden" value="tab1">
                <Card>
                  <CardHeader>
                    <CardTitle>Tab 1 Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>This is the hidden content for Tab 1.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent className="hidden" value="tab2">
                <Card>
                  <CardHeader>
                    <CardTitle>Tab 2 Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>This is the hidden content for Tab 2.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              payment Method
            </Label>
            <Button className=" bg-cyan-400 rounded-[10px] text-slate-100 hover:bg-cyan-200">
              Cash
            </Button>
            <Button className=" bg-cyan-400 rounded-[10px] text-slate-100 hover:bg-cyan-200">
              Bank
            </Button>
            <Button className=" bg-cyan-400  rounded-[10px] text-slate-100 hover:bg-cyan-200">
              Other
            </Button>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Receive (USD)
            </Label>
            <Input
              id="receiveUsd"
              className="col-span-3"
              value={valueReceiveUsd}
              onChange={handleChangeReceiveUsd}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Receive (KH)
            </Label>
            <Input
              id="receiveKh"
              className="col-span-3"
              value={valueReceiveKh}
              onChange={handleChangeReceiveKh}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Discount
            </Label>
            <Input id="discount" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className=" bg-cyan-400 rounded-[10px] text-slate-100 hover:bg-cyan-200"
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ModalPayment;
