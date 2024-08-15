// var age = 20;
// var age = 30;
// var age = "My age";
// age = 'age';
// console.log(age);


// var age = 25;

// if(true)
//     {
//         console.log(age);
//     }


function scope_check()
{
    var age = 35;
    console.log(age);
}

scope_check();

   console.log(age);   // Error as var scope is limited inside function