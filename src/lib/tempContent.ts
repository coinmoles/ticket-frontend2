import { UserType, CommentType, PostType } from "./types"
import { DateTime } from "luxon"

export const tempUser1: UserType = {id: 1, nickname: '피카법사', avatar: 'https://pbs.twimg.com/profile_images/1391421537216049163/jwuae6YW_400x400.jpg'}
export const tempUser2: UserType = {id: 2, nickname: '피카학생', avatar: 'http://pm1.narvii.com/6370/e834d6c05a0424219397e9583518072eb045e3d7_00.jpg'}
export const tempContent: string = '옛날옛날에 피카츄가 살앗는데 피카츄 마법을 쓰려면 피카츄의 힘이 필요해서 피카츄 피카피카 피카피카츄 피카피카 피카피카츄 피카츄 피카피카 피카츄 피카츄 피카츄'
export const tempComment1: CommentType = {id: 1, content: '매우 유익한 정보에요!', author: tempUser2, vote: 5, replies: []}
export const tempReply2: CommentType = {id: 3, content: '세상에', author: tempUser2, vote: 10, replies: []}
export const tempReply: CommentType = {id: 4, content: '그런 건 중요하지 않아요', author: tempUser1, vote: -13, replies: [tempReply2]}
export const tempComment2 :CommentType = {id: 2, content: '그런데 그래서 피카츄 마법은 어떻게 쓰나요?!', author: tempUser2, vote: 18, replies: [tempReply]}
export const tempComment3 :CommentType = {id: 5, content: '스스로 깨닫지 못하는 사람에게 저는 도움을 드릴 수 없습니다.', vote:-34, author: tempUser1, replies: []}
export const tempComment4 :CommentType = {id: 6, content: '여러분 왜 이렇게 downvote를 하시나요... 이 게시판 수준에 실망했습니다.', vote:-56, author: tempUser1, replies: []}
export const tempPost: PostType = {id: 0, title: '입문자를 위한 피카츄 마법', content: tempContent, views: 100000000, author: tempUser1, date: DateTime.now(), 
                            vote: -47, subreddit: '피카 게시판', comments: [tempComment1, tempComment2, tempComment3, tempComment4]}
export const tempPostList: Array<PostType> = [tempPost]