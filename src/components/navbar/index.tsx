import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import LiveTime from "../liveClock";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";
import React from "react";
import { useStore } from "zustand";
import { useCartStore } from "@/store/useCartStore";
export default function Navbar() {
  const searchItem = useCartStore((state) => state.searchItem);
  console.log(searchItem);
  // function handleSearch(e: ChangeEvent<HTMLInputElement>) {
  //   searchItem(e.target.value);
  // }
  return (
    <>
      <div className="w-full h-[50%]   mb-5 ">
        <div className="grid text-slate-600 grid-cols-4  ">
          <Input
            placeholder="Search "
            className=" my-auto ml-5 w-[50%]"
            onChange={searchItem}
          />
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
