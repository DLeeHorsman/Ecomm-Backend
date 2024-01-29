import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private isAdmin = false;

    login(username: string, password: string) {
        this.isAuthenticated = true;
        this.isAdmin = username === 'admin';
    }

    logout() {
        this.isAuthenticated = false;
        this.isAdmin = false;
    }

    isAuthenticatedUser() {
        return this.isAuthenticated;
    }

    isAdminUser() {
        return this.isAdmin;
    }
}