export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.e13a4d85.js","app":"_app/immutable/entry/app.1ea98faf.js","imports":["_app/immutable/entry/start.e13a4d85.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.cc25fc61.js","_app/immutable/entry/app.1ea98faf.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.932421d1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
