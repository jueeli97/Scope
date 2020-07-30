// SCOPE


// Let 
// variable with let keyword cannot be access outside the scope.

// console.log(intValue1); // intValue1 is not defined
{
//  console.log(intValue1); // Cannot access 'intValue1' before initialization   
 let intValue1 = 15 ; // local variable
 console.log(intValue1) ;  // 15 
}
//console.log(intValue1); // intValue1 is not defined


let strName1 = " abcd"; // declared on global level.
{
    console.log(strName1); // abcd

}
console.log(strName1); // abcd







// Var
// variable with let keyword can be access outside the scope.

// console.log(intValue2); // undefined
{
    //console.log(intValue2); // undefined

    var intValue2 = 20;
    console.log(intValue2);// 20
}
console.log(intValue2); // 20


var strName2 = "dec"; // declared on global level.
{
    console.log(strName2);//dec
}
console.log(strName2); // dec






// const

const alpha = 5;// declared on global level.
{
    console.log(alpha);//5
}
console.log(alpha);//5


//console.log(beta);// beta is not defined
{
    const beta = 10; // declared on local level.
    console.log(beta);//10
}
console.log(beta);//beta is not defined
