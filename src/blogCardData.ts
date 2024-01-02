import blogcard from '@/assets/blogcard.png'
import even from '@/assets/even.png';
import blogcard2 from '@/assets/blogcard2.png';


interface dataprops {
    id: number;
    pic: string;
    alt: string
    title: string;
    content: string;
    background: string;
    shadow: string
}
export const blogCardData: dataprops[] =[
    {
        id: 1,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#fff',
        shadow: 'rgba(225, 225, 232, 0.1) 0px 4px 16px, rgba(226, 226, 230, 0.1) 0px 8px 24px, rgba(231, 231, 232, 0.1) 0px 16px 56px'
    },
    {
        id: 2,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#5D8FBD',
        shadow : 'rgba(93, 143, 189, 0.1) 0px 4px 16px, rgba(93, 143, 189, 0.1) 0px 8px 24px, rgba(93, 143, 189, 0.1) 0px 16px 56px'
    },
    {
        id: 3,
        pic: blogcard2,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#21B09F',
        shadow: 'rgba(33, 176, 159, 0.1) 0px 4px 16px, rgba(33, 176, 159, 0.1) 0px 8px 24px, rgba(33, 176, 159, 0.1) 0px 16px 56px'
    },
    {
        id: 4,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#9C5EE1',
        shadow: 'rgba(156, 94, 225, 0.1) 0px 4px 16px, rgba(156, 94, 225, 0.1) 0px 8px 24px, rgba(156, 94, 225, 0.1) 0px 16px 56px'
    },
    {
        id: 5,
        pic: blogcard,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#C3AE64',
        shadow: 'rgba(195, 174, 100, 0.1) 0px 4px 16px, rgba(195, 174, 100, 0.1) 0px 8px 24px, rgba(195, 174, 100, 0.1) 0px 16px 56px'
    },
    {
        id: 6,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#fff',
         shadow: 'rgba(225, 225, 232, 0.1) 0px 4px 16px, rgba(226, 226, 230, 0.1) 0px 8px 24px, rgba(231, 231, 232, 0.1) 0px 16px 56px'
    },
    {
        id: 7,
        pic: blogcard2,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background : '#358EED',
        shadow: 'box-shadow: rgba(53, 142, 237, 0.1) 0px 4px 16px, rgba(53, 142, 237, 0.1) 0px 8px 24px, rgba(53, 142, 237, 0.1) 0px 16px 56px'
    },
    {
        id: 8,
        pic: even,
        alt: 'blogging',
        title: 'blog title come here for better clarification',
        content: 'Lorem ipsum dolor sit amet consectetur. Mattis sapien etiam semper dapibus.',
        background: '#9C5EE1',
        shadow: 'rgba(156, 94, 225, 0.1) 0px 4px 16px, rgba(156, 94, 225, 0.1) 0px 8px 24px, rgba(156, 94, 225, 0.1) 0px 16px 56px'
    },

] 

