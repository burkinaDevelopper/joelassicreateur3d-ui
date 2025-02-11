import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';
import { route as ziggyRoute, Config, RouteName } from 'ziggy-js';
import { Config, Router } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}



declare global {
  var route: <T extends string>(
    name: T,
    params?: Record<string, any>,
    absolute?: boolean,
    config?: Config
  ) => Router | string;
}
