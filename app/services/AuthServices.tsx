export const authService = {
  authLogin: async () => {
    await fetch("http://localhost:8080/auth/login");
  },
};
