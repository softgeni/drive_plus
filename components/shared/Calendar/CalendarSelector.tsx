"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar1Icon } from "lucide-react";

import type { CalendarSelectorProps } from "@/types";

import useReserveDate from "@/hooks/useReserveDate";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export const CalendarSelector = ({
  setDateSelected,
  className,
  carPriceDay,
}: CalendarSelectorProps) => {
  const { date, setDate, daysBetween } = useReserveDate(setDateSelected);

  return (
    <span className={cn("grid gap-2", className)}>
      {date?.from && date?.to && (
        <>
          <span className="block mt-4 text-black text-lg">
            Dias totales {daysBetween}
          </span>
          <span className="block mb-4 text-md">
            Precios total : ${daysBetween * Number(carPriceDay)} $
            (Inp.incluidos)
          </span>
        </>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <Calendar1Icon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LL/dd/y")} - {format(date.to, "LL/dd/y")}
                </>
              ) : (
                <> {format(date.from, "LL/dd/y")} </>
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            autoFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </span>
  );
};
