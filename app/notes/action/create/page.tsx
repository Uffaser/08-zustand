import { Metadata } from "next";
import CreateNoteClient from "./CreateNote.client";
import css from "./CreateNote.module.css";

export const metadata: Metadata = {
  title: "Create new task with NoteHub",
  description:
    "NoteHub is a task manager for keeping a to-do list. Gain focus, stay organized, and find peace of mind.",
  openGraph: {
    title: "Create new task with NoteHub",
    description:
      "NoteHub is a task manager for keeping a to-do list. Gain focus, stay organized, and find peace of mind.",
    url: "https://08-zustand-pt9abt0kt-uffasers-projects.vercel.app/notes/action/create",
    images: { url: "../notehub-og-meta.jpg" },
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      {" "}
      <div className={css.container}>
        {" "}
        <h1 className={css.title}>Create note</h1>
        <CreateNoteClient />
      </div>{" "}
    </main>
  );
}
