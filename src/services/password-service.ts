import { Injectable} from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class PasswordService {
    constructor() { }

    passwordIsTooShort(passw: string){
        var result = false;
        const MIN_LEGHT = 8;

        if (passw.length < MIN_LEGHT)
        {
            result = true;
        }

        return result;
    }

    passwordIsTooLong(passw: string) {
        var result = false;
        const MAX_LENGHT = 15;

        if (passw.length > MAX_LENGHT){
            result = true;
        }

        return result;
    }

    passwordHasReservedWords(passw: string){
        var result = false;
        var reservedWords = [ "password", "1234", "Elena", "contraseña" ];

        for (var word of reservedWords) {
            if (passw.includes(word)) {
                result = true;
            }
        }

        return result;
    }
}