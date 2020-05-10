import { Component } from "@angular/core";

import RFB from "../../node_modules/@novnc/novnc/core/rfb.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "vnc-client";

  public rfb: RFB;

  startClient() {
    console.log("Starting !!!");

    // Read parameters specified in the URL query string
    // By default, use the host and port of server that served this file
    const host = window.location.hostname;
    const port = "6080";
    const password = "foobar"; // password of your vnc server
    const path = "websockify";
    // Build the websocket URL used to connect
    let url = "ws";

    if (window.location.protocol === "https:") {
      url = "wss";
    } else {
      url = "ws";
    }

    url += "://" + host;
    if (port) {
      url += ":" + port;
    }
    url += "/" + path;

    console.log("URL: ", url);

    // Creating a new RFB object will start a new connection
    this.rfb = new RFB(document.getElementById("screen"), url, {
      credentials: { password: password },
    });
  }
}
