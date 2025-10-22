export const taskValidation = {
  title: {
    isLength: {
      options: {
        min: 3,
        max: 32,
      },
      errorMessage: "Title must be at least 3 character and max of 32!",
    },
    notEmpty: {
      errorMessage: "Title can not be empty!",
    },
  },
  description: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Description must be at least 5 character and max of 32!",
    },
    notEmpty: {
      errorMessage: "Description can not be empty!",
    },
  },
  status: {
    notEmpty: {
      errorMessage: "Status can not be empty!",
    },
  },
};

export const taskUpdateValidation = {
  title: {
    isLength: {
      options: {
        min: 3,
        max: 32,
      },
      errorMessage: "Title must be at least 3 character and max of 32!",
    },
  },
  description: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Description must be at least 5 character and max of 32!",
    },
  },
  status: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Status must be at least 5 character and max of 32!",
    },
  },
};
