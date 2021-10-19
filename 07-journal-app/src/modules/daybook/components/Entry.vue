<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 }})"
    >
        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">18</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="mx-2 fw-light">2021, Lunes</span>
        </div>

        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Velit vel natus, nihil illo sapiente accusantium ducimus commodi dolor blanditiis aliquid quis ipsam tempora quibusdam, 
            suscipit adipisci necessitatibus nulla quod. Debitis.
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-container {
            font-size: 12px;
        }
    }
</style>