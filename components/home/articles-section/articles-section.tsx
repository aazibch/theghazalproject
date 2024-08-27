'use client';

import { Button, Card } from 'flowbite-react';
import { HiArrowRight } from 'react-icons/hi';

export default function ArticlesSection() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto my-10">
        <h2 className="uppercase text-center text-xl mb-12">Recent Articles</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How to Write a Ghazal
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse volutpat condimentum congue. Phasellus fermentum, nunc
              ac auctor eleifend, arcu risus tincidunt tortor, non posuere
              turpis nibh et purus. Morbi non placerat sem, vel viverra arcu.
              Suspendisse potenti. Quisque cursus, sapien et porta porta, leo
              nunc sagittis ante, quis cursus risus ligula sit amet ipsum.
              Quisque posuere dapibus neque, quis molestie nisi lacinia id.
            </p>
            <Button
              color="blue"
              theme={{
                inner: {
                  base: 'flex items-center transition-all duration-200'
                }
              }}
            >
              Read More <HiArrowRight className="ml-2" />
            </Button>
          </Card>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Instructions on Contributing
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse volutpat condimentum congue. Phasellus fermentum, nunc
              ac auctor eleifend, arcu risus tincidunt tortor, non posuere
              turpis nibh et purus. Morbi non placerat sem, vel viverra arcu.
              Suspendisse potenti. Quisque cursus, sapien et porta porta, leo
              nunc sagittis ante, quis cursus risus ligula sit amet ipsum.
              Quisque posuere dapibus neque, quis molestie nisi lacinia id.
            </p>
            <Button
              color="blue"
              theme={{
                inner: {
                  base: 'flex items-center transition-all duration-200'
                }
              }}
            >
              Read More
              <HiArrowRight className="ml-2" />
            </Button>
          </Card>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              History of the Ghazal
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse volutpat condimentum congue. Phasellus fermentum, nunc
              ac auctor eleifend, arcu risus tincidunt tortor, non posuere
              turpis nibh et purus. Morbi non placerat sem, vel viverra arcu.
              Suspendisse potenti. Quisque cursus, sapien et porta porta, leo
              nunc sagittis ante, quis cursus risus ligula sit amet ipsum.
              Quisque posuere dapibus neque, quis molestie nisi lacinia id.
            </p>
            <Button
              color="blue"
              theme={{
                inner: {
                  base: 'flex items-center transition-all duration-200'
                }
              }}
            >
              Read More
              <HiArrowRight className="ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
