/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let dogs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _breed, _fur_color, _body) {
    const dog_NFT = {
        "name" : _name,
        "breed" : _breed,
        "fur_color" : _fur_color,
        "body" : _body
    }
    dogs.push(dog_NFT);
    console.log("minted : "+ _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nThe NFTs are : ");
    for(let i = 0; i<dogs.length ; i++){
        console.log("\nSerial_no :\t"+(i+1));
        console.log("Name :\t\t" + dogs[i].name);
        console.log("Breed :\t\t" + dogs[i].breed);
        console.log("Fur Color :\t" + dogs[i].fur_color);
        console.log("Body :\t\t" + dogs[i].body);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total dog NFTs :" + dogs.length);
}

// call your functions below this line
mintNFT("Cooper","Indie","Black","Lean");
mintNFT("Laddu","Labrador Retriever","Gold","Chubby");
mintNFT("Brandy","Beagle","White","Short");
listNFTs();
getTotalSupply();
