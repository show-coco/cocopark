export function getTimeRemaining(endtime: string) {
  const total = Date.parse(endtime) - Date.parse(new Date().toString());

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  if (days >= 1) {
    return `About ${days} days ${hours} hours`;
  } else if (hours >= 1) {
    return `About ${hours} hours`;
  } else {
    return `About ${minutes} minutes`;
  }
}

export type ReminingTime = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

export function getTimeRemainingRaw(endtime: string): ReminingTime {
  const total = Date.parse(endtime) - Date.parse(new Date().toString());

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    seconds,
    minutes,
    hours,
    days,
  };
}
