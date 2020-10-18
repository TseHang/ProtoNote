import React from 'react';

import Content from '@/components/Content';
import NotesList from '@/components/NotesList';
import fakeData from '@/fakeData';
import AppLayout from '@/layouts/App';

const App = () => {
  
  return (
    <AppLayout>
      <NotesList notes={fakeData} />
      <Content />
    </AppLayout>
  );
};

export default App;
