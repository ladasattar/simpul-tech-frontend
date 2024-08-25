import React from "react";

interface IBaseCircle {
  index?: number;
  text?: string;
  icons: React.ReactNode;
  colorScheme?: string;
  isSubButton?: boolean;
  isShown?: boolean;
  isActive?: boolean;
  indexActive?: number | null;
  extra?: string;
  onClick?: (index?: number) => void;
}

const ButtonBaseCircle: React.FC<IBaseCircle> = (props) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const baseGap = 26;
  const {
    text,
    icons,
    colorScheme,
    isSubButton,
    isShown,
    isActive,
    indexActive,
    extra,
    onClick,
    index,
  } = props;
  const [movementAmount, setMovementAmount] = React.useState<number>(0);
  const isSubButtonNotActive =
    isSubButton && isShown && indexActive && indexActive !== index;

  React.useEffect(() => {
    if (ref.current)
      setMovementAmount((ref.current.offsetWidth + baseGap) * index!);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <button
      ref={ref}
      onClick={() => onClick && onClick(index)}
      style={{
        left:
          isSubButton && isShown && !isActive && !indexActive
            ? `-${movementAmount}px`
            : isSubButtonNotActive && index! > 1
            ? `calc((${movementAmount}px / 2) * -1)`
            : isSubButtonNotActive && index! <= 1
            ? `-${movementAmount}px`
            : "",
        backgroundColor:
          colorScheme !== "" && indexActive === index ? colorScheme : "",
      }}
      className={`rounded-full flex items-center justify-center relative bottom-0 transition-all duration-300 bg-[#F2F2F2] ${
        colorScheme !== "" ? colorScheme : "!bg-primary"
      } ${
        isSubButton
          ? "w-[60px] h-[60px] z-[-1] !absolute top-1/2 -translate-y-1/2"
          : "w-[68px] h-[68px]"
      } ${isSubButton && isShown ? "z-[1]" : ""} ${
        isSubButton && !isShown ? "left-1" : ""
      } ${
        isActive
          ? `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px]`
          : ""
      } ${extra}`}
    >
      <span
        className={`absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 delay-100 ${
          isSubButton && isShown && !indexActive ? "!-top-4 opacity-100" : ""
        }`}
      >
        {text}
      </span>
      {icons}
    </button>
  );
};

export default ButtonBaseCircle;
