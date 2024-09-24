import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const posts = [
    {
        "id": 1,
        "title": "The Wonders of Nature",
        "img": "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        "description": "Discover the beauty of our planet, from lush forests to majestic mountains, and learn how to protect it."
    },
    {
        "id": 2,
        "title": "Tech Innovations",
        "img": "https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg",
        "description": "An overview of the latest technology trends, including AI, robotics, and how they are shaping our future."
    },
    {
        "id": 3,
        "title": "The Art of Cooking",
        "img": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        "description": "Explore culinary techniques, delicious recipes, and the joy of creating your own meals at home."
    },
    {
        "id": 4,
        "title": "Fitness for Everyone",
        "img": "https://images.pexels.com/photos/3825509/pexels-photo-3825509.jpeg",
        "description": "Fitness tips for all ages and abilities, focusing on fun ways to stay active and healthy."
    },
    {
        "id": 5,
        "title": "DIY Home Projects",
        "img": "https://images.pexels.com/photos/4106873/pexels-photo-4106873.jpeg",
        "description": "Creative home improvement projects that anyone can tackle to personalize their space and increase value."
    }
]




  return (
    <div>
      <div className="posts mt-[50px] flex flex-col gap-[150px]">
        {posts.map((post) => (
          <div className="post flex gap-[60px] justify-center" key={post.id}>
            <div className="img w-[400px] h-[300px] relative">
              <div className="w-[100%] h-[100%] bg-[#b9e7e7] absolute -translate-x-5 translate-y-5"></div>
              <img src={post.img} className="w-[100%] h-[100%] absolute z-2" alt="" srcset="" />
            </div>
            <div className="content w-2/5">
              <Link className="link" to={`/post/${post.id}`}>
                <h1 className="font-bold text-6xl">{post.title}</h1>
              </Link>
              <p className="mt-8">{post.description}</p>
              <button className="px-10 py-2 bg-white text-[#0e9292] font-semibold border-2 border-[#b9e7e7] rounded-2xl mt-4 hover:bg-[#0ab9b9] hover:text-white">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
