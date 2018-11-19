import request from '../util/request';

export const getBadges = async () => {
  return await request({ resource: '/badges' });
};
