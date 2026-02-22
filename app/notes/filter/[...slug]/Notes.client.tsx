"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./NotesPage.module.css";
import { useState } from "react";
import { fetchNotes } from "@/lib/api";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import { NoteList } from "@/components/NoteList/NoteList";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

interface NotesClientProps {
  tag: string | undefined;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValues, setSearchValues] = useState("");
  if (tag === "all") tag = undefined;
  const { data } = useQuery({
    queryKey: ["note", page, searchValues, tag],
    queryFn: () => fetchNotes(page, searchValues, tag),
    placeholderData: keepPreviousData,
  });

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const notes = data?.notes || [];
  const totalPages = data?.totalPages || 0;

  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValues(e.target.value);
      setPage(1);
    },
    300,
  );

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox onSearch={handleChange} search={searchValues} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              page={page}
              onPage={(page) => {
                setPage(page);
              }}
            />
          )}
          <button className={css.button} onClick={openModal}>
            Create note +
          </button>
        </header>
      </div>
      {notes.length > 0 && <NoteList notes={notes} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
