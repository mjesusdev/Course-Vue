<template>
    <div>
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">15</span>
                <span class="mx-1 fs-3">October</span>
                <span class="mx-2 fs-4 fw-light">2021, Tuesday</span>
            </div>

            <div>
                <button class="btn btn-danger mx-2">
                    Delete
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary">
                    Upload Photo
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr />

        <div class="d-flex flex-column px-3 h-75">
            <textarea 
                name="" 
                id="" 
                cols="30"
                rows="10" 
                placeholder="¿Qué sucedió hoy?"
            ></textarea>
        </div>

        <Fab 
            icon="fa-save"
        />

        <img src="https://bit.ly/3naP2Z2" class="p-3" alt="Img StarWars">
    </div>
</template>

<script>
    import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
        components: {
            Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
        }
    }
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    }
</style>