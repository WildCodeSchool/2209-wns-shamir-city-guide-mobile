
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

const point1 = new Point(1, 'toto', 'tata',47.24870913135022,-1.6170062140814687)
const point2 = new Point(2, 'titi', 'tata',47.21712097938095,-1.5555514403891306)
const point3 = new Point(3, 'titi', 'tata',47.2655418987309,-1.5710009665896438)
export const points = [point1, point2, point3];
