const register = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Go to Sing In",
      });
    }, 2000);
  });
}

export default {
  register
}
