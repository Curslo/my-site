import { MdCss, MdHtml, MdJavascript } from "react-icons/md";
import { IPersonalDetails, ISkill } from "../types/page";
import { FaAws, FaBootstrap, FaDigitalOcean, FaDocker, FaGit, FaGithub, FaNodeJs, FaNpm, FaReact, FaYarn } from "react-icons/fa";
import { SiExpress, SiJest, SiMocha, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiRsocket, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { LiaChairSolid } from "react-icons/lia";
import { DiHeroku } from "react-icons/di";
import {GrGraphQl} from 'react-icons/gr'




export const personalDetails: IPersonalDetails[] = [
  {
    id: 1,
    label: "Full Name",
    content: "Richard Kisivii",
  },
  {
    id: 2,
    label: "Address",
    content: "P.O BOX 50504, 00100",
  },
  {
    id: 3,
    label: "City, State and Zip Code",
    content: "Nairobi, Kenya - 00100",
  },
  {
    id: 4,
    label: "E-mail Address",
    content: "richardkisivii@gmail.com",
  },
  {
    id: 5,
    label: "Phone Number",
    content: "+254742132564",
  },
  {
    id: 6,
    label: "Linkedin Profile",
    content:
      "<a href='https://www.linkedin.com/in/richard-kisivii-2ab621210/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B7q%2Bbi4RzS%2FqLpmVrf1%2BwXw%3D%3D'>Richard Kisivii</a>",
  },
  {
    id: 7,
    label: "Download Portfolio",
    content: "<button>Download Resume</button>",
  },
];

export const languages:ISkill[] = [
  {
    id: 1,
    title: "Javascript",
    level: "80%",
    Icon: MdJavascript,
  },
  {
    id: 2,
    title: "HTML",
    level: "95%",
    Icon: MdHtml,
  },
  {
    id: 3,
    title: "CSS",
    level: "85%",
    Icon: MdCss,
  },
];

export const frontend:ISkill[] = [
  {
    id: 1,
    title: "React.js",
    level: "90%",
    Icon: FaReact,
  },
  {
    id: 2,
    title: "Next.js",
    level: "90%",
    Icon: SiNextdotjs,
  },
  {
    id: 3,
    title: "Bootstrap",
    level: "70%",
    Icon: FaBootstrap,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    level: "80%",
    Icon: SiTailwindcss,
  },
];

export const backend:ISkill[] = [
  {
    id: 1,
    title: "Node.js",
    level: "80%",
    Icon: FaNodeJs,
  },
  {
    id: 2,
    title: "Express.js",
    level: "90%",
    Icon: SiExpress,
  },
  {
    id: 3,
    title: "Nest.js",
    level: "85%",
    Icon: SiNestjs,
  },
];

export const versionControl:ISkill[] = [
  {
    id: 1,
    title: "Git",
    level: "75%",
    Icon: FaGit,
  },
  {
    id: 2,
    title: "GitHub",
    level: "85%",
    Icon: FaGithub,
  },
];

export const database:ISkill[] = [
  {
    id: 1,
    title: "MongoDb",
    level: "90%",
    Icon: SiMongodb,
  },
  {
    id: 2,
    title: "MySQL",
    level: "70%",
    Icon: SiMysql,
  },
  {
    id: 3,
    title: "Firebase",
    level: "80%",
    Icon: IoLogoFirebase,
  },
];

export const packageManager:ISkill[] = [
  {
    id: 1,
    title: "npm",
    level: "70%",
    Icon: FaNpm,
  },
  {
    id: 2,
    title: "yarn",
    level: "90%",
    Icon: FaYarn,
  },
];

export const testing:ISkill[] = [
  {
    id: 1,
    title: "Jest",
    level: "60%",
    Icon: SiJest,
  },
  {
    id: 2,
    title: "Mocha",
    level: "40%",
    Icon: SiMocha,
  },
  {
    id: 3,
    title: "Chai",
    level: "30%",
    Icon: LiaChairSolid,
  },
];

export const deployment:ISkill[] = [
  {
    id: 1,
    title: "Heroku",
    level: "90%",
    Icon: DiHeroku,
  },
  {
    id: 2,
    title: "AWS",
    level: "60%",
    Icon: FaAws,
  },
  {
    id: 3,
    title: "Docker",
    level: "80%",
    Icon: FaDocker,
  },
  {
    id: 3,
    title: "Digital Ocean",
    level: "70%",
    Icon: FaDigitalOcean,
  },
];

export const apis:ISkill[] = [
  {
    id: 1,
    title: "Restful APIs",
    level: "90%",
    Icon: SiRsocket,
  },
  {
    id: 2,
    title: "Graphql",
    level: "70%",
    Icon: GrGraphQl,
  },
];
