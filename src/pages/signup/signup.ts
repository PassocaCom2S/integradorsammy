import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailPage } from '../email/email';
import { LoginPage } from '../login/login';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  //Variavel que será o modelo para o User.
  model: User;

  //Grupo para inputs presentes na pagina.
  private cadastro: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public userProvider: UserProvider,
    private toastCtrl: ToastController) {

    this.cadastro = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      cpf: ['', Validators.compose([Validators.maxLength(11), Validators.required])],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      bloodType: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      password: ['', Validators.required]
    });
  }

  createUser() {

    // console.log(this.cadastro.value.name);
    // console.log(this.model['name']);
    var data = {
      'user': {
        'name': this.cadastro.value.name,
        'cpf': this.cadastro.value.cpf,
        'gender': this.cadastro.value.gender,
        'birthday': this.cadastro.value.birthday,
        'bloodType': this.cadastro.value.bloodType,
        'email': this.cadastro.value.email,
        'password': this.cadastro.value.password
      }
    };
    this.userProvider.addUser(data).then((result: any) => {
      this.toastCtrl.create({ message: 'Contato criado com sucesso! Entre no sistema com seus dados, email e senha.', duration: 5000 }).present();
    }).catch((error: any) => {
      this.toastCtrl.create({ message: 'Falha ao criar contato: ' + error.error, duration: 5000 }).present();
      console.log(error);
    })
  }

  dadosUsuario() {
    console.log(this.cadastro.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  abrirEmail() {
    this.navCtrl.push(EmailPage);
  }
  abrirLogin() {
    this.navCtrl.push(LoginPage);
  }
}

export class User {
  name: string;
  cpf: string;
  gender: string;
  birthday: Date;
  bloodType: string;
  email: string;
  password: string;
}
