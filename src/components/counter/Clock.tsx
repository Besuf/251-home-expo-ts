import React, { useState, useEffect } from "react";

type DateTimeFormat = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type ClockProps = {
  deadline: string;
};

const Clock: React.FC<ClockProps> = (props) => {
  const [dateTime, setDateTime] = useState<DateTimeFormat>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  function getTimeUntil(deadline: string) {
    const time = Date.parse(deadline) - Date.parse(new Date().toUTCString());
    if (time < 0) {
      setDateTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setDateTime({ days, hours, minutes, seconds });
    }
  }
  function leading0(num: number) {
    return num < 10 ? "0" + num : num;
  }

  useEffect(() => {
    getTimeUntil(props.deadline);
  }, [props.deadline]);

  useEffect(() => {
    const inter = setInterval(() => getTimeUntil(props.deadline), 1000);
    return () => {
      clearInterval(inter);
    };
  }, [props.deadline]);

  return (
    <div className="flex px-6 md:px-12 py-2 bg-black bg-opacity-30 text-2xl md:text-5xl tracking-wider gap-7">
      <div className="grid place-items-center gap-2">
        <div className="tracking-widest"> {leading0(dateTime.days)} </div>
        <div className="text-sm">Days</div>
      </div>
      <div className="grid place-items-center gap-2">
        <div className="tracking-widest"> {leading0(dateTime.hours)} </div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="grid place-items-center gap-2">
        <div className="tracking-widest">{leading0(dateTime.minutes)}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="grid place-items-center gap-2">
        <div className="tracking-widest">{leading0(dateTime.seconds)}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default Clock;
