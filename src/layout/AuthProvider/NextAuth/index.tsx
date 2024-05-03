import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

import { API_ENDPOINTS } from '@/services/_url';

const NextAuth = ({ children }: PropsWithChildren) => (
    <SessionProvider basePath={API_ENDPOINTS.oauth}>{children}</SessionProvider>
  );

export default NextAuth;
