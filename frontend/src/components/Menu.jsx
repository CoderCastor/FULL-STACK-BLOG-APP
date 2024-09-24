import React from 'react'

function Menu() {

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
        },]

  return (
    <div className='menu flex flex-col gap-[35px]'>
        <h1 className='text-2xl text-[#555]'>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className='post flex flex-col gap-[10px]' key={post.id}>
                <img src={post.img} className='w-[100%] h-[200px] object-cover' alt="" />
                <h2 className='text-[#555]'>{post.title}</h2>
                <button className='px-2 py-1 bg-[#b9e7e7] text-black'>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu