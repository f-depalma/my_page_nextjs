import Carousel from "./Carousel";
import Video from "./Video";
import { useState } from "react";

export default function Others({ videos }) {
  const videoElments = videos?.map((video) => (
    <Video key={video.id} {...video} />
  ));

  return (
    <div className="pt-24 pb-8 h-full flex flex-col justify-start items-center">
      <fieldset className="youtube w-5/6 mt-10 rounded-lg border border-1 border-yellow-600 p-4 block overflow-auto">
        <legend className="ml-4 px-4 flex flex-row items-center text-lg">
          <img src="Youtube_logo.png" className="h-6 mr-4 inline" />
          YouTube
        </legend>

        <div className="w-full flex flex-row lg:flex-col gap-4 min-w-content">
          {videoElments}
        </div>
      </fieldset>

      <fieldset className="mt-10 w-5/6 rounded-lg border border-1 border-yellow-600 p-4">
        <legend className="ml-4 px-4 flex flex-row items-center text-lg">
          <img src="flag-throwers.jpg" className="rounded-full h-8 mr-4 inline" />
          Flag Throwers
        </legend>
        <Carousel />
      </fieldset>
    </div>
  );
}
