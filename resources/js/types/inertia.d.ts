import { PageProps as InertiaPageProps } from '@inertiajs/core';

declare module '@inertiajs/core' {
  export interface PageProps extends InertiaPageProps {
    auth?: {
      user: {
        id: number;
        name: string;
        email: string;
        email_verified_at:string
      };
    };
    ziggy?: { [key: string]: any };
    [key: string]: any; // Signature d'index
  }
}
