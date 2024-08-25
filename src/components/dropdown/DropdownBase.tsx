import React from "react";

interface IDropdownBase {
  isShow: boolean;
  text: string;
  items: string[];
  onClick: () => void;
  onClickItem: (item: string) => void;
  extra?: string;
}

const DropdownBase: React.FC<IDropdownBase> = (props) => {
  const { isShow, text, items, onClick, onClickItem, extra } = props;

  return (
    <div
      className={`relative w-fit border border-gray-light rounded-[5px] ${extra}`}
    >
      <button
        onClick={onClick}
        className="flex items-center gap-2 justify-between w-full text-sm font-semibold text-gray py-2.5 px-[14px]"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        {text}
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
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-fit min-w-72 whitespace-nowrap mt-1 bg-white rounded-md shadow-lg">
        <ul
          className={`${
            isShow ? "block" : "hidden"
          } w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-light`}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`text-gray font-semibold relative py-2 pl-3 pr-9 cursor-pointer ${
                index < items.length - 1 ? "border-b border-gray-light" : ""
              }`}
              onClick={() => onClickItem(item)}
            >
              <span className="block w-fit">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownBase;
