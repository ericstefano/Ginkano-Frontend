import client from '../client';
import {
  GROUP_CREATE_URL,
  GROUP_DELETE_URL,
  GROUP_EDIT_URL,
  GROUP_GET_ALL_URL,
  GROUP_BASE_URL,
} from './url.constants';
import {
  CreateGroupParams,
  DeleteGroupParams,
  EditGroupParams,
  GetAllGroupsResponseDto,
  GetGroupByTokenParams,
} from './group.types';

export async function createGroup(data: CreateGroupParams): Promise<void> {
  const res = await client.post(GROUP_CREATE_URL, data);
  return res.data;
}

export async function deleteGroup(data: DeleteGroupParams): Promise<void> {
  const res = await client.post(GROUP_DELETE_URL, data);
  return res.data;
}

export async function editGroup(data: EditGroupParams): Promise<void> {
  const res = await client.post(GROUP_EDIT_URL, data);
  return res.data;
}

export async function getAllGroups(): Promise<GetAllGroupsResponseDto> {
  const res = await client.get(GROUP_GET_ALL_URL);
  return res.data;
}

export async function getGroupByToken(
  data: GetGroupByTokenParams,
): Promise<void> {
  const res = await client.post(GROUP_BASE_URL, data);
  return res.data;
}
