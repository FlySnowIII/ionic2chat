import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from "socket.io-client";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chatBox:string;
  msglist:string[];
  myicon:string;

  socketHost:string;

  constructor(public navCtrl: NavController) {

    this.chatBox = "";
    this.msglist = [];
    this.myicon = "https://www.azest.co.jp/img/index/logo.png";

    this.socketHost = "http://192.168.123.193:3000"
    var socket = io(this.socketHost);
    socket.on("azesttalk",(data:any)=>this.msglist.push(data));


  }

  sendMsg(){
    //this.msglist.push(this.chatBox);

    this.socketHost = "http://192.168.123.193:3000"
    var socket = io(this.socketHost);
    socket.emit("azesttalk",this.chatBox);
    this.chatBox = "";
  }

  setText(text)
  {
    console.log(text);
  }

}
