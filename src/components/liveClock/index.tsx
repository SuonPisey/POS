import { useState } from "react";
function LiveTime() {
  const [time, setTime] = useState(new Date());
  setInterval(() => {
    const currentTime = new Date();
    setTime(currentTime);
  }, 1000);

  return (
    <>
      <div className="text-slate-600 my-5 mx-auto">{time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear()+"/"+time.toLocaleTimeString()}</div>
    </>
  );
}

export default LiveTime;
