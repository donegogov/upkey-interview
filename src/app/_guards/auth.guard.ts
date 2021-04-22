import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenGuard implements CanActivate {
  accessToken: string = 'randomAccessToken';
  constructor() {
  }

  canActivate(): boolean {
    if (this.accessToken == this.getAccessTokenValue()) {
      return true;
    }
    return false;
  }

  getAccessTokenValue() {
    return 'randomAccessToken';
  }
}
