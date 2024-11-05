import { BlogCard } from "../components/BlogCard"

const Blog = () => {
  return (
      <div>
          Blog Content
          <div className="grid grid-cols-3 gap-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

      </div>
  )

}

export default Blog