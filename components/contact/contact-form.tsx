import { Button, Label, Textarea, TextInput } from 'flowbite-react';

export default function ContactForm() {
  return (
    <form className="flex max-w-xl flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput id="fullName" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Message" />
        </div>
        <Textarea id="message" required rows={4} />
      </div>
      <Button color="blue">Send</Button>
    </form>
  );
}
