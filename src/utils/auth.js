export const setUserData = (user)=>{
  const userData = JSON.stringify(user);
  localStorage.setItem("userData", userData);
}

export const  getUserData= () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    return JSON.parse(userData);
  } else {
    return null;
  }
}