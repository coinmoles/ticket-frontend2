import { StringLiteral } from '@babel/types'
import React from 'react'
import { useSelector } from 'react-redux'

interface Post {
    id: number;
    title: string;
    content: string;
}

interface PostState {
    posts: Array<Post>
}

export const PostsList = () => {
    const posts = useSelector((state : PostState) => state.posts)

    const renderedPosts = posts.map((post: Post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}