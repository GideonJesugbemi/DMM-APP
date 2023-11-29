export interface SeeOtherVehiclesProps {
    image: string;
    price: string;
    passenger: number;
    luggage: number;
    name: string;
    location: string;
    host: string;
    id: number;
    door: number;
    // door: string;
    transmission: string;
}


export const seeOtherVehicles: SeeOtherVehiclesProps[] = 
[
  {
    name: "2016 Honda Accord",
    image: "../images/topdeals/HondaAccord.jpg",
    price: "N00,00",
    passenger: 4,
    luggage: 2,
    location: "Abuja",
    host: "Hosted by James",
    id: 0,
    door: 1,
    transmission: ""
  },
  { 
    name: "2016 Honda Accord",
    image: "../images/topdeals/AudiA6.jpg",
    price: "N00,00",
    passenger: 4,
    luggage: 2,
    location: "Abuja",
    host: "Hosted by James",
    id: 1,
    door: 1,
    transmission: ""
  },
];