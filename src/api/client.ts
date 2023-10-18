import axios from 'axios'

import { Comment, Post } from './models.ts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const client = axios.create({
  baseURL: BASE_URL
})

export const getPosts = async (): Promise<Post[]> =>
  client.get<Post[]>('/posts')
    .then((response) => response.data)

export const getPost = async (id: number): Promise<Post> =>
  client.get<Post>(`/posts/${id}`)
    .then((response) => response.data)

export const getComments = async (postId: number): Promise<Comment[]> =>
  client.get<Comment[]>(`/comments`, { params: { postId } })
    .then((response) => response.data)
