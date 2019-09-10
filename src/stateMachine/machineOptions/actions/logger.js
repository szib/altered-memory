const isInProduction = () => {
  return process.env.NODE_ENV === "production";
};

export const logContext = context => {
  if (isInProduction) return;
  console.group("context");
  console.log(context);
  console.groupEnd();
};

export const logCards = context => {
  if (isInProduction) return;
  const { cards } = context;
  console.table(cards);
};
