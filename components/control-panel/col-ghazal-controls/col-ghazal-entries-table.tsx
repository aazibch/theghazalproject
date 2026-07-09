import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react';

export default function ColGhazalEntriesTable() {
  return (
    <div className="overflow-x-auto w-full text-center m-5">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell>Entry</TableHeadCell>
            <TableHeadCell>User</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Action</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
              <p>To understand my words one must know silence,</p>
              <p>For these words emerge from the womb of silence.</p>
            </TableCell>
            <TableCell>@aazibch</TableCell>
            <TableCell>9/7/2026</TableCell>
            <TableCell>Approved</TableCell>
            <TableCell className="flex gap-1">
              <Button size="xs">Approve</Button>
              <Button color="red" size="xs">
                Delete
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
              <p>In self-exile I speak to no one but you, beloved:</p>
              <p>You who are the melodious voice of silence.</p>
            </TableCell>
            <TableCell>@aazibch</TableCell>
            <TableCell>9/7/2026</TableCell>
            <TableCell>Approved</TableCell>
            <TableCell className="flex gap-1">
              <Button size="xs">Approve</Button>
              <Button color="red" size="xs">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
