import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;

public class RoomBookingBadTest {
  public static void main(String[] args) {
    String body = "{}";

    given()
      .header("Content-Type", "application/json")
      .body(body)
      .when()
      .post("https://automationintesting.online/booking")
      .then()
      .statusCode(201); // no actual validation of response
  }
}