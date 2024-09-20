import { Avatar, Button } from 'flowbite-react';
import GhazalCouplet from './ghazal-couplet';

export default function GhazalSection() {
  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="uppercase mb-8 text-xl ">The Collective Ghazal</h2>
      <h3 className="text-lg mb-4 text-gray-500">Recent Entries</h3>

      <div className="mb-8">
        <GhazalCouplet
          user={{
            username: 'Omar',
            avatar:
              'https://flowbite-react.com/images/people/profile-picture-1.jpg'
          }}
          couplet={[
            'To understand my words one must know silence,',
            'For these words emerge from the womb of silence.'
          ]}
        />
        <GhazalCouplet
          user={{
            username: 'Evan Mitchell',
            avatar:
              'https://flowbite-react.com/images/people/profile-picture-2.jpg'
          }}
          couplet={[
            'In self-exile, I speak to no one but you, beloved:',
            'You who are the melodious voice of silence.'
          ]}
        />
        <GhazalCouplet
          user={{
            username: 'Liam Anderson',
            avatar:
              'https://flowbite-react.com/images/people/profile-picture-3.jpg'
          }}
          couplet={[
            'If truth needs to be confirmed by perception,',
            'How am I to affirm your existence, O Silence?'
          ]}
        />
        <GhazalCouplet
          user={{
            username: 'Amina Hassan',
            avatar:
              'https://flowbite-react.com/images/people/profile-picture-4.jpg'
          }}
          couplet={[
            'Meditation is just another ritual, I am aware.',
            'True piety is in the act of chanting silence.'
          ]}
        />
        <GhazalCouplet
          user={{
            username: 'Finn',
            avatar:
              'https://flowbite-react.com/images/people/profile-picture-5.jpg'
          }}
          couplet={[
            'Meditation is just another ritual, I am aware.',
            'True piety is in the act of chanting silence.'
          ]}
        />
      </div>

      <p className="mb-4">
        Learn more about the collective ghazal project or contribute your own
        verses.
      </p>
      <div className="flex gap-2 justify-center">
        <Button>Learn More</Button>
        <Button color="blue">Contribute</Button>
      </div>
    </div>
  );
}
