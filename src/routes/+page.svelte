<script lang="ts">
	import { onMount } from 'svelte';

	let player: any;
	let divplayer: HTMLElement;
	let visible = false;
	let aaaa: string;
	const onPlayerReady = (event: Event) => {
		if (event.target === null) {
			return;
		}
		(event.target as any).playVideo();
	};
	const handle = () => {
		player = new (window['YT' as any] as any).Player('player', {
			height: 320,
			width: 400,
			videoId: 'xvFZjo5PgG0',
			events: {
				onReady: onPlayerReady
			},
			playerVars: {
				autoplay: 1,
				controls: 0,
				showinfo: 1,
				enablejsapi: 1,
				loop: 1,
				autohide: 1,
				playsinline: 1
			}
		});
		visible = true;
		player.playVideo();
	};

	onMount(async () => {
		console.log(aaaa);
	});
</script>

<svelte:head>
	<title>ETA Skipper</title>
	<script
		type="text/javascript"
		id="www-widgetapi-script"
		src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflS50iB-/www-widgetapi.js"
	></script>
	<script src="https://www.youtube.com/player_api"></script>
</svelte:head>

<section>
	<!-- <div bind:innerHTML={aaaa} contenteditable="true"> -->
	<div id="player" />
	<!-- </div> -->
	{#if visible}
		<div id="player2" bind:this={divplayer} contenteditable="true">
			{aaaa}
		</div>
	{:else}
		<div class="container">
			<button class="btn" on:click={handle}><span>Skip The ETA</span></button>
		</div>
	{/if}
</section>

<style>
	#player {
		pointer-events: none;
		position: absolute;
		margin: 0 auto;
	}
	.container {
		display: flex; /* establish flex container */
		flex-direction: column; /* make main axis vertical */
		justify-content: center; /* center items vertically, in this case */
		align-items: center; /* center items horizontally, in this case */
		height: 100vh;
	}
	.btn {
		pointer-events: all !important;
		border: none;
		background-color: #5300e8 !important;
	}

	.btn {
		position: relative;

		display: block;
		margin: 30px auto;
		padding: 0;

		overflow: hidden;

		border-width: 0;
		outline: none;
		border-radius: 2px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

		background-color: #2ecc71;
		color: #ecf0f1;

		transition: background-color 0.3s;
	}

	.btn:hover,
	.btn:focus {
		background-color: #27ae60;
	}

	.btn > * {
		position: relative;
	}

	.btn span {
		display: block;
		padding: 12px 24px;
	}

	.btn:before {
		content: '';

		position: absolute;
		top: 50%;
		left: 50%;

		display: block;
		width: 0;
		padding-top: 0;

		border-radius: 100%;

		background-color: rgba(236, 240, 241, 0.3);

		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>
