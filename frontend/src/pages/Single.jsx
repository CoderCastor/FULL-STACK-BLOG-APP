import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single flex gap-[50px] mt-5">
      <div className="content flex flex-col gap-10 w-2/3">
        <img
          className="w-[100%] h-[300px] object-cover"
          src="https://images.pexels.com/photos/4106873/pexels-photo-4106873.jpeg"
          alt=""
        />
        <div className="user flex items-center gap-[10px] text-[14px]">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="info">
            <span className="font-semibold">John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit flex gap-[5px]">
            <Link to={`/write?edit=2`}>
              <img
                className="h-[20px] w-[20px] cursor-pointer"
                src={Edit}
                alt=""
              />
            </Link>
            <img
              className="h-[20px] w-[20px] cursor-pointer"
              src={Delete}
              alt=""
            />
          </div>
        </div>
        <h1 className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quod.
        </h1>
        <p className="text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit
          soluta suscipit quidem voluptatem deleniti maiores saepe quod veniam
          veritatis, perspiciatis dolor molestias repellat placeat nulla aliquid
          error illum possimus! Quo, amet natus voluptatum placeat omnis
          laudantium, corrupti, rem animi doloribus quisquam recusandae? Tenetur
          repellendus veniam esse earum cum eum autem, incidunt totam laudantium
          labore dignissimos hic saepe et, placeat id assumenda maxime? Incidunt
          accusamus repellat ad. Ducimus aliquid perferendis, obcaecati nulla
          tempora recusandae, debitis voluptates molestias voluptatibus repellat
          ipsum enim excepturi architecto quas, mollitia numquam ullam! Optio
          possimus repellat qui quod non consequatur rem! Quis illum incidunt
          placeat? Fugiat labore iste ullam quae! Eligendi dolores asperiores ut
          aspernatur esse ipsum! Corrupti consectetur laudantium odit,
          repudiandae recusandae ipsa, praesentium molestias dolores similique
          incidunt eum dignissimos facilis unde quis earum enim, temporibus
          consequuntur soluta debitis aliquam corporis suscipit doloribus. Quo
          voluptas itaque a illum voluptatibus. Voluptas est amet modi et
          doloribus exercitationem ut dolorum voluptatum maxime sapiente
          asperiores odio repellat unde, perspiciatis quasi fuga minima
          reprehenderit, non at! Adipisci quaerat iste dolorem quis unde amet
          magni quos cum dolore alias optio qui numquam in eligendi suscipit
          iure, voluptatum maxime architecto natus consectetur, animi fugiat eos
          at esse? Eveniet voluptatibus voluptatum ducimus?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit
          soluta suscipit quidem voluptatem deleniti maiores saepe quod veniam
          veritatis, perspiciatis dolor molestias repellat placeat nulla aliquid
          error illum possimus! Quo, amet natus voluptatum placeat omnis
          laudantium, corrupti, rem animi doloribus quisquam recusandae? Tenetur
          repellendus veniam esse earum cum eum autem, incidunt totam laudantium
          labore dignissimos hic saepe et, placeat id assumenda maxime? Incidunt
          accusamus repellat ad. Ducimus aliquid perferendis, obcaecati nulla
          tempora recusandae, debitis voluptates molestias voluptatibus repellat
          ipsum enim excepturi architecto quas, mollitia numquam ullam! Optio
          possimus repellat qui quod non consequatur rem! Quis illum incidunt
          placeat? Fugiat labore iste ullam quae! Eligendi dolores asperiores ut
          aspernatur esse ipsum! Corrupti consectetur laudantium odit,
          repudiandae recusandae ipsa, praesentium molestias dolores similique
          incidunt eum dignissimos facilis unde quis earum enim, temporibus
          consequuntur soluta debitis aliquam corporis suscipit doloribus. Quo
          voluptas itaque a illum voluptatibus. Voluptas est amet modi et
          doloribus exercitationem ut dolorum voluptatum maxime sapiente
          asperiores odio repellat unde, perspiciatis quasi fuga minima
          reprehenderit, non at! Adipisci quaerat iste dolorem quis unde amet
          magni quos cum dolore alias optio qui numquam in eligendi suscipit
          iure, voluptatum maxime architecto natus consectetur, animi fugiat eos
          at esse? Eveniet voluptatibus voluptatum ducimus?</p>
        </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
