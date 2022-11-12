// • A) пустой массив;
const a =[];
console.log(a[0]);

// • B) массив с тремя числовыми элементами;
const b =[1,2,3];
console.log(b[0] + b[2]);

// • C) массив с тремя строковыми элементами;
const c =['1','2','3'];
console.log(c[0]+c[1]+c[2]);

// • D) массив с тремя строковыми и с тремя числовыми элементами;
const d =[1,2,3,'1','2','3'];
console.log(`первый элимент: ${d[0]} последний элимент: ${d[5]}`);

// • E) массив с именами всех твоих одногруппников;
const e =['Adam', 'Ali', 'Turpal', 'Muhammad', 'Magomed', 'Muhammad'];
console.log(e[5], b[2]);

//• F) массив, в котором есть число, строка, null, undefined, true и false;
const f =[1,'1', null, undefined, true, false];
console.log(f[0]);
console.log(f[1]);
console.log(f[2]);
console.log(f[3]);
console.log(f[4]);
console.log(f[5]);

// • G) массив, внутри которого три пустых массива;
const g =[[],[],[]];
console.log(g.length);

//• H) массив, внутри которого два массива, а внутри каждого вложенного массива любые три числа.
const h =[[1,2,3],[4,5,6]];
console.log((h[0])[1] *(h[1])[2]);



