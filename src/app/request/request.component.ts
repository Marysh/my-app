import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  users: any[] = [];

  constructor() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = () => {
      this.users = JSON.parse(xhr.response);

    };
  }

  ngOnInit() {

  }

  showUsers(users) {
    // const parent = document.getElementById('usersWrapper');
    //
    // for (let i = 0; i < users.length; i++) {
    //
    //   const name = users[i].name;
    //   const phone = users[i].phone;
    //   const address = users[i].address.city;
    //
    //
    //   const userCard = document.createElement('div');
    //   userCard.classList.add('user-card');
    //   parent.append(userCard);
    //   userCard.innerHTML = name + ', ' + phone + ', ' + address;
    // }
  }
}

