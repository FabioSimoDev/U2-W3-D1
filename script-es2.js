// classe che definisce PEt
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const addPet = function () {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  displayPet(newPet);
};

const displayPet = function (pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(listItem);

  const pets = document.getElementsByClassName("petListItem");
  for (const existingPet of pets) {
    const existingOwner = existingPet.textContent.split(", ")[1].split(": ")[1];
    if (pet.ownerName === existingOwner) {
      listItem.style.color = "red";
      existingPet.style.color = "red";
      console.log(true);
    } else {
      console.log(false);
    }
  }

  listItem.classList.add("petListItem");
};
