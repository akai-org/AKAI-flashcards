const handleFormError = (name, errors) => {
  switch (errors[name]?.type) {
    case 'required':
      return `field is required`;
    case 'minLength':
      return `the minimum number of characters is 7`;
    case 'maxLength':
      return `the maximum number of characters is 20`;
    case 'validate':
      return `the passwords do not match`;
    case 'pattern':
      return `no white spaces`;
    default:
      return '';
  }
};

export default handleFormError;
