const json = `
{
 "list": [
  {"name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {"name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const obj = JSON.parse(json);
const list = obj.list.map(item => ({
  name: item.name,
  age: Number(item.age),
  prof: item.prof
}));
console.log({ list });
