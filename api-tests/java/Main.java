import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String email = "testuser@testuser.com";
        String password = "vZGvX79j43JGK#@";

        Map<String, String> loginPayload = new HashMap<>();
        loginPayload.put("email", email);
        loginPayload.put("password", password);

        Response resp = RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(loginPayload)
                .post("https://rahulshettyacademy.com/api/ecom/auth/login");


        Map<String, Object> cartPayload = new HashMap<>();
        cartPayload.put("prodId", "abc123");
        cartPayload.put("qty", 1);

        Response resp2 = RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(cartPayload)
                .post("https://rahulshettyacademy.com/api/ecom/user/");

        Response resp3 = RestAssured
                .given()
                .get("https://rahulshettyacademy.com/api/ecom/user");
    }
}
