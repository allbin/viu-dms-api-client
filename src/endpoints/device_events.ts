import querystring from 'querystring';

import call from '../call';

import type { ViuDmsClientOptions } from '../options';
import type { ApiDeviceEvent, ApiDeviceEventQueryParams } from '../api';

interface DeviceEventOperations {
  query: (params: ApiDeviceEventQueryParams) => Promise<ApiDeviceEvent[]>;
}

export const deviceEventOperations = (
  opts: ViuDmsClientOptions,
): DeviceEventOperations => ({
  query: async (params) => {
    const qstring = querystring.stringify({
      ...params,
    });
    return await call<undefined, ApiDeviceEvent[]>(
      'GET',
      `/devices?${qstring}`,
      { ...opts },
    );
  },
});
