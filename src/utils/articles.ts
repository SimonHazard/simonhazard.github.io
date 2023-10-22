export const extensionArticles = '.md';
export const folderArticles = 'articles/';

export async function fetchArticle(path?: string) {
  if (!path) {
    throw new Error('Path is undefined');
  }
  return await fetch(folderArticles + path + extensionArticles).then(
    (response) => {
      if (response.status === 404) {
        throw new Response('Not found', {
          status: 404,
          statusText: "This article doesn't exist"
        });
      }
      return response.text();
    }
  );
}
