'use client';

import { Button, Card } from 'flowbite-react';

export default function RecentArticles() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="uppercase text-center text-xl mb-8">Recent Articles</h2>
      <div className=" border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How to Write a Ghazal
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu
            enim, pharetra eu elit id, fringilla tempor ex. Aliquam vulputate
            euismod purus, eget suscipit purus consectetur at. Morbi euismod at
            eros a placerat. Donec hendrerit libero orci, eget cursus lacus
            tempus quis. Fusce et erat eros. Sed consequat et sem et finibus.
            Mauris tincidunt eu ante interdum malesuada. Praesent lacinia tempor
            leo, at eleifend nunc semper maximus. Cras venenatis convallis
            ullamcorper. Pellentesque dapibus massa sit amet magna fermentum
            rhoncus.
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Instructions on Contributing
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu
            enim, pharetra eu elit id, fringilla tempor ex. Aliquam vulputate
            euismod purus, eget suscipit purus consectetur at. Morbi euismod at
            eros a placerat. Donec hendrerit libero orci, eget cursus lacus
            tempus quis. Fusce et erat eros. Sed consequat et sem et finibus.
            Mauris tincidunt eu ante interdum malesuada. Praesent lacinia tempor
            leo, at eleifend nunc semper maximus. Cras venenatis convallis
            ullamcorper. Pellentesque dapibus massa sit amet magna fermentum
            rhoncus.
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            History of the Ghazal
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu
            enim, pharetra eu elit id, fringilla tempor ex. Aliquam vulputate
            euismod purus, eget suscipit purus consectetur at. Morbi euismod at
            eros a placerat. Donec hendrerit libero orci, eget cursus lacus
            tempus quis. Fusce et erat eros. Sed consequat et sem et finibus.
            Mauris tincidunt eu ante interdum malesuada. Praesent lacinia tempor
            leo, at eleifend nunc semper maximus. Cras venenatis convallis
            ullamcorper. Pellentesque dapibus massa sit amet magna fermentum
            rhoncus.
          </p>
          <Button>
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    </div>
  );
}
