const logout = () => {
    localStorage.removeItem("token");  // Remove the JWT token
    window.location.href = "/auth/login";   // Redirect to login page
  };

export default logout;