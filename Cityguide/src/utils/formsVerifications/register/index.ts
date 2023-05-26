import { UserFormValues } from "../../../types/forms";
import { isValidFormat } from "../../utils";

export const validateUserForm = (values: UserFormValues) => {
  const errors: Partial<UserFormValues> = {};
  if (!values.username) {
    errors.username = 'Le nom est requis';
  }

  if (!values.email) {
    errors.email = "L'email est requis";
  } else if (!isValidFormat(values.email, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    errors.email = "L'email est dans un format incorrect";
  }

  if (!values.password) {
    errors.password = 'Le mot de passe est requis';
  } else if (!isValidFormat(values.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/)) {
    errors.password = "Le mot de passe doit comporter au moins 8 caractères, dont 1 majuscule, 1 minuscule, 1 chiffre et un caractère spécial";
  }

  return errors;
};