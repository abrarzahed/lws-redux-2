import React from "react";

export default function SingleVideoView() {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      {/* <!-- video player --> */}
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* <!-- video description --> */}
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
          Some video title
        </h1>
        <div className="pb-4 flex items-center space-between border-b">
          <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on 23 Nov 2022
          </h2>

          {/* <!-- like/unlike --> */}
          <div className="flex gap-10 w-48">
            <div className="flex gap-1">
              <div className="shrink-0">
                <img className="w-5 block" src="./assets/like.svg" alt="Like" />
              </div>
              <div className="text-sm leading-[1.7142857] text-slate-600">
                100K
              </div>
            </div>
            <div className="flex gap-1">
              <div className="shrink-0">
                <img
                  className="w-5 block"
                  src="./assets/unlike.svg"
                  alt="Unlike"
                />
              </div>
              <div className="text-sm leading-[1.7142857] text-slate-600">
                100K
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          Some video description here
        </div>
      </div>
    </div>
  );
}
