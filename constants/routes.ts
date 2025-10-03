import { Tag } from "lucide-react";

const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  Question: (id: string) => `/question/${id}`,
  Tag: (id: string) => `/tag/${id}`,
};
export default ROUTES;
