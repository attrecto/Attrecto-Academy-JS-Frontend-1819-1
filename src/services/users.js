import request, { Methods } from '../util/request';

export const getUsers = async () => {
  return await request({ resource: '/users' });
};

export const getUser = async (id) => {
  return await request({ resource: `/users/${id}` });
};

export const createUser = async (data) => {
  return await request({ resource: '/users', method: Methods.POST, data });
};

export const editUser = async (id, data) => {
  return await request({ resource: `/users/${id}`, method: Methods.PATCH, data });
};

export const deleteUser = async (id) => {
  return await request({ resource: `/users/${id}`, method: Methods.DELETE });
};
