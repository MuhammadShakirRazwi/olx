const storeUser = (user) => ({ type: "ADD_USER", payload: user });
const removeUser = () => ({ type: "ADD_USER" });

export { storeUser, removeUser };
