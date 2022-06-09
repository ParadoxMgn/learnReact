'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.filter(item => item.trim().length)
  .map(item => item.trim().charAt(0).toUpperCase() + item.trim().slice(1).toLowerCase());

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const { cash, react, react: [first], add } = data;

const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);

const lesson = calcCash(cash);

function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
  const sumTech = [...react, ...add, 'и другие'];

  console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое что изучим будет ${first}. Он очень похож на HTML!
Технологии которые мы изучим:
${sumTech} `);
}

makeBusiness('Артем', lesson, command, nameCourse);
