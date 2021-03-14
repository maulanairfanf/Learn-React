const AdminValidation = (values) => {
  const errors = {};

  if (!values.username || values.username === "") {
    errors.username = "username harus diisi";
  }

  if (!values.email || values.email === "") {
    errors.email = "Email harus diisi";
  }

  if (!values.password || values.password === "") {
    errors.password = "Password harus diisi";
  } else if (values.password.length < 6) {
    errors.password = "password harus lebi dari 6";
  }
  return errors;
};

export default AdminValidation;
