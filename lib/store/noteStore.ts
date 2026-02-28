import { NoteValue } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NoteStore {
    draft: NoteValue;
    setDraft: (newNote: NoteValue) => void;
    deleteDraft: () => void;
}

const initialDraft: NoteValue = {
  title: '',
  content: '',
  tag: 'Todo',
};

export const useNoteStore = create<NoteStore>()(persist((set) => ({
    draft: initialDraft,
    setDraft: (newNote: NoteValue) => set(() =>({ draft: newNote })),
    deleteDraft: () => set(()=> ({draft: initialDraft})),
}), { name: 'draft-note', partialize: (state) => ({ draft: state.draft })}))
