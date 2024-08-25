import App from "./App.tsx";
import { FloatingActionProvider } from "./contexts/floatingActionContext/FloatingActionContext.tsx";
import { ChatProvider } from "./contexts/chatContext/ChatContext.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import { TodoProvider } from "./contexts/todoContext/TodoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FloatingActionProvider>
      <ChatProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ChatProvider>
    </FloatingActionProvider>
  </StrictMode>
);
