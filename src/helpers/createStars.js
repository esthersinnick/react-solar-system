
export const createStars = (numberOfSimpleStars, numberOfSpecialStars) => {
  const totalStars = numberOfSimpleStars + numberOfSpecialStars;
  const stars = []
  let i = 0;

  while (i < totalStars) {
    const newStar = {
      yPosition: Math.floor(Math.random() * 100),
      xPosition: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 3 + 3),
    }
    stars.push(newStar)
    i++
  }
  return stars;
}