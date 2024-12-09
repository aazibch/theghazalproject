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

const deleteData = async () => {
  try {
    await dbConnect();
    await ColGhazalEntry.deleteMany();

    console.log('Data deleted...');
  } catch (error) {
    console.log('error', error);
  }
};

if (process.argv[2] === '--import') {
  getData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
