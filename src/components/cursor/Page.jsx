import { useRef } from "react";
import Header from "./Cursor";
import StickyCursor from "./StickyCursor";
import "./Cursor.css";

export default function Cursor() {
  const stickyElement = useRef(null);

  return (
    <main className="main">
      <Header ref={stickyElement} />

      <StickyCursor stickyElement={stickyElement} />
    </main>
  );
}
