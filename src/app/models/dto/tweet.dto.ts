import { UserDto } from "./user.dto";

export class TweetDto {
    id: string;
    likes: UserDto[];
    user: UserDto;
    mensaje: string;

    constructor() {
        this.id= '';
        this.likes= [];
        this.user= new UserDto();
        this.mensaje= '';
    }
}
export class newTweetDto{

    mensaje:string;
    code:string = "UDEMYANDROID"

    constructor(){
        this.mensaje= 'testeando que es gerundio';
    }
}