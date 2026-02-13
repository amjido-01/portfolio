import motion from "@/assets/motion.webp";
import state from "@/assets/state.webp";
import css from "@/assets/css.webp";
import learn from "@/assets/learn.webp";
import yt from "@/assets/yt.webp";
import tags from "@/assets/tags.webp";
import html from "@/assets/html.webp";
import js from "@/assets/js.webp";

interface dataprops {
  id: number;
  pic: string;
  alt: string;
  title: string;
  content: string;
  background: string;
  shadow: string;
}
export const blogCardData: dataprops[] = [
  {
    id: 1,
    pic: motion,
    alt: "blogging",
    title:
      "Smooth Transitions: Building a Stunning React App with Framer Motion and React Router DOM.",
    content:
      "Creating a Simple React App with Smooth Page Transitions using Framer Motion and React Router DOM.",
    background: "#fff",
    shadow:
      "rgba(225, 225, 232, 0.1) 0px 4px 16px, rgba(226, 226, 230, 0.1) 0px 8px 24px, rgba(231, 231, 232, 0.1) 0px 16px 56px",
  },
  {
    id: 2,
    pic: state,
    alt: "blogging",
    title: "Efficiently managing multiple states in React components",
    content:
      "Simplifying State: Best Practices for Managing Multiple States in a Single Component in React.",
    background: "#5D8FBD",
    shadow:
      "rgba(93, 143, 189, 0.1) 0px 4px 16px, rgba(93, 143, 189, 0.1) 0px 8px 24px, rgba(93, 143, 189, 0.1) 0px 16px 56px",
  },
  {
    id: 3,
    pic: css,
    alt: "blogging",
    title:
      "Discover the secrets of CSS and revolutionize your web designs through an easy-to-follow, beginner-friendly tutorial.",
    content:
      "CSS Simplified: Unlock the Power of Styling with This Beginner's Tutorial.",
    background: "#21B09F",
    shadow:
      "rgba(33, 176, 159, 0.1) 0px 4px 16px, rgba(33, 176, 159, 0.1) 0px 8px 24px, rgba(33, 176, 159, 0.1) 0px 16px 56px",
  },
  {
    id: 4,
    pic: learn,
    alt: "blogging",
    title:
      "From Zero to Web Developer: A Step-by-Step Guide for Beginners in 2023.",
    content:
      "No Prior Experience Required - A Complete Guide to Starting Your Web Development Journey.",
    background: "#9C5EE1",
    shadow:
      "rgba(156, 94, 225, 0.1) 0px 4px 16px, rgba(156, 94, 225, 0.1) 0px 8px 24px, rgba(156, 94, 225, 0.1) 0px 16px 56px",
  },
  {
    id: 5,
    pic: yt,
    alt: "blogging",
    title: "Best YouTube Channels for Learning Software Engineering ",
    content:
      "Unlock the World of Coding: Embark on a Journey of Software Engineering Mastery with YouTube's Top Channels (No Degree Needed!).",
    background: "#C3AE64",
    shadow:
      "rgba(195, 174, 100, 0.1) 0px 4px 16px, rgba(195, 174, 100, 0.1) 0px 8px 24px, rgba(195, 174, 100, 0.1) 0px 16px 56px",
  },
  {
    id: 6,
    pic: tags,
    alt: "blogging",
    title: "The Art of Meta Tags: Elevating Your SEO Game",
    content:
      "Meta Tags 101: A Beginner's Guide to Optimizing Your Website's SEO with Powerful Tags.",
    background: "#fff",
    shadow:
      "rgba(225, 225, 232, 0.1) 0px 4px 16px, rgba(226, 226, 230, 0.1) 0px 8px 24px, rgba(231, 231, 232, 0.1) 0px 16px 56px",
  },
  {
    id: 7,
    pic: html,
    alt: "blogging",
    title: "HTML Basics: Learn How to Create Web Pages from Scratch",
    content:
      "Creating Your Digital Footprint: Understanding HTML Basics for Web Development.",
    background: "#358EED",
    shadow:
      "box-shadow: rgba(53, 142, 237, 0.1) 0px 4px 16px, rgba(53, 142, 237, 0.1) 0px 8px 24px, rgba(53, 142, 237, 0.1) 0px 16px 56px",
  },
  {
    id: 8,
    pic: js,
    alt: "blogging",
    title: "Why you should learn JavaScript",
    content:
      "Top 5 reason to learn JavaScript",
    background: "#9C5EE1",
    shadow:
      "rgba(156, 94, 225, 0.1) 0px 4px 16px, rgba(156, 94, 225, 0.1) 0px 8px 24px, rgba(156, 94, 225, 0.1) 0px 16px 56px",
  },
];
