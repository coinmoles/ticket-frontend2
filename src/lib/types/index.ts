import { DateTime } from 'luxon'

export interface PostType {
    id: number
    title: string
    content: string
    views: number
    author: UserType
    date: DateTime
    vote: number
    subreddit: string
    comments: Array<CommentType>
}

export interface UserType {
    id: number
    nickname: string
    avatar: string
}

export interface CommentType {
    id: number
    content: string
    author: UserType
    vote: number
    replies: Array<CommentType>
}
