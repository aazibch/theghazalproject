'use client';

import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { IColGhazalEntry } from '@/types';

export default function ContributionsTable({
  contributions
}: {
  contributions: IColGhazalEntry[];
}) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Couplet</TableHeadCell>
          <TableHeadCell className="hidden md:block">
            Date Submitted
          </TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">View</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {contributions.map((e) => (
            <TableRow key={typeof e._id === 'string' ? e._id : undefined}>
              <TableCell className="font-merriweather font-light">
                <div className="indent-[-0.5rem] pl-[0.5rem] mb-1">
                  {e.couplet[0]}
                </div>
                <div className="indent-[-0.5rem] pl-[0.5rem]">
                  {e.couplet[1]}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <time dateTime={e.createdAt}>
                  {new Date(e.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </TableCell>
              <TableCell>
                <Link href={`/collective-ghazal#${e._id}`}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
