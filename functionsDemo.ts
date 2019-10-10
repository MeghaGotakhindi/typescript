function display() {
    console.log("Hello TypeScript!");

}
function Sum(x: number,y:number): number {
  return x+y;
    
}
let greeting=function(){
console.log("Hello TypeScript function!");
};
display();
var s=Sum(2,3);
console.log("Addition of numbers is:"+s);
greeting();