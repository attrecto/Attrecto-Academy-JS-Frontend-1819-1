import request, { Methods } from '../util/request';

export const getBadges = async () => {
  return await request({ resource: '/badges' });
};

export const getBadge = async (id) => {
  return await request({ resource: `/badges/${id}` });
};

export const createBadge = async (data) => {
  return await request({ resource: '/badges', method: Methods.POST, data });
};

export const editBadge = async (id, data) => {
  return await request({ resource: `/badges/${id}`, method: Methods.PATCH, data });
};

export const deleteBadge = async (id) => {
  return await request({ resource: `/badges/${id}`, method: Methods.DELETE });
};
