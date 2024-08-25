import React from "react";
import PersonSvg from "@assets/svg/person.svg";
import PersonGraySvg from "@assets/svg/person-gray.svg";

interface IAvatars {
  avatar?: string;
  isGroup?: boolean;
}

const Avatars: React.FC<IAvatars> = (props) => {
  const { avatar, isGroup } = props;

  return (
    <div className="w-14 flex justify-center">
      {isGroup ? (
        <div className="flex">
          <div className="bg-gray-lightest rounded-full w-[34px] h-[34px] flex items-center justify-center -mr-3">
            <img
              src={avatar ?? PersonGraySvg}
              alt="Avatar"
              className="w-full max-w-[18px] object-contain"
            />
          </div>
          <div className="bg-primary rounded-full w-[34px] h-[34px] flex items-center justify-center">
            <img
              src={avatar ?? PersonSvg}
              alt="Avatar"
              className="w-full max-w-[18px] object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="bg-primary rounded-full w-[34px] h-[34px] flex items-center justify-center">
          <img
            src={avatar ?? PersonSvg}
            alt="Avatar"
            className="w-full max-w-[18px] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Avatars;
