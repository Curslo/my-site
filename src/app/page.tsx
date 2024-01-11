import Image from "next/image";
import { Services } from "../../data/About";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        As a full-stack web developer, I am proficient in both front-end and
        back-end technologies, allowing me to work on all aspects of web
        application development. Here is a breakdown of my skills and
        responsibilities:
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h1 className="my-3 text-xl font-bold tracking-wide">
          My skills and Responsibilities in Web Development
        </h1>
        <div className="grid gap-4 lg:grid-cols-4">
          {Services.map((service) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={service.id}
              className="lg:col-span-2 bg-gray-200 rounded-md"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      <h5 className="my-3 font-medium">
        In summary, I am a well-rounded full-stack web developer capable of
        handling the entire web development process, from designing and
        implementing user interfaces to managing server-side logic and
        databases. My skills encompass both front-end and back-end technologies,
        allowing me to create robust and scalable web applications.
      </h5>
    </div>
  );
}
