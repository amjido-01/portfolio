import blog from "@/assets/blog.jpg";
export interface Image {
  id: number;
  src: string;
  alt: string; 
}
export const ImageData: Image[] = [
  { id: 1, src: blog, alt: "Image 1" },
  { id: 2, src: blog, alt: "Image 2" },
  { id: 3, src: blog, alt: "Image 3" },
];
