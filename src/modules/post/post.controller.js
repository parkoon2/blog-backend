let postId = 1

const posts = [
  {
    id: 1,
    title: '제목',
    body: 'Hello world'
  }
]

export function list(req, res) {
  res.status(200).json({
    posts,
    msessage: '성공'
  })
}

export function write(req, res) {
  const { title, body } = req.body

  postId += 1

  const newPost = {
    postId,
    title,
    body
  }

  posts.push(newPost)

  res.status(200).json({
    message: '성공',
    post: newPost
  })
}

export function remove(req, res) {
  const { id } = req.params

  const idx = posts.findIndex(post => post.id.toString() === id)

  if (idx === -1) {
    return res.status(404).json({
      message: '해당 포스트가 존재하지 않습니다.'
    })
  }

  posts.splice(idx, 1)

  // No Contents
  res.status(204)
}

export function update(req, res) {
  const { id } = req.params
  const { title, body } = req.params

  const idx = posts.findIndex(post => post.id.toString() === id)

  if (idx === -1) {
    return res.status(404).json({
      message: '작성된 포스트가 없습니다.'
    })
  }

  posts[idx] = {
    ...posts[idx],
    body,
    title
  }

  res.status(200).json({
    post: posts[idex],
    message: '성공'
  })
}

export function read(req, res) {
  const { id } = req.params
  console.log(id)

  const idx = posts.findIndex((post) => post.id.toString() === id)

  // 포트스가 없는 경우
  if (idx === -1) {
    return res.status(404).json({
      message: '작성된 포스트가 없습니다.'
    })
  }

  res.status(200).json({
    post: posts[idx],
    message: '성공'
  })

  console.log('idx', idx)
}






