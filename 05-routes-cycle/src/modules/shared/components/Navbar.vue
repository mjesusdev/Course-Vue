<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <CustomLink
                        v-for="link in links"
                        :key="link.to"
                        :link="link"
                    />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

    import { defineAsyncComponent } from 'vue'

    export default {

        data() {
            return {
                links: [
                    { to: '/home', name: 'Pokemons' },
                    { to: '/pokemonid/50', name: 'By Id'},
                    { to: '/about', name: 'About' },
                    { to: 'https://duckduckgo.com', name: 'DuckDuckGo'}
                ]
            }
        },

        components: {
            CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
        }
    }
</script>

<style>
</style>