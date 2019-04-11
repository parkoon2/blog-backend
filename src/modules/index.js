import memberRoutes from 'Modules/member/member.routes';
import * as postRoutes from './post/post.routes'

export default app => {
  app.use('/api/v1/member', memberRoutes);
  app.use('/api/v1/posts', postRoutes.v1)
};
