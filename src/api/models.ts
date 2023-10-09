export type Post = {
  body: string
  id: number
  title: string
  userId: number
}

export type Comment = {
  body: string
  email: string
  id: number
  name: string
  postId: number
}
