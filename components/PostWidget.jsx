import moment from "moment";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentPsot, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPsot().then((res) => setRelatedPosts(res));
    }
  }, [slug]);
  return (
    <div className="bg-white shadow-lg p-8 mb-8 rounded-lg">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex w-full mb-4 items-center">
          <div className="w-16">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="aligh-middle rounded-lg"
            />
          </div>
          <div className="transition duration-200 ml-4 flex-grow text-indigo-800 hover:text-indigo-400">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
