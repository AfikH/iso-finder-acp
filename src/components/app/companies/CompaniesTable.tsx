import { MoreHorizontal } from "lucide-react";
import { ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/app/dataTable/DataTableColumnHeader";
import { DataTable } from "@/components/app/dataTable/DataTable";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DataTablePagination } from "@/components/app/dataTable/DataTablePagination";
import { DataTableViewOptions } from "@/components/app/dataTable/DataTableViewOptions";
import NewCompanyDialog from "./NewCompanyDialog";

type Company = {
  id: string;
  name: string;
  category: string;
  country: string;
  territory: string;
  city: string;
};

const columns: ColumnDef<Company>[] = [
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
      // const company = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit company</DropdownMenuItem>
            <DropdownMenuItem>Delete company</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const data: Company[] = [
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

const CompaniesTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <DataTableViewOptions table={table} />
        <NewCompanyDialog />
      </div>
      <DataTable table={table} />
      <DataTablePagination table={table} />
    </div>
  );
};

export default CompaniesTable;
