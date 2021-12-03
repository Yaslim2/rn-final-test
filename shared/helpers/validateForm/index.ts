import handleErrors from "../handleErrors";
import * as EmailValidator from "email-validator";
const validateForm = (form: {
  isSignUp?: boolean;
  isResetPassword?: boolean;
  isSignIn?: boolean;
  name?: string;
  email?: string;
  password?: string;
}) => {
  const titleEmptyForm = "Error sending form";
  const textEmptyForm = "Please fill in all fields on the form and try again.";
  if (form.isSignUp) {
    let error = handleErrors(
      titleEmptyForm,
      textEmptyForm,
      form.email!.trim() === "",
      form.password!.trim() === "",
      form.name!.trim() === ""
    );

    if (error) return false;

    if (!EmailValidator.validate(form.email!)) {
      error = handleErrors(
        "Credentials error",
        "Please enter a valid email and try again.",
        true
      );
      if (error) return false;
    }

    if (form.password!.length < 5) {
      error = handleErrors(
        "Credentials error",
        "Please enter a password with at least 5 characters.",
        true
      );
      if (error) return false;
    }
  }

  if (form.isResetPassword) {
    const error = handleErrors(
      titleEmptyForm,
      textEmptyForm,
      form.email!.trim() === ""
    );
    if (error) return false;
  }

  if (form.isSignIn) {
    const error = handleErrors(
      titleEmptyForm,
      textEmptyForm,
      form.email!.trim() === "",
      form.password!.trim() === ""
    );
    if (error) return false;
  }

  return true;
};

export default validateForm;
