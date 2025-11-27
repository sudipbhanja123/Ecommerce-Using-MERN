export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("eng-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
