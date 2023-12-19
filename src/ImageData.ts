import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
export interface Image {
  id: number;
  src: string;
  alt: string; 
}
export const ImageData: Image[] = [
  { id: 1, src: blog1, alt: "Image 1" },
  { id: 2, src: blog2, alt: "Image 2" },
  { id: 3, src: blog3, alt: "Image 3" },
];
