import { IColGhazalEntry, IUser } from '@/types';
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react';

export default function ColGhazalEntriesTable({
  entries
}: {
  entries: IColGhazalEntry[];
}) {
  return (
    <div className="m-5 overflow-auto">
      <div className="flex justify-between items-center mb-5">
        <p className="ml-2 text-sm font-medium text-gray-500">Filter by:</p>
        <ButtonGroup>
          <Button color="light">All</Button>
          <Button color="light">Pending</Button>
          <Button color="light">Approved</Button>
        </ButtonGroup>
      </div>

      <div className="overflow-x-auto w-full text-center">
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
            {entries.map((e) => (
              <TableRow className="bg-white">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
                  <p>{e.couplet[0]}</p>
                  <p>{e.couplet[1]}</p>
                </TableCell>
                <TableCell>
                  @{'username' in e.user && e.user.username}
                </TableCell>
                <TableCell>
                  <time dateTime={e.createdAt}>
                    {new Date(e.createdAt).toLocaleDateString('en-GB')}
                  </time>
                </TableCell>
                <TableCell>{e.approved ? 'Approved' : 'Pending'}</TableCell>
                <TableCell className="flex gap-1">
                  <Button className="w-[5.5rem]" color="light" size="xs">
                    Unapprove
                  </Button>
                  <Button color="red" size="xs">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-white">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
                <p>To understand my words one must know silence,</p>
                <p>For these words emerge from the womb of silence.</p>
              </TableCell>
              <TableCell>@aazibch</TableCell>
              <TableCell>9/7/2026</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell className="flex gap-1">
                <Button className="w-[5.5rem]" color="light" size="xs">
                  Unapprove
                </Button>
                <Button color="red" size="xs">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
                <p>In self-exile I speak to no one but you, beloved:</p>
                <p>You who are the melodious voice of silence.</p>
              </TableCell>
              <TableCell>@aazibch</TableCell>
              <TableCell>9/7/2026</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell className="flex gap-1 justify-center">
                <Button className="w-[5.5rem]" color="light" size="xs">
                  Approve
                </Button>
                <Button color="red" size="xs">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
