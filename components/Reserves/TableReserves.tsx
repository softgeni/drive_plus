import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrdersTable } from "./OrdersTable";
import { TableReservesProps } from "@/interfaces";

export const TableReserves = ({
  title,
  results,
  columns,
}: TableReservesProps) => {
  return (
    <div>
      <h1 className="mb-4 text-3xl">{title}</h1>
      <Table>
        <TableCaption>{`A list of ${title}`}</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={idx} className={col.isRight ? "text-right" : ""}>
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <OrdersTable results={results} columns={columns} />
      </Table>
    </div>
  );
};
