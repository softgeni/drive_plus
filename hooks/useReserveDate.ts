import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

export default function useReserveDate(
  setDateSelected: (date: {
    from: Date | undefined;
    to: Date | undefined;
  }) => void
) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setDateSelected({
      from: date?.from,
      to: date?.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    const onDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();

    return Math.round(diffInTime / onDay);
  };
  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return {
    date,
    setDate,
    daysBetween,
  };
}
