import queryString from 'query-string';
import React, { useEffect } from 'react';

import Content from '@/components/Content';
import NotesList from '@/components/NotesList';
import { EditorMode } from '@/constants';
import { setEditorMode } from '@/gql/editorModeCache';
import { GET_NOTE, GET_NOTES } from '@/gql/queries';
import AppLayout from '@/layouts/App';
import { GetNote, GetNoteVariables, GetNotes } from '@/typings/gql';
import { useQuery } from '@apollo/client';

const App = () => {
  let noteId: string = '';
  if (process.browser) {
    const parsed = queryString.parse(location.search);
    noteId = parsed.noteId as string;
  }

  const { data: notesData } = useQuery<GetNotes>(GET_NOTES);
  const { data: noteData } = useQuery<GetNote, GetNoteVariables>(GET_NOTE, {
    variables: { id: noteId },
    skip: !noteId,
  });

  // if noteData changed, alway back to View mode first.
  useEffect(() => {
    setEditorMode(EditorMode.View);
  }, [noteData?.note]);

  return (
    <AppLayout>
      <NotesList notes={notesData?.notes || []} />
      {noteData?.note && noteId && (
        /* key for re-mount when noteId changed */
        <Content key={noteId} note={noteData.note} />
      )}
    </AppLayout>
  );
};

export default App;
