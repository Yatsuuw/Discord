import type { AniListMedia, AniListPage, MediaType } from './types.js';

const ANILIST_API = 'https://graphql.anilist.co';
const REQUEST_TIMEOUT_MS = 8_000;

export const PER_PAGE = 10;

const SEARCH_QUERY = `
  query ($search: String, $type: MediaType, $perPage: Int) {
    Page(page: 1, perPage: $perPage) {
      pageInfo { total }
      media(search: $search, type: $type, sort: SEARCH_MATCH) {
        id
        title { romaji english native }
        type
        format
        status
        description(asHtml: false)
        episodes
        chapters
        volumes
        averageScore
        popularity
        genres
        siteUrl
        coverImage { extraLarge color }
        startDate { year month day }
        endDate { year month day }
        studios { nodes { name isAnimationStudio } }
        staff(perPage: 4) {
          edges {
            role
            node { name { full } }
          }
        }
      }
    }
  }
`;

type AniListResponse = {
  data?: { Page: { pageInfo: { total: number }; media: AniListMedia[] } };
  errors?: { message: string }[];
};

export async function searchAniList(
  search: string,
  type: MediaType,
): Promise<AniListPage> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(ANILIST_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ query: SEARCH_QUERY, variables: { search, type, perPage: PER_PAGE } }),
      signal: controller.signal,
    });
  } catch (err) {
    const msg = err instanceof Error && err.name === 'AbortError'
      ? `AniList API timeout après ${REQUEST_TIMEOUT_MS}ms`
      : `AniList API injoignable`;
    throw new Error(msg, { cause: err });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(`AniList API error : ${response.status} ${response.statusText}`);
  }

  const json = await response.json() as AniListResponse;

  if (json.errors?.length) {
    throw new Error(`AniList GraphQL error : ${json.errors[0]!.message}`);
  }

  if (!json.data) {
    throw new Error('AniList API : réponse vide ou inattendue');
  }

  return {
    results: json.data.Page.media,
    total: json.data.Page.pageInfo.total,
  };
}
