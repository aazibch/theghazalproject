import { IColGhazalEntry } from '@/types';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react';
import Link from 'next/link';

export default function ColGhazalTable({
  entries
}: {
  entries: IColGhazalEntry[];
}) {
  return (
    <div className="w-full overflow-x-scroll text-center">
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
          {entries.map((e) => {
            let username;

            if ('username' in e.user) {
              username = e.user.username;
            }

            return (
              <TableRow key={e._id.toString()} className="bg-white">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
                  <span className="block">{e.couplet[0]}</span>
                  <span className="block">{e.couplet[1]}</span>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${username}`}>@{username}</Link>
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
            );
          })}
          {/* <TableRow className="bg-white">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
                <span className="block">
                  To understand my words one must know silence,
                </span>
                <span className="block">
                  For these words emerge from the womb of silence.
                </span>
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
            */}
        </TableBody>
      </Table>
    </div>
  );
}
