export class UserDto {
    id: string;
    created: string;
    description: string;
    photoUrl: string;
    username: string;
    website: string;

    constructor() {
        this.id= '';
        this.created= '';
        this.description= '';
        this.photoUrl= 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        this.username= '';
        this.website= ''
    }
}