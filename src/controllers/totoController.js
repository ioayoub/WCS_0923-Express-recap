const createUser = (req, res) => {
  console.log("Path /post is OK");

  const { firstName, age } = req.body;

  res.status(200).json({
    firstName: firstName,
    age: age,
    message: `Hello ${firstName}`,
  });
};

const sayHelloToto = (req, res) => {
  const { name } = req.body;

  res.status(200).json({
    message: `Hello ${name}`,
  });
};

module.exports = { createUser, sayHelloToto };
