import React from 'react'
import fs from 'fs'
import matter from "gray-matter";
import md from "markdown-it"

const BlogPg = ({frontMatter, content}) => {
  return (
    <div className='p-10'>
        <h1 className='text-2xl font-bold py-4'>{frontMatter.title}</h1>
        <article className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html: md().render(content)}}/>
    </div>
  )
}

export async function getStaticPaths() {
    // Get slugs
  const files = fs.readdirSync("posts");
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params: {slug} }) {
    // Get content for each blog
    const filename = fs.readFileSync(`posts/${slug}.md`);
    const { data: frontMatter, content } = matter(filename);
    return {
        props: {
            frontMatter,
            content,    
        },
    }
}

export default BlogPg