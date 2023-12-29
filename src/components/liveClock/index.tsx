import { useState } from "react";
import { Input } from "../ui/input";
function LiveTime() {
  const [time, setTime] = useState(new Date());
  setInterval(() => {
    const currentTime = new Date();
    setTime(currentTime);
  }, 1000);

  return (
    <>
      <div className="text-slate-600 text-[12px]  ">
        {time.toLocaleTimeString()}
      </div>
    </>
  );
}

export default LiveTime;
