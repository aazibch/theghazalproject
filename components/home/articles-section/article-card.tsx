import Link from 'next/link';
import { Button, Card } from 'flowbite-react';
import { HiArrowRight } from 'react-icons/hi';

interface ArticleCardProps {
  title: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  href: string;
}

export default function ArticleCard({
  title,
  image,
  imageAlt,
  excerpt,
  href
}: ArticleCardProps) {
  return (
    <Card
      imgSrc={image}
      imgAlt={imageAlt}
      theme={{
        root: {
          children: 'flex h-full flex-col justify-between gap-4 p-6'
        }
      }}
    >
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>
      <Link href={href} className="hover:no-underline">
        <Button
          color="blue"
          className="w-full"
          theme={{
            inner: {
              base: 'flex items-center transition-all duration-200'
            }
          }}
        >
          Read More <HiArrowRight className="ml-2" />
        </Button>
      </Link>
    </Card>
  );
}
