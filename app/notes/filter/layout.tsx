import { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

export default function NotesLayout({
  children,
  sidebar,
}: Readonly<{
  sidebar: ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.notesWrapper}>{children}</div>
    </div>
  );
}
