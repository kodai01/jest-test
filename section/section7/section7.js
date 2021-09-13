const character = {
  id: 1,
  name: "スライム",
  hp: 50,
};

const addMP = (value) => {
  return { ...character, mp: value };
};

const updateHP = () => {
  const updatedCharacter = (character.hp -= 15);
  return { ...character, hp: updatedCharacter };
};

const LookUpName = () => {
  return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
