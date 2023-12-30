import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ModalPayment() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:bg-slate-300  bg-add-tocard  w-full h-[60px] text-slate-100 hover:text-slate-600 ease-in ">
          Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-slate-100  sm:max-h-[600px]">
        <DialogHeader>
          <DialogTitle>Payment Detail </DialogTitle>
          <div>
            <Tabs className="w-full select-none " defaultValue="tab1 ">
              <TabsList className="flex justify-around items-center p-4 bg-slate-100 rounded-t-lg">
                <TabsTrigger value="tab1" className="select-none">
                  Sub total(USD):$1000
                </TabsTrigger>
                <TabsTrigger value="tab2">Sub total(KH):100000៛</TabsTrigger>
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
            <Button className=" bg-add-tocard rounded-[10px] text-slate-100 hover:text-slate-600">
              Cash
            </Button>
            <Button className=" bg-add-tocard rounded-[10px] text-slate-100 hover:text-slate-600">
              Bank
            </Button>
            <Button className=" bg-add-tocard rounded-[10px] text-slate-100 hover:text-slate-600">
              Other
            </Button>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Receive (USD)
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Receive (KH)
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Discount
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className=" bg-add-tocard rounded-[10px] text-slate-100 hover:text-slate-600" >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
