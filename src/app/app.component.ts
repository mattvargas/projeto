import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoodleService} from "../providers/moodle/moodle";
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {BibliotecaPage} from "../pages/biblioteca/biblioteca";
import {MateriasPage} from "../pages/materias/materias";
import {_if} from "rxjs/observable/if";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
               public service: MoodleService) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Biblioteca', component: HomePage},
      {title: 'Login', component: LoginPage},
      {title: 'Área do Aluno', component: DashboardPage},
      {title: 'Matérias', component: MateriasPage},
    ]

    if (this.service.verificarToken()){
      this.nav.push(this.rootPage);
    }


  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
