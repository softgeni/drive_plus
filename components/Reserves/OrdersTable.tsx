import { TEXTS } from "@/constants";
import { formatPrice } from "../../lib/formatPrice";
import {
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";

export const OrdersTable = ({ results, columns }: any) => {
  const totalGlobal = results.reduce(
    (acc: number, item: any) => acc + (parseFloat(item.totalAmount) || 0),
    0
  );

  return (
    <>
      <TableBody>
        {results.map((item: any, idx: number) => (
          <TableRow key={idx}>
            {columns.map((col: any, cidx: number) => (
              <TableCell
                key={cidx}
                className={`font-medium text-gray-500 max-w-[100px] truncate ${
                  col.isRight ? "text-right" : ""
                }`}
              >
                {col.render(item)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={columns.length - 1}>
            {TEXTS.pricing.totalPrice}
          </TableCell>
          <TableCell className="text-right">
            {formatPrice(Number(totalGlobal))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </>
  );
};
