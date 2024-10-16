import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">See my other projects</h2>
        <p className="text-gray-500 my-2">
        Come discover my portfolio to see my projects as well as my journey
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://bahoz-dev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go see
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="/call_to_action.png"
          alt="js picture"
        />
      </div>
    </div>
  );
}
