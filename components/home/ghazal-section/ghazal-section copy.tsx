import { Avatar, Button } from 'flowbite-react';

export default function GhazalSection() {
  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="uppercase mb-8 text-xl ">The Collective Ghazal</h2>
      <h3 className="text-lg mb-4 text-gray-500">Recent Entries</h3>
      <div>
        <div className="flex justify-center items-center mb-4">
          <div className="mr-4">
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
          <div className="mr-4">
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
          <div className="mr-4">
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
          <div className="mr-4">
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
          <div className="mr-4">
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
          <div className="mr-4">
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

      {/* Old */}
      <div className="flex flex-col items-center">
        <div className="flex mb-4">
          <div className="h-20 flex min-w-[8rem] justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-1.jpg"
              />
              <span className="text-sm text-gray-600">Omar</span>
            </div>
          </div>
          <div className="h-20 flex items-center p-4 min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
              <p>To understand my words one must know silence,</p>
              <p>For these words emerge from the womb of silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 flex min-w-[8rem] justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-2.jpg"
              />
              <span className="text-sm text-gray-600">Evan Mitchell</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
              <p>In self-exile, I speak to no one but you, beloved:</p>
              <p>You who are the melodious voice of silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 flex min-w-[8rem] justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-3.jpg"
              />
              <span className="text-sm text-gray-600">Liam Anderson</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
              <p>If truth needs to be confirmed by perception,</p>
              <p>How am I to affirm your existence, O Silence?</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 flex min-w-[8rem] justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Amina Hassan</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
              <p>Meditation is just another ritual, I am aware.</p>
              <p>True piety is in the act of chanting silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 flex min-w-[8rem] justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-5.jpg"
              />
              <span className="text-sm text-gray-600">Finn</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
              <p>Where perception fails, love lights the way.</p>
              <p>The lantern of love is naught but flaming silence.</p>
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="h-20 min-w-[8rem] flex justify-center items-center p-4">
            <div>
              <Avatar
                rounded
                img="https://flowbite-react.com/images/people/profile-picture-4.jpg"
              />
              <span className="text-sm text-gray-600">Amina</span>
            </div>
          </div>
          <div className="h-20 flex items-center min-w-[26.5rem]">
            <div className="w-full text-lg font-light">
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
