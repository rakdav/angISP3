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

    constructor(purshase: string, price: number,done: boolean) {
        this.purshase = purshase;
        this.done = false;
        this.price = price;
    }
}

@Component({
    selector:"my-app",
    template:`<div class="page-header">
                <h1> Список покупок </h1>
                </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text"  placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" [(ngModel)]="price" class="form-control" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text,price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purshase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done"/></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent{
    text:string;
    price:number=0;
    items:Item[]=[
        {purshase:"Хлеб",done:false,price:45.0},
        {purshase:"Масло",done:true,price:67.0},
        {purshase:"Молоко",done:true,price:70.0},
        {purshase:"Сыр",done:false,price:220.0}
    ];
    addItem(text:string,price:number):void{
        if(text==null||text.trim()==""||price==null) return;
        this.items.push(new Item(text,price,false));
    }
}
