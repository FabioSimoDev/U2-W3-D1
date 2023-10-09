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
  //crea una nuova istanza della classe pet con gli input dell'utente.
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  displayPet(newPet);
};

const displayPet = function (pet) {
  //aggiunge il nuovo pet nella `ul` e controlla se il nuovo pet è uguale ad uno dei precedeti.
  const petList = document.getElementById("petList"); //ul
  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(listItem);

  const pets = document.getElementsByClassName("petListItem"); //ottiene tutti gli altri pet
  for (const existingPet of pets) {
    //è solo un modo più pratico di scrivere un classico ciclo for
    const existingOwner = existingPet.textContent.split(", ")[1].split(": ")[1]; //ottiene l'owner, suddividendo la stringa di ogni li
    if (pet.ownerName === existingOwner) {
      listItem.style.color = "red";
      existingPet.style.color = "red";
      console.log(true);
    } else {
      console.log(false);
    }
  }

  listItem.classList.add("petListItem"); //aggiunge la classe all'elemento nella lista
};
