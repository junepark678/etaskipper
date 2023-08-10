import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.65eae61f.js","app":"_app/immutable/entry/app.7860380c.js","imports":["_app/immutable/entry/start.65eae61f.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.2721501b.js","_app/immutable/entry/app.7860380c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.932421d1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());