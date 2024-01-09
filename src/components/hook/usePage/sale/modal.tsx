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
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import useModalStore from "@/store/useModalStore";

interface ModalPaymentProps {
  className?: string; // Add className property
  // SubTotalUSD: number;
  // SubTotalKH: number;
}

const ModalPayment: React.FC<ModalPaymentProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [valueReceiveKh, setValueReceiveKh] = useState<number>(0);
  const [valueReceiveUsd, setValueReceiveUsd] = useState<number>(0);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalReceiveUsd = valueReceiveKh / 4100 + valueReceiveUsd;
  const { propModalData } = useModalStore() as { propModalData: number };

  const handleChangeReceiveUsd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueReceiveUsd(parseFloat(e.target.value));
    if (isNaN(parseFloat(e.target.value))) {
      setValueReceiveUsd(0);
    }
  };
  const handleChangeReceiveKh = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueReceiveKh(parseFloat(e.target.value));
    if (isNaN(parseFloat(e.target.value))) {
      setValueReceiveKh(0);
    }
  };
  useEffect(() => {}, [valueReceiveUsd, valueReceiveKh]);
  const handleSubmit = () => {
    setOpen(false);
    const total = valueReceiveKh / 4100 + valueReceiveUsd;
    if (total < parseFloat(propModalData.toString())) {
      alert("Please input receive Khmer Riel");
      setOpen(true);
      return;
    } else {
      clearCart();
      setValueReceiveKh(0);
      setValueReceiveUsd(0);
    }
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
                  Sub total(USD):$
                  {parseFloat(
                    (propModalData - totalReceiveUsd).toFixed(2)
                  ).toString()}
                </Label>
                {/* <TabsTrigger value=x`"tab2">Sub total(KH):100000៛</TabsTrigger> */}
                <Label htmlFor="name" className="text-right">
                  Sub total(KH):{propModalData * 4100} ៛
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
