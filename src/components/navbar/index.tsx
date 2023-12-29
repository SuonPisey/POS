import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import LiveTime from "../liveClock";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/useCartStore";
import SheetPayment from "../sheet";

export default function Navbar() {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <>
      <div className="w-full h-full   mb-5 ">
        <div className="grid text-slate-600 grid-cols-4  ">
          <Input placeholder="Search " className=" my-auto ml-5 w-[50%]" />
          <Button
            className="bg-slate-600    ml-auto w-[50%] my-5 mx-5 text-slate-100 hover:text-slate-600 " 
            onClick={clearCart}
          style={{
            borderRadius: "6px",
          }}
          >
            Cancel Order
          </Button>
          {/* <div className="mx-auto my-auto py-5">Warehouse:Head</div> */}
          {/* <div className="mx-auto py-5 col-span-2">User Name:SuonPisey</div> */}
          <div className="ml-auto py-5 col-span-2 mr-5 flex  my-auto gap-5">
            <p>
              SuonPisey
              <LiveTime />
            </p>
            <div className="w-10 h-10 ">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
