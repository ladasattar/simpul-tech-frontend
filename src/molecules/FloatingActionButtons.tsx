import React from "react";
import ButtonBaseCircle from "../components/buttons/ButtonBaseCircle";
import CloudLightning from "@assets/svg/cloud-lightning.svg";
import QuestionAnswer from "@assets/svg/question-answer.svg";
import QuestionAnswerWhite from "@assets/svg/question-answer-white.svg";
import ChromeReaderMode from "@assets/svg/chrome-reader-mode.svg";
import ChromeReaderModeWhite from "@assets/svg/chrome-reader-mode-white.svg";
import { COLORS } from "../constants/colors";
import { MENU_STATE } from "../constants/menu";
import FloatingActionContext from "../contexts/floatingActionContext";

const FloatingActionButtons = () => {
  const { isShown, setIsShown, indexActive, setIndexActive } = React.useContext(
    FloatingActionContext
  );

  const onClick = (index?: number) => {
    if (index === indexActive) {
      setIndexActive(null);
      return;
    }
    setIndexActive(index!);
  };

  return (
    <section className="absolute bottom-7 right-[34px] gap-[26px] flex items-center flex-row-reverse">
      <div
        className={`absolute bg-gray w-[68px] h-[68px] rounded-full transition-all duration-300 ${
          indexActive ? "-left-3" : "left-0"
        }`}
      ></div>
      <ButtonBaseCircle
        index={0}
        icons={<img src={CloudLightning} alt="Cloud lightning" />}
        colorScheme=""
        onClick={() => setIsShown(!isShown)}
        extra={indexActive ? "opacity-0" : ""}
      />
      <ButtonBaseCircle
        index={1}
        icons={
          <img
            src={
              indexActive === MENU_STATE.CHAT
                ? QuestionAnswerWhite
                : QuestionAnswer
            }
            alt="Question Answer"
          />
        }
        text="Inbox"
        extra=""
        colorScheme={COLORS.slateBlue}
        isSubButton={true}
        isShown={isShown}
        isActive={indexActive === MENU_STATE.CHAT}
        indexActive={indexActive}
        onClick={onClick}
      />
      <ButtonBaseCircle
        index={2}
        icons={
          <img
            src={
              indexActive === MENU_STATE.TODO
                ? ChromeReaderModeWhite
                : ChromeReaderMode
            }
            alt="Chrome Reader Mode"
          />
        }
        text="Task"
        extra=""
        colorScheme={COLORS.tacao}
        isSubButton={true}
        isShown={isShown}
        isActive={indexActive === MENU_STATE.TODO}
        indexActive={indexActive}
        onClick={onClick}
      />
    </section>
  );
};

export default FloatingActionButtons;
