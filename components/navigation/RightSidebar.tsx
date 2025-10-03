import React from "react";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import chevron from "@/public/icons/chevron-right.svg";
import Image from "next/image";
import TagCard from "../cards/TagCard";
const hotQuestions = [
  { _id: "1", title: "How to center a div in CSS?" },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript?",
  },
  { _id: "3", title: "How to create a responsive layout?" },
  { _id: "4", title: "What is a closure in JavaScript?" },
  { _id: "5", title: "How to optimize website performance?" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", questions: 1200 },
  { _id: "2", name: "React", questions: 950 },
  { _id: "3", name: "CSS", questions: 800 },
  { _id: "4", name: "Node.js", questions: 600 },
  { _id: "5", name: "Python", questions: 500 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 left-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-1 p-6 shadow-light-300 dark:shadow:none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => {
            return (
              <>
                <Link
                  key={_id}
                  className="cursor-pointer flex items-center justify-between gap-7"
                  href={ROUTES.Question(_id)}
                >
                  <p className="body-medium text-dark500_light700"> {title}</p>
                  <Image src={chevron} alt="arrow" width={16} height={16} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <>
              <TagCard
                key={_id}
                _id={_id}
                name={name}
                questions={questions}
                showCount
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
