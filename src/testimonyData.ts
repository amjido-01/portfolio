import niima from '@/assets/niima.png';
interface dataProps {
    id: number;
    title: string | null;
     pic: string | null;
     name: string | null;
  alt: string | null;
  content: string | null
}
export const testimonyCards: dataProps[] = [
  {
    id: 1,
    title: null,
    name: null,
    pic: null,
    content: null,
    alt: null
  },
  {
     id: 2,
    title: "Title 1",
    name: "Muhammad Niimatullahi",
    pic: niima,
    content: "“Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”",
     alt: 'testimony'
  },
  {
     id: 3,
    title: "Title 1",
    name: "Muhammad Niimatullahi",
    pic: niima,
    content: "“Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”",
     alt: 'testimony'
  },
];