import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaRegImage } from "react-icons/fa6";

function Write() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="write mt-[20px] flex gap-[20px]">
      <div className="content w-2/3 flex flex-col gap-[20px]">
        <input
          type="text"
          className="p-[10px] border-solid border-2 border-[#cecece]"
          name=""
          placeholder="Title"
          id=""
        />
        <div className="editorContainer h-[300px] overflow-scroll border-solid border-gray-200 border-2">
          <ReactQuill
            className="h-[100%] border-none"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu flex flex-col gap-[20px]">
        <div className="item border-solid border-gray-200 border-2 p-[10px] h-1/2 flex-1 px-2 flex flex-col justify-between">
          <h1 className="font-semibold text-4xl text-[#555]">Publish</h1>
          <div className="flex justify-between">
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
          </div>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          
          <label className="text-center bg-teal-800 py-1 rounded-md flex justify-center items-center gap-4 text-white font-semibold" htmlFor="file"><FaRegImage /> Upload Image</label>
          <div className="buttons flex justify-between gap-10">
            <button className="px-[10px] py-[3px] bg-white border-[1px] border-solid border-teal-600 text-teal-600 rounded-md">
              Save as a draft
            </button>
            <button className="px-[10px] py-[3px] bg-teal-600 border-[1px] border-solid border-teal-600 text-white rounded-md">
              Update
            </button>
          </div>
        </div>

        <div className="item border-solid border-gray-200 border-2 p-[10px]  flex flex-col justify-between items-center text-[12px] text-[#555]">
          <h1 className="font-semibold text-4xl self-start">Category</h1>
          <div className="flex gap-10 mt-5">
            <div className="flex flex-col gap-1">
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="cinema" id="cinema" />
                <label htmlFor="art">Cinema</label>
              </div>
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="design" id="design" />
                <label htmlFor="design">Design</label>
              </div>
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="food" id="food" />
                <label htmlFor="food">Food</label>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="cinema" id="cinema" />
                <label htmlFor="art">Cinema</label>
              </div>
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="design" id="design" />
                <label htmlFor="design">Design</label>
              </div>
              <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
                <input type="radio" name="cat" value="food" id="food" />
                <label htmlFor="food">Food</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
