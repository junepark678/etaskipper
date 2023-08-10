import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.3459b275.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.932421d1.js"];
export const stylesheets = ["_app/immutable/assets/2.8ccc4502.css"];
export const fonts = [];
