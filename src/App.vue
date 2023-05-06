
<template >
    <pv-toast/>
    <header >
        <pv-toolbar   style="background-color:#673ab7;">
            <template #start>
                <img src="./assets/images/logo-login.png" alt="Logo TripStore">
                <h3 style="color:black;"></h3>
            </template>
            <template #end>

                <pv-button
                        class="p-button-text text-white"
                        :href="href"
                        @click="navigate">
                </pv-button>
                <div class="flex-column">
                    <router-link v-for="item in items"
                                 :to="item.to"
                                 custom
                                 v-slot="{ navigate, href }"
                                 :key="item.label">
                        <pv-button
                                class="p-button-text text-white"
                                :href="href"
                                @click="navigate">{{ item.label }}
                        </pv-button>
                    </router-link>
                </div>
            </template>
        </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="drawer"/>
    <router-view/>
</template>
<script>

export default {
    data() {
        return {

            drawer: false,
            items: [

                { label: ' Home', to: '/home'},
                { label: 'Add New Trip', to: '/addnewtrip'},
                { label: 'Profile', to: '/profile'},
                { label: 'Flights history', to: '/flighthistory'},
                { label: 'Login', to: '/login'},






            ]
        }
    }
}
</script>
<style>

</style>