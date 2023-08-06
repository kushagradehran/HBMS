import { Room } from './room';

export class Hotel {
    hotelId: number | undefined;
    hotelName: string | undefined;
    rating: number | undefined;
    city: string | undefined;
    pincode: number | undefined;
    contact: string | undefined;
    email: string | undefined;
    description: string | undefined;
    room: Room = new Room();
}