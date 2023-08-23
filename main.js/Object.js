const mySymbol=Symbol("key1")

const JsUser=
{
         name:"akshat",
         age:23,
         [mySymbol]:"akshat Symbol",
         location:"patna",
         email:"akshatmishrapnbe@gmail.com",
         isLoggedIn:true,
         lastlogin:["monday","tuesday","wednesday","saturday"]
}

console.log(JsUser)

//we can treat a function as a variable in javascript
JsUser.greeting=function()
{
         console.log("hello jsuser");
}
console.log(JsUser.greeting())

