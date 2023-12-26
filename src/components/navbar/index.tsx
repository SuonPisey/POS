import LiveTime from "../liveClock";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-16 bg-slate-800  text-slate-100">
        <div className="grid text-slate-100 grid-cols-4  ">
          <LiveTime />
          <div className="mx-auto py-5">Order No:</div>
          <div className="mx-auto py-5">Warehouse:</div>
          <div className="mx-auto py-5">User Name:</div>
        </div>
       
      </div>
    </>
  );
}
