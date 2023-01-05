const data = [
    {
        name:"coffee-bean",
        order:true,
        items:['americano','milk','green-tea']
    },
    {
        name:'starbucks',
        order:false,
    },
    {
        name:"coffee-king",
        order:true,
        items:['americano','latte']
    },
]

// Tagged template literals : 템플릿을 함수로 처리한 다음에 결과값을 반환해서 사용
function fn(tags/*문자열 배열 */, name/* 문자열로 되어있는 첫번째(name) */, items/* 두번째 (items)*/){
    if(typeof items === 'undefined') {
        items = "<span style='color:red'>주문가능한 상품이 없습니다</span>";
    }

     /* welcome + value.name + 주문가능항목 + value.items */
    return(tags[0] + name + tags[1] + items);
}

data.forEach((value) => {
    let template = fn`<h1>welcome ${value.name}</h1>
<h2>주문가능항목</h2>
<div>${value.items}</div>`;
    document.querySelector('#mes').innerHTML += template;
    console.log(template);
});

//////////////////////////

// Arrow function
setTimeout(() => {
  console.log("settimeout arrow");
}, 1000);

// 1
// const newArr = [1,2,3,4,5].map(function(value){
//     return value * 2;
// });
// console.log(newArr); /* 2,4,6,8,10 */

// 2
// const newArr = [1,2,3,4,5].map((item) => {
//     return item * 2
// });
// console.log(newArr); /* 2,4,6,8,10 */

// 3
const newArr = [1,2,3,4,5].map((item)=> item * 2);
console.log("값", newArr); /* 2,4,6,8,10 */

//////////////////////////

// default parameters
function sum(value, size={value:3}){
    return value * size.value;
}
console.log(sum(3, {value:4})); /* 12 */
console.log(sum(3, )); /* 9 */

//////////////////////////

// rest parameters :
// 가변적 배열을 다룰때 ...argArray (진짜 배열로 만들어준다)
function checkNum(...argArray){
    console.log(toString.call(argArray));
}
checkNum();

//////////////////////////

// class를 통한 객체 생성
class Health {
    constructor(name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }
    getHealth(){
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health("beomjun","PM 10:00");
console.log(myHealth);

//////////////////////////

// object assign로 객체생성
const healthObj = {
  getHealth: function () {},
};

const mySports = Object.assign(Object.create(healthObj), {
  name: "beomjun",
  lastTime: "10:00",
});

console.log(mySports);
