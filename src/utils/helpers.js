export const getUserAvatar = (userName) => {
  const userAvatar = userName.trim().split(" ");
  const firstInitial = userAvatar[0]?.[0] || "";
  const secondInitial = userAvatar[1]?.[0] || "";
  return [firstInitial, secondInitial];
};
