'use client';

import { Button, Table } from 'flowbite-react';
import Link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi';

export default function ContributionsTable() {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Couplet</Table.HeadCell>
            <Table.HeadCell>Date Submitted</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row>
              <Table.Cell className="font-merriweather font-light">
                <div className="indent-[-0.5rem] pl-[0.5rem] mb-1">
                  To understand my words one must know silence,
                </div>
                <div>For these words emerge from the womb of silence.</div>
              </Table.Cell>
              <Table.Cell>
                <span>14-12-2024</span>
              </Table.Cell>
              <Table.Cell>
                <Link href="#">View</Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
