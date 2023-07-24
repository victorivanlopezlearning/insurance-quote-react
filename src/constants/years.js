const yearMax = new Date().getFullYear();

export const years = Array.from(
  new Array(10),
  (value, index) => yearMax - index
);