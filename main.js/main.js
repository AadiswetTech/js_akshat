//phle ek arrays bnaege
// const users=[
//          {
//                   id:1,
//                   name:"akshat",
//                   isActive:true,
//                   age:23
//          },
//          {
//                   id:2,
//                   name:"neha",
//                   isActive:true,
//                   age:24
//          },
//          {
//                   id:7,
//                   name:"mukesh jha",
//                   isActive:false,
//                   age:25
//          },
//          {
//           id:2,
//           name:"anup",
//           isActive:true,
//           age:24
//          }

// ]
// const names=[];
// for(i=0;i<users.length;i++)
// {
//          names.push(users[i].name)

// }
// console.log(names)

// const names=[];
// users.forEach((user)=>
// {

//   if(user.isActive)
//   {
//     names.push(user.name)
//   }
 

// })
// console.log(names);

//the same thing can be done by map

// const names= users.map(user =>user.name);
// console.log(names);



// const names=users.filter((user)=>user.isActive).map((user)=>user.name)
// console.log(names);
// const names=users.filter((user)=>user.isActive).map((user)=>user.name)
// console.log(names)
// //using sort()

// users.sort((user1,user2)=> user1.age <user2.age ? -1 :1);  //or 1: -1 for descending order
// console.log(users);


// const names=users.filter((user)=>users.isActive).map((user)=>user.name);
// console.log(names);

// 
//
const coding=["java","node","python","react"]
const values=coding.forEach((item)=>
{
         console.log(item)
})
console.log(values);


//filter
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)
console.log(newNums)
