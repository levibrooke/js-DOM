/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var replaceNameOne = document.getElementById("name1");

replaceNameOne.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following:

Project Manager*/

var replacePositionTwo = document.getElementById("position2");

replacePositionTwo.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var replaceAliasThree = document.getElementById("alias3");

replaceAliasThree.innerHTML = "Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var replaceTheBio = document.getElementsByClassName("profile");

replaceTheBio[0].innerHTML = "Lorizzle ipsum dolor izzle amizzle, sheezy adipiscing elizzle. Shit sapizzle velizzle, izzle volutpizzle, suscipit daahng dawg, shiz vel, arcu. Boofron eget tortizzle. Sizzle erizzle. Pot bling bling dolizzle dapibus fo tempus fizzle.";



/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

replaceTheBio[2].innerHTML = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.";

/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var createNorrisName = document.createElement("div");

// console.log(createNorrisName);

createNorrisName.id = "name7";
createNorrisName.innerHTML = "Chuck Norris";
// console.log(createNorrisName);
document.getElementById("nameBox").appendChild(createNorrisName);


/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var createGrimmaceAlias = document.createElement("div");

createGrimmaceAlias.id = "alias8";
createGrimmaceAlias.innerHTML = "The Purple Monster";

document.getElementById("aliasBox").appendChild(createGrimmaceAlias);



//Final Boss
/*8. Create your own profile.*/

var getBlock = document.getElementsByClassName("block3");
getBlock[2].id = "my-profile"; // Adds id to this block3

var oldImage = getBlock[2].childNodes[0]; // This variable finds the index 0 child of getBlock
var replaceImage = document.createElement("img"); // This variable creates img element
replaceImage.setAttribute("src", "https://secure.gravatar.com/avatar/44f90f924f2f07f0d7c6c351aa5ca155?s=150"); // Sets attributes for new img
getBlock[2].replaceChild(replaceImage, oldImage); // Replace old img w/ new img

var createName = document.createElement("div");
createName.id = "name9";
createName.innerHTML = "Levi Porter";
document.getElementById("my-profile").appendChild(createName);

var createPosition = document.createElement("div");
createPosition.id = "position9";
createPosition.innerHTML = "Badass";
document.getElementById("my-profile").appendChild(createPosition);

var createAlias = document.createElement("div");
createAlias.id = "alias9";
var aliasLink = document.createElement("a");
aliasLink.setAttribute("href", "https://github.com/levibrooke");
aliasLink.setAttribute("target", "_blank");
aliasLink.innerHTML = "@levibrooke";
document.getElementById("my-profile").appendChild(createAlias);
document.getElementById("alias9").appendChild(aliasLink);


var createBio = document.createElement("div");
createBio.id = "bio9";
createBio.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
document.getElementById("my-profile").appendChild(createBio);
