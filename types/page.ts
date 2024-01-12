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
  Icon:IconType
}

export interface IExperience {
  id: number;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}