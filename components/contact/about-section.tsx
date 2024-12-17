import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-[url('/images/qutb-minar-ceiling-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto text-white">
        <h2 className="uppercase text-center text-xl mb-10">
          Want to Learn About Us?
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8">
            The Ghazal Project aims to promote the rich artistic culture of
            Pakistan and the subcontinent, and to encourage cultural
            emalgamation through variants of the ghazal form, fit for adaption
            into English poetry.
          </p>

          <div className="flex justify-center">
            <Link className="hover:no-underline" href="/about">
              <Button color="blue" gradientDuoTone="purpleToBlue" pill>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
