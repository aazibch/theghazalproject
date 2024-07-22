import { Avatar, Button } from 'flowbite-react';

export default function RecentGhazalEntries() {
  return (
    <div className="container mx-auto text-center my-10">
      <h2 className="uppercase mb-8 text-xl">The Collective Ghazal</h2>
      <h3 className="text-lg mb-4">Recent Entries</h3>
      <div className="flex flex-col items-center">
        <div className="flex mb-4">
          <div className="h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center p-4 min-w-[25rem]">
            <div className="w-full">
              <p>To understand my words one must know silence,</p>
              <p>For these words emerge from the womb of silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className=" h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[25rem]">
            <div className="w-full">
              <p>In self-exile, I speak to no one but you, beloved:</p>
              <p>You who are the melodious voice of silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className=" h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[25rem]">
            <div className="w-full">
              <p>If truth needs to be confirmed by perception,</p>
              <p>How am I to affirm your existence, O Silence?</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[25rem]">
            <div className="w-full">
              <p>Meditation is just another ritual, I am aware.</p>
              <p>True piety is in the act of chanting silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className=" h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[25rem]">
            <div className="w-full">
              <p>Where perception fails, love lights the way.</p>
              <p>The lantern of love is naught but flaming silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className=" h-20 flex items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Jane Doe</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[25rem]">
            <div className="w-full">
              <p>If death be near, I will embrace it with open arms.</p>
              <p>Having lived it, why should I fear to die in silence?</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 mb-6">
        <a href="#">Learn more</a> about the collective ghazal project, or{' '}
        <a href="#">contribute</a> your own verses.
      </p>
      <div className="flex gap-2 justify-center">
        <Button>Learn More</Button>
        <Button color="blue">Contribute</Button>
      </div>
    </div>
  );
}
