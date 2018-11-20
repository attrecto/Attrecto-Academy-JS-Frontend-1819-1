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

export const getUserBadges = async (userId) => {
  return await request({ resource: `/users/${userId}/badges` });
};

export const getUserBadge = async (userId, badgeId) => {
  return await request({ resource: `/users/${userId}/badges/${badgeId}` });
};

export const assignBadgeToUser = async (userId, badgeId) => {
  return await request({ resource: `/users/${userId}/badges/${badgeId}`, method: Methods.POST });
};

export const deleteBadgeFromUser = async (userId, badgeId) => {
  return await request({ resource: `/users/${userId}/badges/${badgeId}`, method: Methods.DELETE });
};
