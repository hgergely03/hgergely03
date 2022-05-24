<script lang="ts">
    import Typewriter  from 'svelte-typewriter';

    const color = '#FF6161';
</script>

<section>
    <div class="name">
        <h1 class="last-name">Horváth</h1>
        <h1 class="first-name">Gergely</h1>
        <Typewriter interval={40} cursor={color} loop={60000}><p class="typewrite">Student, button masher & creative</p></Typewriter>
    </div>
</section>

<style lang="scss">
	section {
		background-color: $hero-background;
		background-color: var(--hero-background);
		width: 100%;
		height: 85vh;
	}

    .name {
        position: relative;
        left: 15%;
        top: 35%;
        max-width: 90%;
        overflow-wrap: break-word;
    }
    
    .name > h1 {
        font-size: 4rem;
    }

    .first-name {
        font-weight: 500;
    }

    .last-name {
        color: #A3A3A3;
        font-weight: 400;
    }

    .typewrite {
        font-size: 1.3rem;
    }

    @media (max-width: 512px) {
        .name {
            left: 10%;
        }
        .name > h1 {
            font-size: 3rem;
        }
    }
</style>
