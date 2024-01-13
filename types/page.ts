import { IconType } from "react-icons";

export interface IServices {
  id: number;
  title: string;
  about: string;
  Icon: IconType;
}

export interface IPersonalDetails {
  id: number;
  label: string;
  content: string;
}

export interface ISkill {
  id: number;
  title: string;
  level: string;
  Icon: IconType;
}

export interface IExperience {
  id: number;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export interface IProjects {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  deployedUrl: string;
  githubUrl: string;
  category: Category[];
  technology: Category[]
}

export type Category =
  | "Javascript"
  | "CSS"
  | "HTML"
  | "React.js"
  | "Next.js"
  | "Node.js"
  | "Express.js"
  | "Nest.js"
  | "Mongodb"
  | "SQL"
  | "Firebase"
  | "Typescript"
  | "Tailwind CSS";
