import React from "react";
import Tags from "../components/tags";
import useTodo from "../hooks/useTodo";
import PenSvg from "@assets/svg/pen.svg";
import MoreSvg from "@assets/svg/more.svg";
import BookmarkSvg from "@assets/svg/bookmark.svg";
import ScheduleSvg from "@assets/svg/schedule.svg";
import { ITodo } from "../types/todo.interface";
import { tags } from "../constants/tags";

const TodoRow: React.FC<ITodo> = (props) => {
  const todoContent = React.useRef<HTMLDivElement>(null);
  const tagsPopupRef = React.useRef<HTMLDivElement>(null);
  const {
    id,
    title,
    description,
    date,
    isCompleted,
    tags: defaultTags,
  } = props;
  const { handleDeleteTodo, handleUpdateTodo, handleClickTag } = useTodo();
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isTagOptionsShow, setIsTagOptionsShow] =
    React.useState<boolean>(false);
  const [todoHeight, setTodoHeight] = React.useState<number>(28);

  const getDaysLeft = (): number => {
    const today = new Date();
    const differenceInTime = date.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const getDateString = (): string => {
    const localeString = date.toLocaleDateString();
    const [month, day, year] = localeString.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  React.useEffect(() => {
    if (todoContent.current) setTodoHeight(todoContent.current.clientHeight);
  }, [todoContent]);

  // Close tag options when clicked outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tagsPopupRef.current &&
        !tagsPopupRef.current.contains(e.target as Node)
      )
        setIsTagOptionsShow(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tagsPopupRef]);

  return (
    <section
      className={`flex items-start gap-[22px] px-7 transition-all duration-300 ${
        isCompleted || isCollapsed ? "h-7" : `${todoHeight}px`
      } ${!isTagOptionsShow ? "overflow-hidden" : ""}`}
    >
      <div className="flex items-center relative">
        <input
          type="checkbox"
          name="is-completed"
          id="is-completed"
          className="w-full h-full absolute cursor-pointer opacity-0"
          defaultChecked={isCompleted}
          onClick={() =>
            handleUpdateTodo({
              id,
              title,
              date,
              description,
              isCompleted: !isCompleted,
            })
          }
        />
        <div
          className="w-[18px] h-[18px] border-2 rounded-sm border-gray-light mt-1.5 cursor-pointer"
          onClick={() =>
            handleUpdateTodo({
              id,
              title,
              date,
              description,
              isCompleted: !isCompleted,
            })
          }
        >
          {isCompleted && (
            <svg
              className="w-4 h-4 mt-0.5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
            >
              <g
                fill="#828282"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M40.6,12.1l-23.6,23.6l-9.6,-9.6l-2.8,2.9l12.4,12.3l26.4,-26.4z"></path>
                </g>
              </g>
            </svg>
          )}
        </div>
      </div>
      <div className="w-full" ref={todoContent}>
        <div className="flex items-center justify-between mb-4">
          <h5
            className={`line-clamp-3 text-gray font-semibold mr-14 ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {title}
          </h5>
          <div className="flex items-center">
            {!isCompleted ? (
              <p className="text-indicator-flamingo mr-5">
                {getDaysLeft()} Days Left
              </p>
            ) : (
              <></>
            )}
            <p className="text-gray mr-2.5">{date.toLocaleDateString()}</p>
            <button
              className={`mr-4 ${!isCollapsed ? "transform rotate-180" : ""}`}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 12.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 12.586z"
                />
              </svg>
            </button>
            <div className="relative" id="todo-menu">
              <button className="mt-1" onClick={() => setIsShow(!isShow)}>
                <img src={MoreSvg} alt="More" />
              </button>
              <div className="absolute right-0 min-w-32 z-10 w-fit whitespace-nowrap mt-1 bg-white rounded-md">
                <ul
                  className={`${
                    isShow ? "block" : "hidden"
                  } w-full mt-1 overflow-auto text-base bg-white rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-light`}
                  tabIndex={-1}
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  <li
                    className={`text-indicator-flamingo font-semibold relative py-2.5 pl-3 pr-9 cursor-pointer`}
                    onClick={() => handleDeleteTodo(id)}
                  >
                    <span className="block w-fit">Delete</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[18px] mb-3">
          <img src={ScheduleSvg} alt="Date" />
          <input
            type="date"
            name="task-date"
            id="task-date"
            className="pl-4 pr-3 py-2 rounded-[5px] border border-gray-light text-gray w-48 outline-none"
            defaultValue={getDateString()}
            onBlur={(e) => {
              const value = e.target.value;
              handleUpdateTodo({
                id,
                title,
                date: new Date(value),
                isCompleted,
                description,
              });
            }}
          />
        </div>

        <div className="flex items-start gap-[18px] mb-3">
          <img src={PenSvg} alt="Description" className="w-[18px]" />
          <p className="w-full px-0.5 text-gray">
            {description === "" ? "No Description" : description}
          </p>
        </div>

        <div
          className="flex items-start gap-[18px] bg-[#F9F9F9] px-2 py-2.5 rounded-[5px] -ml-2.5 cursor-pointer relative z-50"
          onClick={(e) => {
            if (tagsPopupRef.current) {
              tagsPopupRef.current.style.left = e.pageX + "px";
              tagsPopupRef.current.style.top = e.pageY / 2 + "px";
            }
            setIsTagOptionsShow(!isTagOptionsShow);
          }}
        >
          <img src={BookmarkSvg} alt="Bookmark" />
          <div className="flex items-center gap-2.5 flex-wrap">
            {defaultTags &&
              defaultTags.map((tag, index) => (
                <Tags
                  key={index}
                  name={tag}
                  onClick={() =>
                    handleClickTag(
                      {
                        id,
                        title,
                        date,
                        description,
                        isCompleted,
                        tags: defaultTags,
                      },
                      tag
                    )
                  }
                />
              ))}
          </div>
          <div
            ref={tagsPopupRef}
            className={`fixed bg-white border border-gray-light rounded-[5px] left-10 top-0 flex flex-col w-[277px] py-[14px] px-4 gap-2.5 ${
              isTagOptionsShow ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {tags.map((tag, index) => (
              <Tags
                key={index}
                name={tag.name}
                extra="!w-full"
                disabled={defaultTags?.includes(tag.name)}
                onClick={() =>
                  handleClickTag(
                    {
                      id,
                      title,
                      date,
                      description,
                      isCompleted,
                      tags: defaultTags,
                    },
                    tag.name
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoRow;
