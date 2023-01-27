
export class Point {
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;

    constructor(id:number, title:string, description:string, latitude:number, longitude:number){
        this.id = id,
        this.title = title,
        this.description = description
        this.latitude = latitude,
        this.longitude = longitude    
    }
}

const point1 = new Point(1, 'toto', 'tata',37.78825,-122.4324)
const point2 = new Point(2, 'titi', 'tata',36.78825,-122.4350)
const point3 = new Point(2, 'titi', 'tata',37.78825,-120.4350)
export const points = [point1, point2, point3];
