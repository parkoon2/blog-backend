import * as postService from './member.service';

export async function list(req, res) {
  const members = await postService.findAllMembersId();

  res.json(members);
}
