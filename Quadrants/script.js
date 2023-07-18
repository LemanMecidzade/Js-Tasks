let x = prompt("x oxu üzrə dəyəri daxil edin: ");

let y = prompt("y oxu üzrə dəyəri daxil edin: ");

console.log("x : " + x);
console.log("y : " + y);

if(x>0 && y>0){
    console.log("1-ci bölgədə yerləşir")
}
else if(x<0 && y>0){
    console.log("2-ci bölgədə yerləşir")
}
else if(x<0 && y<0){
    console.log("3-cü bölgədə yerləşir")
}
else if(x>0 && y<0){
    console.log("4-cü bölgədə yerləşir");
}
else{
    console.log("Origin bölgəsində yerləşir");
}