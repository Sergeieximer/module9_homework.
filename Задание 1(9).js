const xml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');

const list = Array.from(xmlDoc.querySelectorAll('student')).map(student => {
  const name = student.querySelector('name');
  const first = name.querySelector('first').textContent;
  const second = name.querySelector('second').textContent;
  const age = Number(student.querySelector('age').textContent);
  const prof = student.querySelector('prof').textContent;
  const lang = name.getAttribute('lang');
  return { name: `${first} ${second}`, age, prof, lang };
});

console.log({ list });
