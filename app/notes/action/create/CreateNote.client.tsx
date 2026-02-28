"use client";

import NoteForm from "@/components/NoteForm/NoteForm";
import { useRouter } from "next/navigation";

export default function CreateNoteClient() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return <NoteForm onClose={handleClose} />;
}
