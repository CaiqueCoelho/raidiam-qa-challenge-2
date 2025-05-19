package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    email := "testuser@testuser.com"
    password := "vZGvX79j43JGK#@"

    loginPayload := map[string]string{
        "email":    email,
        "password": password,
    }
    loginBody, _ := json.Marshal(loginPayload)
    resp, err := http.Post("https://rahulshettyacademy.com/api/ecom/auth/login", "application/json", bytes.NewBuffer(loginBody))
    if err != nil {
        fmt.Println("login err:", err)
    }
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)


    cartPayload := map[string]interface{}{
        "prodId": "abc123",
        "qty":    1,
    }
    cartBody, _ := json.Marshal(cartPayload)
    req2, _ := http.NewRequest("POST", "https://rahulshettyacademy.com/api/ecom/user/", bytes.NewBuffer(cartBody))
    req2.Header.Set("Content-Type", "application/json")
    resp2, _ := http.DefaultClient.Do(req2)

    req3, _ := http.NewRequest("GET", "https://rahulshettyacademy.com/api/ecom/user", nil)
    resp3, _ := http.DefaultClient.Do(req3)
    cartRespBody, _ := ioutil.ReadAll(resp3.Body)
}
