function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function generateCreature(species) {
  const creatureData = {
    appearance: [
      "winged",
      "scaly",
      "fur-covered",
      "multi-headed",
      "transparent",
      "gigantic",
      "tiny",
    ],
    abilities: [
      "fire-breathing",
      "ice-controlling",
      "teleporting",
      "shape-shifting",
      "invisible",
      "super-strong",
      "mind-reading",
    ],
    origin: [
      "from the forests of Avalon",
      "hailing from Atlantis",
      "born in the icy mountains of the North",
      "emerging from the depths of the ocean",
      "descended from the heavens",
      "from a parallel dimension",
      "born from the molten core of a volcano",
    ],
  };
  const creatureAppearance =
    creatureData.appearance[
      generateRandomNumber(creatureData.appearance.length)
    ];
  const creatureAbility =
    creatureData.abilities[generateRandomNumber(creatureData.abilities.length)];
  const creatureOrigin =
    creatureData.origin[generateRandomNumber(creatureData.origin.length)];
  const creatureDescription = `A ${creatureAppearance}, ${creatureAbility} ${species} ${creatureOrigin}!`;

  return {
    species,
    appearance: creatureAppearance,
    ability: creatureAbility,
    origin: creatureOrigin,
    description: creatureDescription,
  };
}

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const speciesInput = document.getElementById("speciesInput").value.trim();
    const species = speciesInput !== "" ? speciesInput : "creature";

    const creature = generateCreature(species);
    document.getElementById("creature").textContent = creature.description;
  });
