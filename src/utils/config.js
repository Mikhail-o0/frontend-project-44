const rounds = 3;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { rounds, getRandomNum };
