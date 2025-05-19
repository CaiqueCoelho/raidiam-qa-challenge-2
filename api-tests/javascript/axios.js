const axios = require('axios');

async function main() {
  const email = "testuser@testuser.com";
  const password = "vZGvX79j43JGK#@";

  const loginPayload = {
    email: email,
    password: password,
  };

  const resp = await axios.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    loginPayload,
    { headers: { "Content-Type": "application/json" } }
  );

  const cartPayload = {
    prodId: "abc123",
    qty: 1,
  };

  const resp2 = await axios.post(
    "https://rahulshettyacademy.com/api/ecom/user/",
    cartPayload,
    { headers: { "Content-Type": "application/json" } }
  );

  const resp3 = await axios.get(
    "https://rahulshettyacademy.com/api/ecom/user"
  );
}

main();
