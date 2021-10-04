<template>
    <li class="nav-item">
        <a v-if="isExternalLink" 
            target="_blank"
            :href="link.to" 
            class="nav-link normal-link"
        >
            {{ link.name }}
        </a>

        <router-link
            v-else
            :to="route"
            class="nav-link"
            v-slot="{ isActive }"
        >
            <a :href='href'
                :class=" isActive ? 'is-active' : 'normal-link' ">
                {{ link.name }}
            </a>
        </router-link>
    </li>
</template>

<script>
    export default {
        props: {
            link: {
                type: Object,
                required: true
            }
        },
        computed: {
            isExternalLink() {
                return this.link.to.startsWith('https');
            },
            route() {
                return this.link.id === undefined 
                    ? { name: this.link.to }
                    : { name: this.link.to, params: { id: this.link.id } }
            }
        }
    }
</script>

<style scoped>
    .is-active {
        color: #42b983 !important;
    }

    .normal-link {
        color: #c6c5c5;
    }
</style>