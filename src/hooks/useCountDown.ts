import { useEffect, useState } from "react";
import { getTimeRemainingRaw, ReminingTime } from "utils/time";

export const useCountDown = (date: Date) => {
  const [time, setTime] = useState<ReminingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemainingRaw(date.toString()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    days: time.days,
    hours: time.hours,
    mins: time.minutes,
    secs: time.seconds,
  };
};
