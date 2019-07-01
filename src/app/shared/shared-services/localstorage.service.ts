import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js'
import {environment} from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    getItem(key: string): string {

        const encryptedKey = this.encryptKey(key);

        const encryptedItem = localStorage.getItem(encryptedKey.toString());

        if (encryptedItem) {
            return this.decryptItem(encryptedItem);
        } else {
            return null;
        }

    }

    setItem(key: string, item: string): void {

        const encryptedKey = this.encryptKey(key);

        const encryptedItem = this.encryptItem(item);

        localStorage.setItem(encryptedKey, encryptedItem);
    }

    logout(): void {
        localStorage.removeItem(this.encryptKey('token'));
        localStorage.removeItem(this.encryptKey('username'));
        localStorage.removeItem(this.encryptKey('user'));
        localStorage.removeItem(this.encryptKey('health_area'));
        localStorage.removeItem(this.encryptKey('language'));
    }

    /** functions for encryt and decrypt key using base64 */
    encryptKey(str: string): string {
        return btoa(str);
    }

    decryptKey(encrypted: string): string {
        return atob(encrypted);
    }

    /** functions for encryt and decrypt item using CryptorJS AES */
    encryptItem(str: string): string {
        const encrypted = CryptoJS.AES.encrypt(str, environment.ls_secret_key);
        return encrypted.toString();
    }

    decryptItem(encrypted: string): string {
        const decrypted = CryptoJS.AES.decrypt(encrypted, environment.ls_secret_key);
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
