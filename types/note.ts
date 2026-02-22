type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping'


export interface Note {
    content: string;
    id: string;
    title: string;
    tag: NoteTag;
    createdAt: string;
    updatedAt: string;
}


