export class RegisterDto {
    email: string;
    password: string;
    username: string;
    code:string="UDEMYANDROID";

    constructor() {
        this.email = '';
        this.password = '';
        this.username = '';
    }
}