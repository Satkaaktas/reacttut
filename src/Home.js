import { useState } from "react";
import BlogList from './BlogList';
const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'Welcome to Welcome to the internet!', body: 'Welcome to the internet!', author: '547k4', id:1},
        {title: 'Have a look around', body: 'Anything that brain of yours can thing of can be found',author: 'Bo', id:2},
        {title: 'Mountains of content, some better, some worse', body: 'if none of it is of interest for you you\'d be the first', author: 'Bo',id:3}
    ]);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title= "All Blogs!" handleDelete = {handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Bo")} title= "Bo's blogs"/>
        </div>
     );
}
 
export default Home;