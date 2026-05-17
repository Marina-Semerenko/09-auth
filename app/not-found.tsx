import css from './NotFound.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
  openGraph: {
    title: "404 - Page not found",
    description: "Sorry, the page you are looking for does not exist.",
    url: 'https://notehub.app/404',
    images: [
      {url:'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 620,
      alt: 'Page not found',
      },]
  },
};

export default function NotFound () {
    return (
        <>
        <h1 className={css.title}>
            404 - Page not found
            </h1>
<p className={css.description}>
    Sorry, the page you are looking for does not exist.
    </p>
        </>
    );
}