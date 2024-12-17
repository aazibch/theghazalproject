import { Button } from 'flowbite-react';
import Link from 'next/link';
import Banner from '../ui/banner';

export default function AboutSection() {
  return (
    <section>
      <Banner
        bgImage="/images/qutb-minar-ceiling-bg.png"
        heading="Want to Learn About Us?"
        contentText="The Ghazal Project aims to promote the rich artistic culture of
          Pakistan and the subcontinent, and to encourage cultural emalgamation
          through variants of the ghazal form, fit for adaption into English
          poetry."
        contentButtons={
          <Link className="hover:no-underline" href="/about">
            <Button color="blue" gradientDuoTone="purpleToBlue" pill>
              Learn More
            </Button>
          </Link>
        }
      />
    </section>
  );
}
