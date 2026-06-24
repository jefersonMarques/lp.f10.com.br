import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getLandingPage, getLandingPageSlugs } from '$lib/data/landingPages';

export const prerender = true;

export const entries = () => getLandingPageSlugs().map((slug) => ({ slug }));

export const load: PageLoad = ({ params }) => {
  const page = getLandingPage(params.slug);

  if (!page) {
    throw error(404, 'Landing page não encontrada.');
  }

  return { page };
};
