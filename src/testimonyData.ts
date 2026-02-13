import niima from "@/assets/niima.png";
import bk from "@/assets/bk.png";
import sj from "@/assets/sj.png";
import wudil from "@/assets/wudil.jpg";
/**
 * Interface for testimony data props.
 * Defines the shape of objects representing testimony data.
 * Includes id, title, name, pic, alt, content and role fields.
 */
interface dataProps {
  id: number;
  title: string;
  pic: string;
  name: string;
  alt: string;
  content: string;
  role: string;
}
export const testimonyCards: dataProps[] = [
  {
    id: 1,
    title: "Seamless UX Integration",
    name: "Niimatullahi",
    pic: wudil,
    content:
      "Ala is an exceptional frontend developer. His attention to detail in UI/UX and his ability to translate complex designs into smooth, interactive React applications is truly impressive.",
    alt: "testimony",
    role: "Product Designer",
  },
  {
    id: 2,
    title: "Pixel-Perfect Delivery",
    name: "Muhammad Niimatullahi",
    pic: niima,
    content:
      "“Working with Ala was a fantastic experience. He delivered a pixel-perfect interface that not only looks stunning but also performs exceptionally well. His expertise is remarkable.”",
    alt: "testimony",
    role: "UI Designer",
  },
  {
    id: 3,
    title: "Clean Code & Performance",
    name: "Bukhari Auwal",
    pic: bk,
    content:
      "“Ala's passion for clean code and performance optimization really shines through in his work. He's proactive, collaborative, and always brings great technical insights to the team.”",
    alt: "testimony",
    role: "Software Engineer",
  },
  {
    id: 4,
    title: "High-End Animations",
    name: "Suraj Wizard",
    pic: sj,
    content:
      "“I've worked with many developers, but Ala's ability to create beautiful transitions and engaging animations is unique. He truly knows how to make a web application feel premium.”",
    alt: "testimony",
    role: "Software Engineer",
  },
  {
    id: 5,
    title: "SEO & Accessibility",
    name: "Muhd Wudil",
    pic: wudil,
    content:
      "“Ala doesn't just build websites; he builds experiences that are accessible to everyone and optimized for search engines. His holistic approach to development is a huge asset.”",
    alt: "testimony",
    role: "Project Manager",
  },
];
