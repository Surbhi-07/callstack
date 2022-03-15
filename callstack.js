function one(){
    console.log("hello!!");
    two();
    return;
}
function two(){
    console.log("heyyy!!");
    three();
    return;
}
function three(){
    console.log("hiii!!");
    four();
    return;
}
function four(){
    console.log("byee!!");
    return;
}
one();