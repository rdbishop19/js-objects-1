/* 
Lightning Exercise: Given the object below, output each of the values 
to the console using dot notation.
 */
const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

/* // OLD WAY
let wardrobeContents = ""

for (let i = 0; i < wardrobe.contents.length; i++) {
  // wardrobeContents = wardrobeContents + `${wardrobe.contents[i]} `
  wardrobeContents += `${wardrobe.contents[i]} `
} */

// NEW WAY -- Added function to print any array in a cleaner format
/* This allows any array to be input using the print function, enabling reusability */
function printArray(array){
  let arrayContents = "";
  for (let i = 0; i < array.length; i++){
    if (i < (array.length-1)){
      arrayContents += `${array[i]}, `;
    }
    else {
      arrayContents += `and ${array[i]}`;
    }
  }
  return arrayContents
}

const wardrobeDesc = `
  I own a wardrobe made by ${wardrobe.manufacturer} and its dimensions are ${wardrobe.height} x ${wardrobe.width} x ${wardrobe.depth} (h x w x d). My wardrobe contains ${printArray(wardrobe.contents)}.
`
console.log(wardrobeDesc)
