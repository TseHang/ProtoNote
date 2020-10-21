# ProtoNote

> **DEMO PROJECT! ([spec](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201))**

Make your contents safe. A secure notes editor.

- support markdown.
- support dark mode.

#### Technology stack

- **Framework**: [React.js](https://reactjs.org) for build UI, and [Next.js](https://nextjs.org) for production.
- **State control**: [Apollo Client](https://www.apollographql.com/docs/react/) with [GraphQL](https://graphql.org) for local state and api mocking.
- **Typescript**: for better developer experience.
- **Markdown editor**: [react-markdown](https://github.com/remarkjs/react-markdown)
- **UI**: [styled-components](https://styled-components.com)

This project is bootstrapped with [my-frontend-boilerplate](https://github.com/TseHang/frontend-boilerplate).

#### Some thoughts

1. [What is the project's scenerio in my mind?](#what-is-the-projects-scenerio-in-my-mind)
2. [What is my workflow?](#what-is-my-workflow)
3. [Why not use Redux or React local state?](#why-not-use-redux-or-react-local-state)
4. [Why use Api mocking?](#why-use-api-mocking)
5. [Something about new Apollo v3 api Reactive variables](#something-about-new-apollo-v3-api-reactive-variables)
6. [Something about flash screen issue?](#something-about-flash-screen-issue)
7. [Conclusion: after finishing all tasks](#conclusion-after-finishing-all-tasks)

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

In real work scenerio, we usually use another application for task tracking and management. I use [Notion](https://www.notion.so/product) for task management here.

**[Here is my task list link](https://www.notion.so/mengtse/aeee76b7f9fc4d53af217610231d9bec?v=aa9a7efe74a643dcbe0e000dcad9253e), you can see how I split into small tasks and how I manage them.**

![preview](./resources/taskList.png)
(Add number at the beginning of name is for sorting and sequence. Usually we sort by due date or priority.)

## Time management

| Date  | time(mins) | works                                                                                                                                                                                                                   |
| ----- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10/17 | 60         | scope definition / documentation / init project                                                                                                                                                                         |
| 10/17 | 55         | split small tasks / [improve README](https://github.com/TseHang/PtotoNote/pull/1)                                                                                                                                       |
| 10/18 | 47         | [GraphQL scheme](https://www.notion.so/mengtse/2-GraphQL-Scheme-1b0a231b8daa47a898864dc48190447e) / [init](https://github.com/TseHang/PtotoNote/pull/2)                                                                 |
| 10/18 | 110        | [layout UI](https://github.com/TseHang/PtotoNote/pull/3)                                                                                                                                                                |
| 10/20 | 90         | [api mocking](https://github.com/TseHang/PtotoNote/pull/4)                                                                                                                                                              |
| 10/20 | 120        | [view mode](https://github.com/TseHang/PtotoNote/pull/5)                                                                                                                                                                |
| 10/21 | 100        | [edit mode](https://github.com/TseHang/PtotoNote/pull/6)                                                                                                                                                                |
| 10/21 | 90         | [deploy](https://github.com/TseHang/PtotoNote/commit/5f08d54e81f19c70c8c595267f64e8edc2e5efb0) / [Dark mode](https://github.com/TseHang/PtotoNote/pull/10) / [Simple RWD](https://github.com/TseHang/PtotoNote/pull/11) |

## Futhermore...

#### What is the project's scenerio in my mind?

In my imagination, the project is a real task assigned to a team on REAL WORK.

Therefore, if I am the project leader, the workflow should not be coding first, but starting from scoping definition, then writing documentation, then discussing GraphQL schema with frontend/backend, and finally coding.

Here is the flow:

1. scope definition
2. documentation
3. split to small tasks
4. discuss GraphQL scheme
5. coding
6. debug & test(If I have time.)
7. deploy

Here is the scope definition of this project:

1. Technology: React / Typescript / GraphQL
2. Complete the [specification](https://gist.github.com/mmso/9097e36918084fa8ab3b0bb823327201), and I want to add a funny feature, dark mode
3. We have backend, so maybe we need api mocking if backend is not ready.

#### What is my workflow?

In this project, I plan to do:

1. Write scope definition, some thoughts and thinking process in README.
2. Using Notion for [tasks management](https://www.notion.so/mengtse/aeee76b7f9fc4d53af217610231d9bec?v=aa9a7efe74a643dcbe0e000dcad9253e), and recording problems I encountered and solution I found in each task.
3. Imaging backend exists, writing GraphQL scheme.
4. Open Pull Request on Github for each task.
5. Open issues on Github, adding it into my task list at the same time.
6. Deploy

Here is my real work experience:

Before starting, I like to write some thoughts or scope definition first, it is good to help me thinking and entering the situation quickly.

In task management, I prefer using an application like Jira, Asana and Notion to focus on **each task**, including development tasks, issue tasks, improvement tasks and test tasks.

In negotiation, if it is about whole project, which can be discussed in our team communication application, like Slack. If it is about task, just discuss under each task in our task management application.

In development, open Pull Request for each task or task's sub task. Must one of reviewers approved and CI test success, the PR can be merged into master.

#### Why not use Redux or React local state?

**For demo, I think React Context and state is enough and suitable for small project.**

However if the project is a real task on work, I will choose to use Redux or Apollo Client. Redux is a good state management library for complex application, and so does Apollo Client. The difference is Apollo Client enables you to manage both local and remote data with GraphQL.

In most scenerio, we have backend, which means data is from remote. I prefer using GraphQL to manage remote data since it lets frontend and backend works more closer. Moreover, Apollo Client can automatically combines both remote data and local data, caching and updating UI.

Therefore, I choose using Apollo Client.

#### Why use Api mocking?

As before saying, it is is a real task assigned to a team on REAL WORK.

Api mocking is important on frontend because backend is not always ready before us.

If we have api mocking, we can really simulate what will happen on frontend, it is a little different from local-state-only application.

Moreover, api mocking reduce the time we connect real backend api, improving the whole application development time.

Another thing is I want to show that "how I work and what I do on work" as much as possible. So I choose to use Api mocking for simulating remote data, and showing how I solved the problems.

#### Something about new Apollo v3 api Reactive variables.

I think Reactive Variables is just like React Context. The different thing is Reactive Variables is controlled by Apollo and storing outside.

I use Reactive Variables instead of React Context because I prefer to make project more consistent, which means use apollo system as much as possible.

#### Something about flash screen issue?

- [Task description here](https://www.notion.so/mengtse/Sometimes-flash-screen-when-click-another-note-0dccfaa8d55f40d9aa63856460153173)

As description on discussion, it performs because remote data returning too fast.

I know we have some ways to improve and avoid, but it might not happen when backend really ready.

Although I can extend waiting time on worker response for simulating and adjust UI for controlling loading, I think it is not the most important thing in this DEMO project.

(i will improve it if I have more time, but I choose to explain here because the time limitation in my mind is very close.)

#### Conclusion: after finishing all tasks

Here is my conclusion, "Thanks you all, and giving me a good test."

I like this demo project because

1. Specification is very clear.
2. A suitable difficulty(middle).
3. Having a good space for letting interviewers to perform themselves.(Styling? Some new and funny features?...)

I know frontend knowledge is huge and I can not perform everything very well. So I need to choose in a limited time.
(I give myself a time limitation about 2 days work load, which means 10 ~ 16 hours.)

The important thing I focused is simulating like a REAL WORK. It means I need to think like I have a team, and record like teamwork, work like having reviewers.

Here is my work:

1. Styling & Dark Mode
2. Api mocking with Apollo GraphQL. We can directly connect real backend by replacing endpoint.
3. Deploy on https://ptoto-note.tsehang.vercel.app
4. Complete documents: [Task List](https://www.notion.so/mengtse/aeee76b7f9fc4d53af217610231d9bec?v=aa9a7efe74a643dcbe0e000dcad9253e)
5. [Independent page routing](https://ptoto-note.tsehang.vercel.app/?noteId=f7d398a9-8e66-4965-a1a2-1448b4c6f058)

Finally,thanks for your reading.
