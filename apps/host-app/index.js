import { Federated, Script, ScriptManager } from '@callstack/repack/client';
import queryString from 'query-string';
import { AppRegistry, Platform } from 'react-native';

import CONFIG from '@superapp/config';

import { name as appName } from './app.json';
import packageJson from './package.json';
import App from './src/App';
import isInFederatedModule from './src/utils/isInFederatedModule';
import getContainersURL from './src/utils/getContainersURL';

let containers = {
  Landers: `${CONFIG.LANDERS_CONTAINER_URL}/[name][ext]`,
};

let resolveURL = Federated.createURLResolver({
  containers,
});

// TODO shared storage
// ScriptManager.shared.setStorage(AsyncStorage);
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  if (CONFIG.ENV === 'production') {
    // call the host catalog server based on host version
    // so that it will get all compatible mini-apps
    const containersURL = getContainersURL({
      hostname: 'http://localhost:6000',
      version: packageJson.version,
      platform: Platform.OS,
      appName: packageJson.name,
    });

    const containersResponse = await fetch(containersURL);

    containers = await containersResponse.json();

    resolveURL = Federated.createURLResolver({
      containers,
    });
  }

  let url;

  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) return undefined;
  if (url && CONFIG.ENV === 'staging') {
    return {
      url,
      cache: false,
      query: {
        platform: Platform.OS,
      },
      verifyScriptSignature: 'off',
    };
  }

  /**
   * @important NOTE:
   * For Release on Android:
   * query {} is not working should be comment out.
   * For Release on IOS:
   * Below query and scriptId should work
   */
  if (
    (url && CONFIG.ENV === 'staging') ||
    (url && CONFIG.ENV === 'production')
  ) {
    let configs = {
      url,
      cache: true,
    };

    if (Platform.OS === 'ios') {
      let query = {};

      // @TODO make caller and scriptId check for the
      // list of containers so that we can call it dynamically
      if (caller === 'Landers' || scriptId === 'Landers') {
        let _url = containers[caller];

        if (scriptId === 'Landers') {
          _url = containers[scriptId];
        }
        // lets get the version from the container URL this
        // way the host app can get the proper version
        query = queryString.parse(_url.split('?')[1]);
      }

      configs.query = {
        ...query,
        platform: Platform.OS,
        file: isInFederatedModule(scriptId)
          ? `${scriptId}.container.bundle`
          : `${scriptId}.chunk.bundle`,
      };
    }

    return configs;
  }
});

AppRegistry.registerComponent(appName, () => App);
