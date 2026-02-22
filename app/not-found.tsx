import { Metadata } from "next";
import css from "./notFound.module.css";

export const metadata: Metadata = {
  title: "NoteHub not found page",
  description: "This page does not exist on NoteHub.",
  openGraph: {
    title: "NoteHub not found page",
    description: "This page does not exist on NoteHub.",
    url: "https://08-zustand-fh5lcb2hr-uffasers-projects.vercel.app/",
    images: "../notehub-og-meta.jpg",
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
