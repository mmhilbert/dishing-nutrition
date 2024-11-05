import React from "react"

export const BlogCard = () => {
  const blog = {
    title: 'Test 1',
    feature_image: '/images/dishing-nutrition-logo.png',
    description: 'Hi, this is my first blog!',
  }

  return (
    <div className="flex flex-1 flex-col p-2">
      <img className="mx-auto w-full h-auto hover:rounded-lg hover:shadow-2xl flex-shrink-0" src={blog.feature_image} alt="" />
      <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900">{blog.title}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-sm text-gray-500">{blog.description}</dd>
          <dt className="sr-only">Tags</dt>
          <dd className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              tag
              </span>
          </dd>
          </dl>
      </div>
    </div>
  )
}