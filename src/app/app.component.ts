import {Component} from "@angular/core";
//1
// @Component({
//     selector:"my-app",
//     template:'<label>Введите имя:</label>' +
//         '<input [(ngModel)]="name" placeholder="name">' +
//         '<h1>Добро пожаловать {{name}}</h1>'
// })
// export class AppComponent{
//     name="";
// }

class Item{
    purshase:string;
    done:boolean;
    price:number;

    constructor(purshase: string, done: boolean, price: number) {
        this.purshase = purshase;
        this.done = done;
        this.price = price;
    }
}

@Component({
    selector:"my-app",
    template:'<div class="page-header">' +
                '<h1>Список покупок</h1>' +
             '</div>' +
        '<div class="panel">' +
            '<div class="form-inline">' +
                '<div class="form-group">' +
                    '<div class="col-md-8">' +
                    '   <input class="form-control" [(ngModel)]="text" placeholder="Название">' +
                    '</div>' +
                '</div> ' +
                '<div class="form-group">' +
                    '<div class="col-md-6">' +
                    '   <input class="form-control" [(ngModel)]="price" placeholder="Название">' +
                    '</div>' +
                '</div> '+
                '<div class="form-group">' +
                    '<div class="col-md-offset-2 col-md-8">' +
                    '   <button class="btn btn-default" (click)="addItem(text,price)" )>Добавить'
                        +'</button>' +
                    '</div>' +
                '</div> '+
            '</div>'+
        '<table class="table table-striped">' +
        '<thead>' +
            '<tr>' +
                '<th>Предмер</th>' +
                '<th>Цена</th>' +
                '<th>Куплено</th>' +
            '</tr>' +
        '</thead>' +
        '<tbody>' +
            '<tr *ngFor="let iten of items">' +
                '<td>{{item.purshase}}</td>' +
                '<td>{{item.price}}</td>' +
                '<td>{{item.purshase}}</td>' +
            '</tr> ' +
        '</tbody>' +
        '</table>' +
        '</div>'
})
export class AppComponent{

}
