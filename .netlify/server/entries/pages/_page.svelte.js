import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#player.svelte-7fzc0f.svelte-7fzc0f{pointer-events:none;position:absolute;margin:0 auto}.container.svelte-7fzc0f.svelte-7fzc0f{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}.btn.svelte-7fzc0f.svelte-7fzc0f{pointer-events:all !important;border:none;background-color:#5300e8 !important}.btn.svelte-7fzc0f.svelte-7fzc0f{position:relative;display:block;margin:30px auto;padding:0;overflow:hidden;border-width:0;outline:none;border-radius:2px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.6);background-color:#2ecc71;color:#ecf0f1;transition:background-color 0.3s}.btn.svelte-7fzc0f.svelte-7fzc0f:hover,.btn.svelte-7fzc0f.svelte-7fzc0f:focus{background-color:#27ae60}.btn.svelte-7fzc0f>.svelte-7fzc0f{position:relative}.btn.svelte-7fzc0f span.svelte-7fzc0f{display:block;padding:12px 24px}.btn.svelte-7fzc0f.svelte-7fzc0f:before{content:'';position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236, 240, 241, 0.3);-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const eta = window.location.href.toLowerCase().indexOf("eta") > -1;
  const appeal = window.location.href.toLowerCase().indexOf("appeal") > -1;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1n4lkaz_START -->${$$result.title = `<title>ETA Skipper</title>`, ""}<script type="text/javascript" id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflS50iB-/www-widgetapi.js" data-svelte-h="svelte-1tkxu23"><\/script><script src="https://www.youtube.com/player_api" data-svelte-h="svelte-u7svys"><\/script><!-- HEAD_svelte-1n4lkaz_END -->`, ""} <section> <div id="player" class="svelte-7fzc0f"></div>  ${`<div class="container svelte-7fzc0f"><button class="btn svelte-7fzc0f"><span class="svelte-7fzc0f">${eta ? `Skip The ETA` : `${appeal ? `Appeal here!` : `Click Me!`}`}</span></button></div>`} </section>`;
});
export {
  Page as default
};
