import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getDevIconClassName = (techName: string) => {
  const normTectName = techName.replace(/[ .]/g, "").toLowerCase();
  const techMap: { [key: string]: string } = {
    javascript: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    ruby: "devicon-ruby-plain",
    php: "devicon-php-plain",
    html5: "devicon-html5-plain",
    css3: "devicon-css3-plain",
    react: "devicon-react-original",
    angular: "devicon-angularjs-plain",
    vuejs: "devicon-vuejs-plain",
    nodejs: "devicon-nodejs-plain",
    express: "devicon-express-original",
    django: "devicon-django-plain",
    flask: "devicon-flask-original",
    laravel: "devicon-laravel-plain",
  };
  return `${techMap[normTectName] || "devicon-devicon-plain"}`;
};
