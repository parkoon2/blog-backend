import { Router } from 'express'
import * as postController from './post.controller'

const v1 = new Router()

// 포스트 가져오기
v1.get('/', postController.list)

// 포스트 쓰기
v1.post('/', postController.write)

// 특정 포스트 가져오기
v1.get('/:id', postController.read)

// 특정 포스트 지우기
v1.delete('/:id', postController.remove)

// 특정 포스트 업데이트하기
v1.patch('/:id', postController.update)

// 특정 포스트에 코멘트 쓰기
v1.post('/:id/comments', postController.read)

// 특정 포스트의 코멘트 가져오기
v1.get('/:id/comments', postController.read)


// 특정 포스트의 코멘트 지우기
v1.delete('/:id/comments/:commentId', postController.read)

export {
  v1,
}
