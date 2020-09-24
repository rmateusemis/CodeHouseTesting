import { PasswordService } from './password-service';

describe("Tests para nuestro Password Service", () => {
    let passwordService: PasswordService;

    beforeEach(() => {
        passwordService = new PasswordService();
    });

    it("passwordIsTooShort() devuelve true si recibe una pass que es muy corta", () => {
        var passw = "hola";
        var result = passwordService.passwordIsTooShort(passw);

        expect(result).toBeTrue();
    });

    it("passwordIsTooShort() devuelve false si recibe una pass con los caracteres mínimos exigidos", () => {
        var passw = "estoesvalido";
        var result = passwordService.passwordIsTooShort(passw);

        expect(result).toBeFalse();
    });

    it("passwordHasReservedWords() devuelve true si la pass ofrecida tiene una palabra reservada", () => {
        var passw = "minombreEsElena";
        var result = passwordService.passwordHasReservedWords(passw);

        expect(result).toBeTrue();
    })

    it("passwordHasReservedWords() devuelve false si la pass ofrecida no tiene una palabra reservada", () => {
        var passw = "esvalida";
        var result = passwordService.passwordHasReservedWords(passw);

        expect(result).toBeTrue();
    })
});