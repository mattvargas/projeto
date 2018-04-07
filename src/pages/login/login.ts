import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../list/list";
import {HttpClient} from "@angular/common/http";
import {MoodleService} from "../../providers/moodle/moodle";
import {DashboardPage} from "../dashboard/dashboard";
import {HomePage} from "../home/home";

/*
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [MoodleService],

})
export class LoginPage {

    usuario:any
    senha : any


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: MoodleService, public http : HttpClient) {

  }
  logarApi( ){
    this.service.executaLogin(this.usuario,this.senha).subscribe(data=>this.service.salvaToken(JSON.stringify(data)));
    }

  voltarPage(){
    this.navCtrl.pop();
  }


}






