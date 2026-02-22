import axios from "axios";
import type { Note } from "../types/note";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;


interface GetNotesResponse {
    notes: Note[];
    totalPages: number;
}

interface PostNote {
    title: string;
    content: string;
    tag: string;
}

const noteInstance = axios.create({
    baseURL: 'https://notehub-public.goit.study/api',
    headers: {
        Authorization: `Bearer ${myKey}`
    }
})

export async function fetchNotes(page:number, search:string, tag?:string):Promise<GetNotesResponse> {
    const {data} = await noteInstance.get<GetNotesResponse>('/notes', {
        params: {
            page: page,
            perPage: 15,
            search: search,
            tag: tag,
        },
    })
    return data
}

export async function fetchNoteById(id: string) {
    const { data } = await noteInstance.get<Note>(`/notes/${id}`)

    return data;
}

export async function createNote(newNote:PostNote):Promise<Note> {
    const { data } = await noteInstance.post<Note>('/notes', newNote)

    return data;
}


export async function deleteNote(id: string):Promise<Note> {
    const { data } = await noteInstance.delete<Note>(`/notes/${id}`)

    return data;
}