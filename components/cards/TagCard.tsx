import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Badge } from "@/components/ui/badge";
import { getDevIconClassName } from "@/lib/utils";
interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconClass = getDevIconClassName(name);
  return (
    <Link href={ROUTES.Tag(_id)} className="flex items-center justify-between">
      <Badge className="background-light300_dark700 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={iconClass}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <span className="body-small text-dark500_light700">
          {questions} questions
        </span>
      )}
    </Link>
  );
};

export default TagCard;
