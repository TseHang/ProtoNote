import React from 'react';

import Content from '@/components/Content';
import NotesList from '@/components/NotesList';
import { GET_NOTES } from '@/gql/queries';
import AppLayout from '@/layouts/App';
import { GetNotes } from '@/typings/gql';
import { useQuery } from '@apollo/client';

const App = () => {

  const { data } = useQuery<GetNotes>(GET_NOTES);
  const note = data?.notes[0];
  console.log(data?.notes);

  return (
    <AppLayout>
      <NotesList notes={data?.notes || []} />
      {note && <Content note={note} />}
    </AppLayout>
  );
};

export default App;
