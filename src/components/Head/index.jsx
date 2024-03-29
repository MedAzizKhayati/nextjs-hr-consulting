import capitalize from '@utils/captialize';
import Head from 'next/head';
import { useRouter } from 'next/router';


const DEFAULT_ROUTE_TITLE = 'Home';

export default function AppHead() {
  const router = useRouter();
  const getRouteName = () => router.pathname.split('/')?.[1] || DEFAULT_ROUTE_TITLE;
  const routeTitle = 'Hr Consulting | ' + capitalize(getRouteName());
  return (
    <Head>
      <title>{routeTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
