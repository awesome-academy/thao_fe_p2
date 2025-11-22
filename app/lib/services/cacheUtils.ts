'use server';

import { revalidateTag } from 'next/cache';
import { CACHE_TAGS } from './cacheTags';

export async function revalidateToursCache() {
  revalidateTag(CACHE_TAGS.TOURS, 'default');
}

export async function revalidateTrendingToursCache() {
  revalidateTag(CACHE_TAGS.TOURS_TRENDING, 'default');
}

export async function revalidateToursListCache() {
  revalidateTag(CACHE_TAGS.TOURS_LIST, 'default');
}

export async function revalidateSearchCache() {
  revalidateTag(CACHE_TAGS.TOURS_SEARCH, 'default');
}

export async function revalidateAllTourCaches() {
  revalidateTag(CACHE_TAGS.TOURS, 'default');
  revalidateTag(CACHE_TAGS.TOURS_LIST, 'default');
  revalidateTag(CACHE_TAGS.TOURS_TRENDING, 'default');
  revalidateTag(CACHE_TAGS.TOURS_SEARCH, 'default');
}
