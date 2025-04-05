import React from 'react'
import Blog1 from '../imgs/Blog1.jpg'
import Blog2 from '../imgs/Blog2.jpeg'
import Blog3 from '../imgs/Blog3.jpg'
import Blog4 from '../imgs/Blog4.jpg'
import Blog5 from '../imgs/Blog5.jpg'
import Blog6 from '../imgs/Blog6.png'
import Icon from '../imgs/sendIcon.png'

function Blog() {
  return (
    <div className="bg-white flex justify-center items-center px-16 py-12 mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
    {/* Blog Cards */}
    {[
      {
        img: Blog1,
        link: "https://belletrist.qodeinteractive.com/get-ready-sit-holiday-on-a-christmas-day/",
        title: "GET READY SIT HOLIDAY ON A CHRISTMAS DAY",
      },
      {
        img: Blog2,
        link: "https://europeanreviewofbooks.com/a-messy-optical-process/",
        title: "- A messy optical process   ",
      },
      {
        img: Blog3,
        link: "https://www.illustration.lol/images/what-role-do-emotions-play-in-the-way-our-brains-work",
        title: "What Role Do Emotions Play in the Way Our Brain Works?",
      },
      {
        img: Blog4,
        link: "https://europeanreviewofbooks.com/ca-ira-there-will-be-fire-and-enthusiasm-in-you/",
        title: "Ca ira! There will be fire and enthusiasm in you",
      },
      {
        img: Blog5,
        link: "https://www.illustration.lol/images/here-s-why-you-hate-watching-tv-right-now",
        title: "HERE'S WHY YOU HATE WATCHING TV RIGHT NOW",
      },
      {
        img: Blog6,
        link: "https://europeanreviewofbooks.com/the-business-of-men/",
        title: "The Business of men Wiegertje Postma",
      },
    ].map((blog, index) => (
      <div key={index} className="flex flex-col items-start space-y-3">
        <a href={blog.link} target="_blank" rel="noopener noreferrer">
          <img className="h-52 w-96 hover:opacity-75 transition" src={blog.img} alt="Blog" />
        </a>
        <p className="font-mono text-stone-500 hover:text-black">On 6.Nov.2024</p>
        <h2 className="text-3xl font-Montserrat text-slate-800 hover:text-stone-500 leading-snug">
          {blog.title}
        </h2>
        <hr className="border-gray-500 w-full" />
        <div className="w-full flex justify-between items-center py-2 text-slate-800">
          <div>Drama</div>
          <div>0 comments</div>
          <img src={Icon} className="w-6 h-5 hover:opacity-75 transition" alt="Icon" />
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Blog