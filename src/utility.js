function validate(field, label, setStatus) {
  if (!field) {
    setStatus("Error: " + label);
    setTimeout(() => setStatus(""), 3000);
    return false;
  } else if (label=="password" && field.length < 8) {
    setStatus("Error: Password must be at least 8 characters");
    setTimeout(() => setStatus(""), 3000);
    return false;
  } else {
    return true;
  }
}

export { validate };
