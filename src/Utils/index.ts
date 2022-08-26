export const covertRatetoString = (rate: number): string => {
  if (rate > 500000) {
    return `${(rate / 1000000).toFixed(1)} M`;
  }

  if (rate > 500) {
    return `${(rate / 1000).toFixed(1)} K`;
  }

  return rate.toString();
};