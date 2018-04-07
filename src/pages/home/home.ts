import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListPage} from "../list/list";
import {LoginPage} from "../login/login";
import{MoodleService} from "../../providers/moodle/moodle";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MoodleService]
})
export class HomePage {


  buscaLivro: any;
  buscaAutor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  irLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  buscarLivros() {
    this.navCtrl.push(ListPage, {
      buscarLivro: this.buscaLivro
    });
  }

   buscarAutor(){
      this.navCtrl.push(ListPage, {
        buscarAutor: this.buscarAutor

      });

    }
}
