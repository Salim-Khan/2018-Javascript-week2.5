var beers =99;
function printVerse(num){
	var name =' bottles';
	if(num===1) {name= 'bottle;'}
console.log(num+''+name+"bottles of beer on the wall");
		console.log(num+''+name+"bottles of beer");
		console.log("You take one down, You pass it around.");
		num--;
		console.log(num+'Bottles of beers on the wall');	
		return num;
}
// Repeat the section 99 times
while(beers>0){
	//if(beers===1) {
		//console.log(beers+"bottle of beer on the wall");
		//console.log(beers+"bottle of beer");
		//console.log("You take one down, you pass it around.");
		//beers--;
		//console.log("No more bottles of beer on the wall.\n");
		//console.log(beers+"bottle of beer on the wall");
	//}else{
		beers = printVerse(beers);
		//beers= beers-1;
	}