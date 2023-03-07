import React from "react";
import RelatedVideoItem from "./RelatedVideoItem";

export default function RelatedVideoList() {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVideoItem />
    </div>
  );
}
