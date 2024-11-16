export const searchAnimals = (animals, searchTerm) => {
  if (!animals || animals.length === 0) return [];
  if (!searchTerm) return animals;

  const termLower = searchTerm.toLowerCase();
  
  return animals.filter(animal => 
    animal.nome.toLowerCase().includes(termLower) ||
    animal.especie.toLowerCase().includes(termLower) ||
    animal.raca.toLowerCase().includes(termLower)
  );
}; 