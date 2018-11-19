import development from './development';

const ENV = 'development';

const ENV_CONSTANTS = {
  development,
};

export default {
  ...ENV_CONSTANTS[ENV],
};
