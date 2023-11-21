export interface CardProps {
  image: string;
  price: string;
  passenger: number;
  luggage: number;
  name: string;
  id: number;
}



export const topDeals: CardProps[] = 
[
  {
    name: "Audi A6",
    image: "../images/topdeals/AudiA6.jpg",
    price: "N00,00",
    passenger: 4,
    luggage: 2,
    id: 0,
  },
  { 
    name: "Toyota Camry",
    image: "../images/topdeals/AudiA6.jpg",
    price: "N00,00",
    passenger: 4,
    luggage: 2,
    id: 1,
  },
  {
    name: "Honda Accord",
    image: "../images/topdeals/HondaAccord.jpg",
    price: "N00,00",
    passenger: 4,
    luggage: 2,
    id: 2,
  },
];

