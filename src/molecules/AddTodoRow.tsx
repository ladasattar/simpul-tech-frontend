import React from "react";
import Tags from "../components/tags";
import useTodo from "../hooks/useTodo";
import PenSvg from "@assets/svg/pen.svg";
import MoreSvg from "@assets/svg/more.svg";
import BookmarkSvg from "@assets/svg/bookmark.svg";
import ScheduleSvg from "@assets/svg/schedule.svg";
import ButtonBase from "../components/buttons/ButtonBase";
import { tags } from "../constants/tags";

const AddTodoRow = () => {
  const inputDateRef = React.useRef<HTMLInputElement>(null);
  const spanDateRef = React.useRef<HTMLSpanElement>(null);
  const tagsPopupRef = React.useRef<HTMLDivElement>(null);
  const { handleAddTodo } = useTodo();
  const [isTagOptionsShow, setIsTagOptionsShow] =
    React.useState<boolean>(false);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

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

          <div
            className="flex items-start mb-5 gap-[18px] bg-[#F9F9F9] px-2 py-2.5 rounded-[5px] -ml-2.5 cursor-pointer relative z-50"
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
              {selectedTags &&
                selectedTags.map((tag, index) => (
                  <Tags
                    key={index}
                    name={tag}
                    onClick={() =>
                      setSelectedTags(selectedTags.filter((t) => t !== tag))
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
                  disabled={selectedTags?.includes(tag.name)}
                  onClick={() => setSelectedTags([...selectedTags, tag.name])}
                />
              ))}
            </div>
            <input
              type="hidden"
              name="tags"
              value={selectedTags.length > 0 ? selectedTags.join(",") : ""}
            />
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
