import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
      <div className="menu flex flex-col gap-[20px] 1/3">
        <div className="item border-solid border-gray-200 border-2 p-[10px] h-1/2 w-[100%] px-2">
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
          <label htmlFor="file">Upload Image</label>
          <div className="buttons flex justify-between gap-10">
            <button className="px-[10px] py-[3px] bg-white border-[1px] border-solid border-teal-600 text-teal-600 rounded-md">
              Save as a draft
            </button>
            <button className="px-[10px] py-[3px] bg-teal-600 border-[1px] border-solid border-teal-600 text-white rounded-md">
              Update
            </button>
          </div>
        </div>

        <div className="item border-solid border-gray-200 border-2 p-[10px]  flex flex-col justify-between text-[12px] text-[#555] px-12">
          <h1 className="font-semibold text-3xl">Category</h1>
          <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat flex items-center gap-[8px] font-semibold text-teal-600">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
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
  );
}

export default Write;
