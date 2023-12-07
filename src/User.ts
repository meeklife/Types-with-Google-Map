import  {faker}  from '@faker-js/faker';
import { Mappable } from './CustomMap';

// the 'implements' is making sure User class follows the type of the interface Mappable 
// and we can trace any error if Mappable changes to User class NB: Its optional to do 
export class User implements Mappable{
    name:string;
    location: {
        lat:number;
        lng:number;
    };

    constructor(){
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerInfo(): string {
        return `User name: ${this.name}`;
    }
}

