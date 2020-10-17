# ProtoNote

JUST DEMO!  SPEC FROM [HERE](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201).

Make your contents safe. A secure notes editor.
- support markdown.
- support dark mode.


#### Technology stack
- **Framework**: [React.js](https://reactjs.org) for build UI, and [Next.js](https://nextjs.org) for production.
- **State control**: [Apollo Client](https://www.apollographql.com/docs/react/)  with [GraphQL](https://graphql.org) for local state and api mocking.
 ([Why not use Redux or React local state?]())
- **Typescript**: for better developer experience.
- **Markdown editor**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **UI**: [styled-components](https://styled-components.com)

This project is bootstrapped with [`my-frontend-boilerplate`](https://github.com/TseHang/frontend-boilerplate).


## Usage

First, install node_modules and run the development server

```bash
yarn  # install dependencies
yarn dev # run the development server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


#### Other commands

Build:
```bash
yarn build
```

Run production:
```bash
yarn start
```



## Schedule & Task list
In real work scenerio, we usually use another application for task tracking and management, so I choose using [Notion](https://www.notion.so/product) here.
- [task list link](https://www.notion.so/mengtse/aeee76b7f9fc4d53af217610231d9bec?v=aa9a7efe74a643dcbe0e000dcad9253e)


## Time management
| Date | time(mins) | works |
| ---- | ---- | --- |
| 10/17 | 60 | scope definition / documentation / init project |


## Thinking behind

#### What is the project's scenerio in my mind?
In my imagination, the project is a real task assigned to a team on REAL WORK.

Therefore, if I am the project leader, the workflow should not be coding first, but starting from scoping definition, then writing documentation, then discussing GraphQL schema with frontend/backend, and finally coding.

Here is the flow:
1. scope definition
2. documentation
3. split to small tasks
3. discuss GraphQL scheme
4. coding
5. debug & test(If I have time.)
6. deploy

Here is the scope definition of this project:
1. Technology: React / Typescript / GraphQL
2. Complete the [specification](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201), and I want to add a funny feature, dark mode
3. We have backend, so maybe we need api mocking if backend is not ready.


#### Why not use Redux or React local state?
**For demo, I think React state and context is enough and suitable for small project.**

However if I imagine that the project is a real task on work, I will choose to use Redux or Apollo Client. Redux is a good state management library for complex application, and so does Apollo Client. The different is Apollo Client enables you to manage both local and remote data with GraphQL.

In most scenerio, we will have backend, which means data is from remote. I prefer using GraphQL to manage remote data since it lets frontend and backend works more closer. Moreover, Apollo Client can automatically combines both remote data and local data, caching and updating UI.

Therefore, I choose using Apollo Client.