"use client"

import * as React from "react";

//import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SideBar from "@/components/ui/SideBar";

function Tab() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">ALL</TabsTrigger>
        <TabsTrigger value="open">Open</TabsTrigger>
        <TabsTrigger value="un">Unfulfilled</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
   
        <DataTable filter_data={data}/>
      </TabsContent>
      <TabsContent value="open">
        <DataTable filter_data={data.filter((data) => (data.status === "success"))}/>

      </TabsContent>
      
      <TabsContent value="un">
        <DataTable filter_data={data.filter((data)=>(data.fullfillment === "pending"))}/>
      </TabsContent>
    </Tabs>
  )
}


const data: Payment[] = [
  
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    customer: "shinchan",
    date : "07-07-2023",
    fullfillment : "success",
  },
]

type Payment = {
  id : string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  customer: string
  date : string
  fullfillment : string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize font-bold">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) =>(
      <div className="capitalize">{row.getValue("customer")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Payment Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Fullfillment Status</div>,
    cell: ({ row }) => {

      return <div className="text-right font-medium">{row.getValue("status")}</div>
    },
  },
  {
    accessorKey: "amount",
    header: "Total",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("amount")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      return (<></>);
    },
  },
]

function DataTable({filter_data}) {
 
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  let data = filter_data;
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full border p-3 rounded">
      <div className="flex items-center py-4 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-gray-200 ">
              Filters <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder="Search by Customer Name..."
          value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
          table.getColumn("customer")?.setFilterValue(event.target.value)
          }
          className="w-full ml-5"
          />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            //disabled={!table.getCanPreviousPage()}
            className=" text-black hover:bg-gray-300"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
           // disabled={!table.getCanNextPage()}
            className="text-black bg-gray-200"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

function OrderSection(){

  return (
      <div className="h-screen px-5 py-3 w-full">
          <section className="mb-10 mt-5">
              {/* <p className="text-[#ec4755] my-3">Order's Details {">"}</p> */}
              <p><b>Orders</b></p>
          </section>
          <section>
              <p className="text-[#ec4755] font-bold mb-5">Payment section</p>
              <div>
                  <Tab/>
              </div>
          </section>
      </div>
  );
}

export default function Order(){
  return <SideBar page={<OrderSection/>}/>
}
