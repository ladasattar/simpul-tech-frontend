import React from "react";
import Chat from "./templates/Chat";
import Todo from "./templates/Todo";
import FloatingActionContext from "./contexts/floatingActionContext";
import FloatingActionButtons from "./molecules/FloatingActionButtons";
import { MENU_STATE } from "./constants/menu";
import { initDB } from "./services/db";

function App() {
  const { isShown, indexActive } = React.useContext(FloatingActionContext);
  const [isDBReady, setIsDBReady] = React.useState<boolean>(false);

  const handleInitDB = async () => {
    const status = await initDB();
    setIsDBReady(status);
  };

  React.useEffect(() => {
    if (!isDBReady) handleInitDB();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="h-screen w-screen relative">
      <FloatingActionButtons />
      <Chat isShow={isShown && indexActive === MENU_STATE.CHAT} />
      <Todo isShow={isShown && indexActive === MENU_STATE.TODO} />
    </main>
  );
}

export default App;
