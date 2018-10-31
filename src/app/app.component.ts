import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromRoot from './store/reducers';
import * as authActions from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<fromRoot.State>){

  }
  ngOnInit(){
    this.store.dispatch(new authActions.LoadAuths())
  }
  title = 'ngrx-tut';
}
