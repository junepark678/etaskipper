

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ad9199b7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.932421d1.js","_app/immutable/chunks/singletons.2721501b.js"];
export const stylesheets = [];
export const fonts = [];
