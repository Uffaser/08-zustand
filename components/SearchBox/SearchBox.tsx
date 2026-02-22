import css from './SearchBox.module.css';

interface SearchBoxProps {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}

export default function SearchBox({ onSearch, search }: SearchBoxProps) {
    return (
        <input
            className={css.input}
            type="text"
            defaultValue={search}
            onChange={onSearch}
            placeholder="Search notes"
        />
    );
}
