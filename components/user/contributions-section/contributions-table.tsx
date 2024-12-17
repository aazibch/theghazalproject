'use client';

import Link from 'next/link';
import { Table } from 'flowbite-react';
import { IColGhazalEntry } from '@/types';

export default function ContributionsTable({
  contributions
}: {
  contributions: IColGhazalEntry[];
}) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Couplet</Table.HeadCell>
          <Table.HeadCell className="hidden md:block">
            Date Submitted
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {contributions.map((e) => (
            <Table.Row key={typeof e._id === 'string' ? e._id : undefined}>
              <Table.Cell className="font-merriweather font-light">
                <div className="indent-[-0.5rem] pl-[0.5rem] mb-1">
                  {e.couplet[0]}
                </div>
                <div className="indent-[-0.5rem] pl-[0.5rem]">
                  {e.couplet[1]}
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <time dateTime={e.createdAt}>
                  {new Date(e.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </Table.Cell>
              <Table.Cell>
                <Link href={`/collective-ghazal#${e._id}`}>View</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
