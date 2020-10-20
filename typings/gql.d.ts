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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
