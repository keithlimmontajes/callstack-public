import packageJson from '../../package.json';

const isInFederatedModule = (scriptId: string): boolean => {
  const findInModule = packageJson.federatedDependencies.find(
    dependency => dependency.name === scriptId,
  );

  if (!!findInModule) {
    return true;
  }

  return false;
};

export default isInFederatedModule;
