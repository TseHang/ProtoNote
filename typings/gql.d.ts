/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateNote
// ====================================================

export interface CreateNote_createNote {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
  createdAt: any;
}

export interface CreateNote {
  createNote: CreateNote_createNote;
}

export interface CreateNoteVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateNote
// ====================================================

export interface UpdateNote_updateNote {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
}

export interface UpdateNote {
  updateNote: UpdateNote_updateNote;
}

export interface UpdateNoteVariables {
  id: string;
  name?: string | null;
  content?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteNote
// ====================================================

export interface DeleteNote {
  deleteNote: boolean;
}

export interface DeleteNoteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNotes
// ====================================================

export interface GetNotes_notes {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
  createdAt: any;
}

export interface GetNotes {
  notes: GetNotes_notes[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNote
// ====================================================

export interface GetNote_note {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
  createdAt: any;
}

export interface GetNote {
  note: GetNote_note | null;
}

export interface GetNoteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NewNote
// ====================================================

export interface NewNote {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
  createdAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
