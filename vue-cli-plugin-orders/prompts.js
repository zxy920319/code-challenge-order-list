const choices = Array.from(new Array(4).keys()).map(num => ({
  name: num + 2 + "",
  value: num + 2
}));

module.exports = [
  {
    name: "orderNumber",
    message: "Please select the number of orders to display.",
    type: "list",
    choices,
    default: 5
  }
];
