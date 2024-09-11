import { Avatar, Button } from 'flowbite-react';

export default function GhazalSection() {
  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="uppercase mb-8 text-xl ">The Collective Ghazal</h2>
      <h3 className="text-lg mb-4 text-gray-500">Recent Entries</h3>
      <div>
        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>To understand my words one must know silence,</p>
            <p>For these words emerge from the womb of silence.</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>In self-exile, I speak to no one but you, beloved:</p>
            <p>You who are the melodious voice of silence.</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>If truth needs to be confirmed by perception,</p>
            <p>How am I to affirm your existence, O Silence?</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>Meditation is just another ritual, I am aware.</p>
            <p>True piety is in the act of chanting silence.</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>Where perception fails, love lights the way.</p>
            <p>The lantern of love is naught but flaming silence.</p>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="mr-6">
            <Avatar
              rounded
              img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
            />
            <span className="text-sm text-gray-600">Omar</span>
          </div>
          <div className="font-merriweather text-gray-900 font-light">
            <p>If death be near, I will embrace it with open arms.</p>
            <p>Having lived it, why should I fear to die in silence?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
