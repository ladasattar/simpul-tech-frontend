import React from "react";
import ButtonBase from "../../components/buttons/ButtonBase";
import DropdownBase from "../../components/dropdown/DropdownBase";
import TodoContext from "../../contexts/todoContext";

const TodoHeader = () => {
  const { showNewField, setShowNewField } = React.useContext(TodoContext);
  const [isShowDropdown, setIsShowDropdown] = React.useState<boolean>(false);

  const handleDropdown = () => setIsShowDropdown(!isShowDropdown);

  return (
    <section className="flex items-center py-[18px] px-[22px] justify-between">
      <DropdownBase
        isShow={isShowDropdown}
        onClick={handleDropdown}
        text="My Tasks"
        items={["Personal Errands", "Urgent To-Do"]}
        onClickItem={(item) => console.log(item)}
        extra="ml-28"
      />
      <ButtonBase onClick={() => setShowNewField(!showNewField)}>
        <span>{showNewField ? "Cancel" : "New Task"}</span>
      </ButtonBase>
    </section>
  );
};

export default TodoHeader;
