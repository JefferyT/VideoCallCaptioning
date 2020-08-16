package com.company;

import spark.Spark;

import static spark.Spark.init;
import static spark.Spark.webSocket;

public class Main {
    public static void main(String[] args) {
        webSocket("/call", Server.class);
        Spark.get("/", ((request, response) -> {
            return "Hello World!";
        }));
        init();
    }
}
