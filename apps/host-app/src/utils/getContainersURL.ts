const getContainersURL = ({
  hostname = 'http://localhost:6000',
  appName,
  version,
  platform,
}: {
  hostname: string;
  appName: string;
  version: string;
  platform: string;
}) => {
  return `${hostname}/${appName}?platform=${platform}&version=${version}`;
};

export default getContainersURL;
