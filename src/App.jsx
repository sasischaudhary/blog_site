import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './User/Layout.jsx'
import Home from './User/Home/Home.jsx';
import About from './User/About/About.jsx';
import SingleBlog from './User/Blog/SingleBlog.jsx';
import AdminLayout from '../Admin/AdminLayout.jsx';
import AdminBlogs from '../Admin/Home/AdminBlogs.jsx'
import AddBlog from '../Admin/Blog/AddBlog.jsx';
import EditBlog from '../Admin/Blog/EditBlog.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
              {/* User layout start */}
            <Route path="/" element={<UserLayout />} >
               <Route path="" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="blog/:id" element={<SingleBlog />} />
           </Route>
              {/* Admin layout start */}
              <Route path="/admin/" element={<AdminLayout />}>
             <Route path="home" element={<AdminBlogs />} />
             <Route path="addblog" element={<AddBlog />} />
             <Route path="edit/:id" element={<EditBlog />} />
             {/* <Route path="blog/:id" element={<SingleBlog />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
