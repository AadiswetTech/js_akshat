const users=[
         {
                  id:1,
                  name:"anup",
                  isActive:true,
                  age:23
         },
         {
                  id:2,
                  name:"akshat",
                  isActive:true,
                  age:23
         },
         {
                  id:4,
                  name:"shahbaz",
                  isActive:false,
                  age:28
         },
         {
                  id:5,
                  name:"kriti",
                  isActive:true,
                  age:25
         },

]
const isNameExists=(names,users)=>{
         let exist=false;
         for(let i=0;i<users.length;i++)
         {
                  if(users[i].name===names)
                  {
                           exist=true;
                  }
         }
         return exist;
}
