'use client'

import { useEffect, useState } from 'react'

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function HelloComponent() {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await res.json()
        setComments(data)
        console.log('Called API')
      } catch (error) {
        console.error(error)
      }
    }
    init()
  }, [])

  return (
    <main>
      <ul>
        {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.id}</strong> - {comment.name}
            </li>
        ))}
      </ul>
    </main>
  )
}
