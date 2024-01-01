import blogcard from '@/assets/blogcard.png'
import test2 from '@/assets/test2.jpg';
import test3 from '@/assets/test3.jpg';
import test4 from '@/assets/test4.jpg';
import test1 from '@/assets/test1.jpg';
import test5 from '@/assets/test5.jpg';
import test6 from '@/assets/test6.jpg';
import test7 from '@/assets/test7.jpg';


interface dataprops {
    id: number;
    pic: string;
    alt: string
    title: string;
    content: string
}
export const blogCardData: dataprops[] =[
    {
        id: 0,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 1,
        pic: test1,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 2,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 3,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 4,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 5,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 6,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },

] 

