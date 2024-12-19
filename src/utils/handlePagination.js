export const numbersPage = (location, RESIDENTS_PERPAGE, currentRange) => {
  const quantityPages = Math.ceil(
    location?.residents.length / RESIDENTS_PERPAGE
  );

  const start = (currentRange - 1) * 5 + 1;
  const end = Math.min(start + 4, quantityPages);

  const arrayPages = [];
  for (let i = start; i <= end; i++) {
    arrayPages.push(i);
  }

  return arrayPages;
};
