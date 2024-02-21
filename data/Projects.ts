import { IProjects } from "../types/page";

export const projects: IProjects[] = [
  {
    id: 1,
    name: "My Portfolio",
    category: ["Next.js", "Typescript", "Tailwind CSS", "Node.js"],
    imagePath: "/portfolio.png",
    technology: ["Next.js", "Node.js", "Typescript", "Tailwind CSS"],
    description:
      "This is my Personal Porfolio website that showcases all of my projects and qualifications.",
    deployedUrl:
      "https://my-site-4p9knm5um-richard-kisiviis-projects.vercel.app/",
    githubUrl: "https://github.com/Curslo/my-site",
  },
  {
    id: 2,
    name: "Weather App",
    category: ["Javascript", "CSS", "HTML"],
    imagePath: "/assets/wapp2.png",
    technology: ["Javascript", "CSS", "HTML"],
    description:
      "This is a Weather web App that tell you the weather conditions on a specific city.",
    deployedUrl: "https://weather-app-omega-rouge-91.vercel.app/",
    githubUrl: "https://github.com/Curslo/weather-app",
  },
  {
    id: 3,
    name: "To-Do App",
    category: ["Javascript", "CSS", "HTML"],
    imagePath: "/assets/to-do app.png",
    technology: ["Javascript", "CSS", "HTML"],
    description:
      "This is a To-Do list app that records the list of tasks and you can select the task after it is done.",
    deployedUrl: "https://todo-list-app-seven-phi.vercel.app/",
    githubUrl: "https://github.com/Curslo/todo-list-app",
  },
  {
    id: 4,
    name: "Simple Quiz App",
    category: ["Javascript", "CSS", "HTML"],
    imagePath: "/assets/quiz app.png",
    technology: ["Javascript", "CSS", "HTML"],
    description:
      "This is a Simple Quiz App that has questions and the answer is determined by the Quiz app after the user has selected the desired answer..",
    deployedUrl: "https://quiz-app-liart-rho.vercel.app/",
    githubUrl: "https://github.com/Curslo/quiz-app",
  },
];
