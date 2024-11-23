import fs from 'fs';
import ColGhazalEntry from '@/models/ColGhazalEntry';
import dbConnect from '@/lib/dbConnect';

const colGhazalEntries = JSON.parse(
  fs.readFileSync(`${__dirname}/col-ghazal-entries.json`, 'utf-8')
);

const getData = async () => {
  try {
    await dbConnect();
    await ColGhazalEntry.create(colGhazalEntries);
    console.log('Data loaded...');
  } catch (error) {
    console.log('error', error);
  }
};

getData();
