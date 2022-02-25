<script lang="ts" src="./SearchResults.ts" />

<template>
    <div>
        <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
            <h4>Loading...</h4>
            <span>Wait please!</span>
        </div>

        <ul v-else-if="places.length > 0" class="list-group mt-3">
            <li 
                v-for="place in places" 
                class="list-group-item list-group-item-action"
                :class="{ 'active': place.id === activePlace }"
                :key="place.id" 
                @click="onPlaceClicked(place)"
            >
                <h5>{{ place.text }}</h5>
                <p>{{ place.place_name }}.</p>
                <div align="right">
                    <button 
                        class="btn btn-outline-primary btn-sm"
                        :class="( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary'"
                        @click.self="getRouteDirections(place)"
                    >
                        Address
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    li {
        cursor: pointer;
    }

    h5 {
        font-size: 18px !important;
    }

    p {
        font-size: 14px;
    }
</style>