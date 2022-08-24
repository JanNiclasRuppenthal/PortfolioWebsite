<template>
    <div class="root">
        <v-divider class="dividerFooter"/>

        <router-link class="link" to="/impressum">
            <p>Impressum</p>
            </router-link>

        <br/>

        <router-link class="link" to="/datenschutzerklaerung">
            <p>Datenschutzerklärung</p>
        </router-link>

    

    </div>
</template>

<script>

</script>


<style>
.dividerFooter {
    border-color: aqua !important;
    margin-top: 20%;
}

p {
    margin-top: 2%;
}

</style>