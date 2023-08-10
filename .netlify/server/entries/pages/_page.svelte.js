import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#player.svelte-171vq1c.svelte-171vq1c{pointer-events:none;position:absolute;margin:0 auto;display:none}.container.svelte-171vq1c.svelte-171vq1c{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}.btn.svelte-171vq1c.svelte-171vq1c{pointer-events:all !important;border:none;background-color:#5300e8 !important}.btn.svelte-171vq1c.svelte-171vq1c{position:relative;display:block;margin:30px auto;padding:0;overflow:hidden;border-width:0;outline:none;border-radius:2px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.6);background-color:#2ecc71;color:#ecf0f1;transition:background-color 0.3s}.btn.svelte-171vq1c.svelte-171vq1c:hover,.btn.svelte-171vq1c.svelte-171vq1c:focus{background-color:#27ae60}.btn.svelte-171vq1c>.svelte-171vq1c{position:relative}.btn.svelte-171vq1c span.svelte-171vq1c{display:block;padding:12px 24px}.btn.svelte-171vq1c.svelte-171vq1c:before{content:'';position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236, 240, 241, 0.3);-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divplayer;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1n4lkaz_START -->${$$result.title = `<title>ETA Skipper</title>`, ""}<script type="text/javascript" id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflS50iB-/www-widgetapi.js" data-svelte-h="svelte-1tkxu23"><\/script><script src="https://www.youtube.com/player_api" data-svelte-h="svelte-u7svys"><\/script><!-- HEAD_svelte-1n4lkaz_END -->`, ""} <section><div id="player" class="svelte-171vq1c"${add_attribute("this", divplayer, 0)}></div> <div class="container svelte-171vq1c"><button class="btn svelte-171vq1c" data-svelte-h="svelte-163edpo"><span class="svelte-171vq1c">Skip The ETA</span></button></div> </section>`;
});
export {
  Page as default
};
