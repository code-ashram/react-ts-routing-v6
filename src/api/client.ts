import axios from 'axios'

import { Comment, Post } from './models.ts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const client = axios.create({
  baseURL: BASE_URL
})

export const getPosts = async (signal: AbortSignal): Promise<Post[]> =>
  client.get<Post[]>('/posts', { signal })
    .then((response) => response.data)

export const getComments = async (signal: AbortSignal, postId: number): Promise<Comment[]> =>
  client.get<Comment[]>(`/comments`, { signal, params: { postId } })
    .then((response) => response.data)
