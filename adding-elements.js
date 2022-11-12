const a =[];
a.push(1);
console.log(a);

const b =[];
b.push(1,2,3);
console.log(b);

const c =[true, false];
c.unshift(null);
console.log(c);

const d =[[], []];
d[1].push(true, true, true);
console.log(d);

const e =['html','css'];
e.unshift('git');
e.push('javascript')
console.log(e);

e[4] = 'figma'
console.log(e);



// 2.2
let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push("react");

//  B) выведи весь массив в консоль
console.log(stack);

// C) добавь в конец массива значение "redux" (используй способ с [])
stack[5] = "redux";

// D) выведи весь массив в консоль
console.log(stack);

// E) добавь в начало массива значение "git"
stack.unshift("git");

// F) выведи весь массив в консоль
console.log(stack);

/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`сначала мы изучим ${stack[0]}, а в конце изучим ${stack[6]}`);

// H) добавь в конец массива сразу два элемента: "mysql" и "nosql"
stack.push("mysql","nosql");
console.log(stack)

// I) выведи в консоль длину массива
console.log(stack.length);