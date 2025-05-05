import { DataTableColumnHeader } from "@/components/app/dataTable/DataTableColumnHeader";
import { DataTable } from "@/components/app/dataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

type Payment = {
  id: string;
  name: string;
  category: string;
  country: string;
  territory: string;
  city: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
  },
  {
    accessorKey: "country",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Country" />,
  },
  {
    accessorKey: "territory",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Territory" />,
  },
  {
    accessorKey: "city",
    header: ({ column }) => <DataTableColumnHeader column={column} title="City" />,
  },
  {
    accessorKey: "action",
    header: () => "Action",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const data: Payment[] = [
  {
    id: "1",
    name: "Company Name",
    category: "Manufacturer",
    country: "United States",
    territory: "California",
    city: "Los Angeles",
  },
  {
    id: "2",
    name: "Company Name",
    category: "Manufacturer",
    country: "United States",
    territory: "California",
    city: "Los Angeles",
  },
];

const Companies = () => {
  return <DataTable columns={columns} data={data} />;
};

export default Companies;
