export const themes = [
  { value: "light", label: "Light", icon: "/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
  { value: "system", label: "System", icon: "/icons/computer.svg" },
];
import home from "@/public/icons/home.svg";
import users from "@/public/icons/users.svg";
import star from "@/public/icons/star.svg";
import suitcase from "@/public/icons/suitcase.svg";
import tag from "@/public/icons/tag.svg";
import user from "@/public/icons/user.svg";
import question from "@/public/icons/question.svg";
export const sidebarLinks = [
  {
    imgURL: home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: users,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: star,
    route: "/collections",
    label: "Collections",
  },
  {
    imgURL: suitcase,
    route: "/find-jobs",
    label: "Find Jobs",
  },
  {
    imgURL: tag,
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: user,
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: question,
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
