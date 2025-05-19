const request = require('supertest');

async function main() {
  const email = "testuser@testuser.com";
  const password = "vZGvX79j43JGK#@";

  const loginPayload = {
    email: email,
    password: password,
  };

  const resp = await request("https://rahulshettyacademy.com")
    .post("/api/ecom/auth/login")
    .set("Content-Type", "application/json")
    .send(loginPayload);

  const cartPayload = {
    prodId: "abc123",
    qty: 1,
  };

  const resp2 = await request("https://rahulshettyacademy.com")
    .post("/api/ecom/user/")
    .set("Content-Type", "application/json")
    .send(cartPayload);

  // 3. Get cart
  const resp3 = await request("https://rahulshettyacademy.com")
    .get("/api/ecom/user");
}

main();
