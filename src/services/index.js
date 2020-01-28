import axios from "axios";

const ENDPOINT = "https://api.myjson.com/bins";

const handleError = err => {
  // eslint-disable-next-line no-console
  console.warn(err);
  return false;
};

export async function GetUserInfo() {
  try {
    const res = await axios.get(ENDPOINT + "/pdefl");
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

export async function GetLastOrders() {
  try {
    const res = await axios.get(ENDPOINT + "/19f9bd");
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}

export async function GetOrderInfo() {
  try {
    const res = await axios.get(ENDPOINT + "/o1sp5");
    return res.data;
  } catch (err) {
    return handleError(err);
  }
}
