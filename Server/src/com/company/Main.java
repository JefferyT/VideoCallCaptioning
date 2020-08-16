package com.company;

import static spark.Spark.init;
import static spark.Spark.webSocket;

public class Main {
    public static void main(String[] args) {
        webSocket("/echo", Server.class);
        init();
    }
}
