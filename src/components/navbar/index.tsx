import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import LiveTime from "../liveClock";
import { Input } from "../ui/input";
 export default function Navbar() {
  return (
    <>
      <div className="w-full h-[50%]   mb-5 ">
        <div className="grid text-slate-600 grid-cols-4  ">
          <Input placeholder="Search " className=" my-auto ml-5 w-[50%]" />
          <div className="ml-auto py-5 col-span-3 mr-5 flex  my-auto gap-5">
            <p className="font-bold">
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
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
