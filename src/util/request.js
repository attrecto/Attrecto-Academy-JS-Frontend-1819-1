import axios from 'axios';
import { Methods } from './http';
import Env from '../env';

export { Methods } from './http';

export const requestCreator = axios.create({});

export default async ({ resource = '/', method = Methods.GET, data, params } = {}) => {
  const url = `${Env.API_URL}${resource}`;
  const headers = {};

  try {
    const { data: response } = await requestCreator.request({
      method,
      url,
      data,
      headers,
      params,
    });

    return response;
  } catch (err) {
    throw err;
  }
};
