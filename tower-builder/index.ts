export const towerBuilder = (nFloors: number): string[] => {
  const tower: string[] = [];

  // Generate total amount of stars in each row
  const amountOfStars: number[] = [];
  
  let stars = 1;
  for(let i = 0; i < nFloors; i++) {
    amountOfStars.push(stars);
    stars += 2;
  }

  for(let i = 0; i < amountOfStars.length; i++) {
    const stars = amountOfStars[i];

    // get the total number of characters in a string by getting the last row
    const totalChars = amountOfStars[amountOfStars.length - 1];    
    const spaces = Math.floor((totalChars - stars) / 2)
    const floor = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
    tower.push(floor);
  }
  
  return tower;
};

// Floor: 1, 2, 3, 4, 5, 6
// Stars: 1, 3, 5, 7, 9, 11