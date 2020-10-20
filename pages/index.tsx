import queryString from 'query-string';
import React from 'react';

import Content from '@/components/Content';
import NotesList from '@/components/NotesList';
import { GET_NOTE, GET_NOTES } from '@/gql/queries';
import AppLayout from '@/layouts/App';
import { GetNote, GetNoteVariables, GetNotes } from '@/typings/gql';
import { useQuery } from '@apollo/client';

const App = () => {
  const parsed = queryString.parse(location.search);
  const noteId = parsed.noteId as string;

  const { data: notesData } = useQuery<GetNotes>(GET_NOTES);
  const { data: noteData } = useQuery<GetNote, GetNoteVariables>(GET_NOTE, {
    variables: { id: noteId },
    skip: !noteId,
  });

  return (
    <AppLayout>
      <NotesList notes={notesData?.notes || []} />
      {noteData?.note && noteId && (
        // key for telling React need to re-render when noteId changed
        <Content key={noteId} note={noteData.note} />
      )}
    </AppLayout>
  );
};

export default App;
