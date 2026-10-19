// The path the app is served under (on Webflow Cloud the mount path, e.g. "/map"; locally and on
// Vercel nothing). Files the browser code fetches itself (the map, the data) must carry it.
//
// Next.js builds its own basePath setting into the code as __NEXT_ROUTER_BASEPATH. That is the
// source to trust: Webflow Cloud swaps in its own next.config at build time, so anything else set
// in our config (such as NEXT_PUBLIC_BASE_PATH) does not survive there.
export const BASE_PATH: string = process.env.__NEXT_ROUTER_BASEPATH || process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
