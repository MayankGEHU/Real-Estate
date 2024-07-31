import React from 'react';
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'
import { Person } from 'react-ionicons'
import { Pricetags } from 'react-ionicons'
import { CalendarOutline } from 'react-ionicons'
const BlogSection = () => {
  const blogs = [
    {
      imgSrc: blog1,
      altText: "The Most Inspiring Interior Design Of 2021",
      author: "Admin",
      category: "Interior",
      title: "The Most Inspiring Interior Design Of 2021",
      date: "2022-04-27",
      formattedDate: "Apr 27, 2022"
    },
    {
      imgSrc: blog2,
      altText: "Recent Commercial Real Estate Transactions",
      author: "Admin",
      category: "Estate",
      title: "Recent Commercial Real Estate Transactions",
      date: "2022-04-27",
      formattedDate: "Apr 27, 2022"
    },
    {
      imgSrc: blog3,
      altText: "Renovating a Living Room? Experts Share Their Secrets",
      author: "Admin",
      category: "Room",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "2022-04-27",
      formattedDate: "Apr 27, 2022"
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>
        <h2 className="h2 section-title">Latest News Feeds</h2>
        <ul className="blog-list has-scrollbar">
          {blogs.map((blog, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner">
                  <img src={blog.imgSrc} alt={blog.altText} className="w-100" />
                </figure>
                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <Person
                          color={'#5d737e'} 
                          />
                          <span>by: {blog.author}</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="card-meta-link">
                          <Pricetags
                          color={'#5d737e'} 
                         />
                          <span>{blog.category}</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className="h3 blog-title">
                      <a href="#">{blog.title}</a>
                    </h3>
                  </div>
                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <CalendarOutline
                      color={'#5d737e'} 
                      />

                      <time dateTime={blog.date}>{blog.formattedDate}</time>
                    </div>
                    <a href="#" className="read-more-btn">Read More</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
