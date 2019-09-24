export const playCardFlipSound = () => {
  const cardFlipEl = document.getElementById("cardFlip");
  if (cardFlipEl) cardFlipEl.play();
};

export const playCardSwapSound = () => {
  const cardSwapEl = document.getElementById("cardSwap");
  if (cardSwapEl) cardSwapEl.play();
};
