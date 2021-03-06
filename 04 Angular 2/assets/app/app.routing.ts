import { Routes, RouterModule }         from "@angular/router";

import { MessagesComponent }            from "./messages/messages.components";
import { AuthenticationComponent }      from "./auth/authentication.component";
import { AUTH_ROUTES }                  from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' }, //only react to this path if this is full path
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
]

//register route in angular route module
export const routing = RouterModule.forRoot(APP_ROUTES);