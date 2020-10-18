const obj = {
  name: 'test',
  content: '# Hello, *world*! \n num: ',
  createdAt: new Date().getTime(),
};

export default Array.from({ length: 100 }).map((_, idx) => ({
  id: String(idx + 1),
  name: obj.name + (idx + 1),
  content: obj.content + (idx + 1),
  createdAt: obj.content + (idx + 1),
}));
