export const validate = (data, rules = {}) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = data[field];
    const fieldRules = rules[field];

    // ------------------ REQUIRED ------------------
    if (fieldRules.required && !value?.toString().trim()) {
      errors[field] = fieldRules.message || `${field} is required`;
      return;
    }

    // ------------------ MIN LENGTH ------------------
    if (fieldRules.minLength && value?.length < fieldRules.minLength) {
      errors[field] =
        fieldRules.message ||
        `${field} must be at least ${fieldRules.minLength} characters`;
      return;
    }

    // ------------------ PATTERN (EMAIL, PHONE etc.) ------------------
    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] =
        fieldRules.message || `Invalid ${field}`;
      return;
    }
  });

  return errors;
};