// generate a random number between given min and max numbers
const generateRandomNo = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate 6 random superheroes to display on landing page
export async function generateSixRandom() {
  const promises = [1, 2, 3, 4, 5, 6].map(async () => {
    const req = await fetch(
      `https://www.superheroapi.com/api.php/6079677895390798/${generateRandomNo(
        1,
        731,
      )}`,
    ).catch(respError => {
      console.error('Error:', respError);
    });
    return req.json();
  });
  const data = await Promise.all(promises);
  return data;
}

// search one superhero by name
export async function searchHero(superHeroName) {
  const req = await fetch(
    `https://superheroapi.com/api/6079677895390798/search/${superHeroName}`,
  )
    .then(resp => resp.json())
    .catch(respError => {
      console.error('Error:', respError);
    });
  const data = await Promise.resolve(req);
  return data;
}
