import React from "react";
import useTodo from "../hooks/useTodo";
import PenSvg from "@assets/svg/pen.svg";
import MoreSvg from "@assets/svg/more.svg";
import BookmarkSvg from "@assets/svg/bookmark.svg";
import ScheduleSvg from "@assets/svg/schedule.svg";
import ButtonBase from "../components/buttons/ButtonBase";

const AddTodoRow = () => {
  const { handleAddTodo } = useTodo();
  const inputDateRef = React.useRef<HTMLInputElement>(null);
  const spanDateRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const handleBlur = () => {
      const inputRef = inputDateRef.current;
      const spanRef = spanDateRef.current;
      if (inputRef?.value === "") {
        if (spanRef) spanRef.style.display = "block";
      }
    };

    const handleFocus = () => {
      const spanRef = spanDateRef.current;
      if (spanRef) spanRef.style.display = "none";
    };

    inputDateRef.current?.addEventListener("blur", handleBlur);
    inputDateRef.current?.addEventListener("focus", handleFocus);

    return () => {
      const inputRef = inputDateRef!.current;
      inputRef?.removeEventListener("blur", handleBlur);
      inputRef?.removeEventListener("focus", handleFocus);
    };
  }, [inputDateRef]);

  return (
    <section>
      <form
        onSubmit={handleAddTodo}
        className="flex items-start gap-[22px] px-7"
      >
        <div className="flex items-center relative">
          <input
            type="checkbox"
            name="is-completed"
            id="is-completed"
            className="w-full h-full absolute cursor-pointer opacity-0"
          />
          <div className="w-[18px] h-[18px] border-2 rounded-sm border-gray-light mt-1.5 cursor-pointer"></div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Type Task Title"
              className="w-full border border-gray-light rounded-[5px] px-4 py-2 text-gray max-w-96 placeholder:text-gray-light"
            />
            <div className="flex items-center">
              <button className="mr-4">
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
              <button className="mt-1">
                <img src={MoreSvg} alt="More" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[18px] mb-3">
            <img src={ScheduleSvg} alt="Date" className="grayscale" />
            <div className="relative">
              <input
                ref={inputDateRef}
                type="date"
                name="taskDate"
                id="taskDate"
                className="pl-4 pr-3 py-2 rounded-[5px] border border-gray-light text-gray w-48"
              />
              <span
                ref={spanDateRef}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-light w-32 cursor-pointer"
                onClick={(e) => {
                  inputDateRef.current?.focus();
                  const spanEl = e.target as HTMLSpanElement;
                  spanEl.style.display = "none";
                }}
              >
                Set Date
              </span>
            </div>
          </div>

          <div className="flex items-start gap-[18px] mb-4">
            <img
              src={PenSvg}
              alt="Description"
              className="grayscale w-[18px]"
            />
            <textarea
              name="description"
              id="description"
              className="w-full px-0.5 outline-primary text-gray placeholder:text-gray-light"
              cols={30}
              rows={1}
              placeholder="No Description"
            ></textarea>
          </div>

          <div className="flex items-start gap-[18px] mb-5 bg-[#F9F9F9] px-2 py-2.5 rounded-[5px] -ml-2.5">
            <img src={BookmarkSvg} alt="Bookmark" className="grayscale" />
            <div>
              <p className="text-gray-light">Click to add new tags</p>
            </div>
          </div>

          <div className="mb-5">
            <ButtonBase type="submit">Add Task</ButtonBase>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddTodoRow;
