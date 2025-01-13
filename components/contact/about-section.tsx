import { Button } from 'flowbite-react';
import Link from 'next/link';
import Banner from '../ui/banner';

export default function AboutSection() {
  return (
    <section>
      <Banner
        bgImage="/images/qutb-minar-ceiling-bg.png"
        heading="Want to Get to Know Us?"
        contentText={
          <>
            <span className="font-semibold">The Ghazal Project</span> aims to
            promote the rich artistic culture of Pakistan and the subcontinent
            by encouraging cultural amalgamation through variants of the ghazal
            form, fit for adaptation into the English language.
          </>
        }
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
