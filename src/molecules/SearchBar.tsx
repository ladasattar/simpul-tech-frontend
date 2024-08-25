import React from "react";
import SearchIcon from "@assets/svg/search.svg";

interface ISearchBar {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <section className="rounded-[5px] py-2.5 px-3 border border-gray-light w-full relative">
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder ?? "Search"}
        value={value}
        onChange={onChange}
        className="w-full outline-none placeholder:px-[86px] placeholder:text-lg placeholder:text-[#333333] placeholder:font-medium"
      />
      <img
        src={SearchIcon}
        alt="Search Icon"
        className={`absolute top-1/2 transform -translate-y-1/2 right-[86px] w-4 h-4 ${
          value ? "opacity-0" : "opacity-100"
        }`}
      />
    </section>
  );
};

export default SearchBar;
