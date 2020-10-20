import { graphql } from 'msw';

import { notes } from './fakeData';

export const handlers = [
  // Handles a "GetNotes" query
  graphql.query('GetNotes', (req, res, ctx) => {
    console.log('req', req);
    return res(
      ctx.data({ notes }),
    );
  }),
];
