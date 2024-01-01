import blogcard from '@/assets/blogcard.png'
import even from '@/assets/even.png';
import blogcard2 from '@/assets/blogcard2.png';


interface dataprops {
    id: number;
    pic: string;
    alt: string
    title: string;
    content: string
}
export const blogCardData: dataprops[] =[
    {
        id: 1,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 2,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 3,
        pic: blogcard2,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 4,
        pic: even,
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
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 7,
        pic: blogcard2,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },
    {
        id: 8,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.'
    },

] 

