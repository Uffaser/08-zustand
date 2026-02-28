import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (value: string) => void;
  search: string;
}

export default function SearchBox({ onSearch, search }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      defaultValue={search}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search notes"
    />
  );
}
