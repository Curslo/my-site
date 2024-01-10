import { FaDocker, FaGitAlt, FaLock, FaSearch, FaServer } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { LuUnplug } from "react-icons/lu";
import { IoMdMegaphone } from "react-icons/io";

import { IServices } from "../types/page";

export const Services: IServices[] = [
  {
    id: 1,
    title: "Frontend Development",
    about:
      "<b>1. Languages</b> - I am skilled in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.<br/> <b>2. Frameworks/Libraries</b> - I am experienced with popular front-end frameworks and libraries such as <b>React</b>, <b>Next</b>, and <b>Angular</b>.<br/> <b>3. Responsive Design</b> - I ensure that web applications are visually appealing and work seamlessly across various devices and screen sizes.",
    Icon: MdComputer,
  },
  {
    id: 2,
    title: "Backend Development",
    about:
      "<b>1. Server-Side Programming</b> - I am proficient in server-side programming languages and frameworks such as <b>Node.js</b>, <b>Express.js</b>, <b>Nest.js</b>.<br/> <b>2. Database Management</b> - I have expertise in working with databases, including <b>SQL (e.g., MySQL, PostgreSQL)</b> and <b>NoSQL (e.g., MongoDB)</b>.<br/> <b>3. Server Management</b> - I am capable of setting up and managing <b>web servers</b>, understanding <b>server-side architecture</b>, and dealing with <b>server-side logic.</b>",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Database Management",
    about:
      "I design, implement, and manage databases, ensuring efficient data storage and retrieval.<br/>I work with both <b>relational</b> databases (e.g., MySQL, PostgreSQL) and <b>NoSQL</b> databases (e.g., MongoDB) depending on the project requirements.",
    Icon: IoServer,
  },
  {
    id: 4,
    title: "API Development",
    about:
      "<b>1.</b> I design and implement <b>RESTful</b> or <b>GraphQL</b> APIs to facilitate communication between the <b>front-end</b> and the <b>back-end</b>.<br/><b>2.</b> I ensure that APIs are well-documented, scalable, and adhere to best practices.",
    Icon: LuUnplug,
  },
  {
    id: 5,
    title: "Version Control",
    about:
      "I am familiar with version control systems such as <b>Git</b>, allowing for <b>efficient collaboration</b> and <b>code management.</b>",
    Icon: FaGitAlt,
  },
  {
    id: 6,
    title: "DevOps and Deployment",
    about:
      "<b>1.</b> I have experience with deployment processes, including setting up <b>Continuous Integration/Continuous Deployment (CI/CD) pipelines</b>.<br/> <b>2.</b> I am also familiar with containerization tools like <b>Docker</b> and orchestration tools like <b>Kubernetes</b>.",
    Icon: FaDocker,
  },
  {
    id: 7,
    title: "Security",
    about:
      "I implement security best practices at both the application and infrastructure levels, ensuring <b>data privacy</b> and protection against common web vulnerabilities.",
    Icon: FaLock,
  },
  {
    id: 8,
    title: "Collaboration and Communication",
    about:
      "<b>1.</b> I work effectively with cross-functional teams, including <b>designers</b>, <b>product managers</b>, and <b>other developers</b>.<br/><b>2.</b> I communicate technical concepts to non-technical stakeholders.",
    Icon: IoMdMegaphone,
  },
  {
    id: 9,
    title: "Problem Solving",
    about:
      "I am adeptive to identifying and solving issues, whether they are related to <b>functionality</b>, <b>performance</b>, or <b>scalability</b>.",
    Icon: FaSearch,
  },
];
