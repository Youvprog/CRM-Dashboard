<script setup>
import { ref } from 'vue';
import Tables from '../components/Tables.vue';
import ModalView from '../components/ModalView.vue';

let search = ref('')
let open = ref(false)
let openEdit = ref(false)
let myKey = ref(1)
let lead = ref(null)
const headers = [{name: 'id'},{name: 'Customer name'},{ name: 'Email'},{name: 'Phone'}, {name: 'Address'}, {name: 'City'}, {name: 'Actions'}]

let products = []

function createLeads() {
    for(let i=0; i<10; i++) {
        products.push({id:i, name: `Lead ${i}`, email: `lead${i}@gmail.com`, phone: '+000 0000 0000', address: `${i} street ${i}`, city: `city ${i}`})
    }
}
createLeads()

// let products = ref([
//           {
//             id: 1,
//             name: 'John Doe',
//             email: 'john@doe.com',
//             phone: '+000 0000 0000',
//             address: '1 street 1 ',
//             city: 'city 1'
//           },
//           {
//             id: 2,
//             name: 'Alex Rodrigo',
//             email: 'alex@rodrigo.com',
//             phone: '+000 0000 0000',
//             address: '2 street 2',
//             city: 'city 2'
//           },
//           {
//             id: 3,
//             name: 'Toto',
//             email: 'toto@gmail.com',
//             phone: '+000 0000 0000',
//             address: '3 street 3',
//             city: 'city 3'
//           },
//           {
//             id: 4,
//             name: 'Lead 1',
//             email: 'lead1@gmail.com',
//             phone: '+000 0000 0000',
//             address: ' 4 street 4',
//             city: `city ${}`
//           }
    
//         ])


function onClick() {
    console.log(search.value)
}

function editLead(id) {
    openEdit.value = !openEdit.value
    lead.value = products.filter( item => item.id === id)[0]
}
function closeModal() {
    if(open.value === true) open.value = false
    else if(openEdit.value === true)  openEdit.value = false
}

</script>


<template>
    <div class="container">
        <header class="header">
            <h1>Data Tables</h1>
            <v-breadcrumbs :items="['Dashboard', 'Tables']"></v-breadcrumbs>
        </header>
        <div class="title-search-bar">
            <h3>Table</h3>
            <div class="button-searchbar">
                <v-card
                    class="mx-auto"
                    color="grey-lighten-3"
                    width="400"
                >
                    <v-text-field
                        v-model="search"
                        density="compact"
                        variant="solo"
                        label="Search Content"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
                        @click:append-inner="onClick"
                    ></v-text-field>
                    
                </v-card>
                <v-btn append-icon="mdi-account-plus-outline" @click="open = !open" color="info">
                    Add Lead
                </v-btn>
                <modal-view :open="open" :open-edit="openEdit" @close-modal="open = !open" width="50%">
                    <template v-slot:modal-header>
                        <h2>Add new Lead</h2>
                    </template>
                    <!-------Modal-Body to edit a customer----->
                    <template v-slot:modal-body v-if="openEdit">
                            <v-text-field label="Customer's name" variant="outlined" v-model="lead.name"></v-text-field>
                            <v-text-field label="Email" variant="outlined" v-model="lead.email"></v-text-field>
                            <v-text-field label="Phone" variant="outlined" v-model="lead.phone"></v-text-field>
                            <v-text-field label="Address" variant="outlined" v-model="lead.address"></v-text-field>
                            <v-text-field label="City" variant="outlined" v-model="lead.city"></v-text-field>
                    </template>
                    <!-------Modal-Body to add a mew customer----->
                    <template v-slot:modal-body v-if="open">
                            <v-text-field label="Customer's name" variant="outlined"></v-text-field>
                            <v-text-field label="Email" variant="outlined"></v-text-field>
                            <v-text-field label="Phone" variant="outlined"></v-text-field>
                            <v-text-field label="Address" variant="outlined"></v-text-field>
                            <v-text-field label="City" variant="outlined"></v-text-field>
                    </template>
                    
                    <template v-slot:modal-footer>
                        <v-btn color="success">Save</v-btn>
                        <v-btn @click="closeModal">Close</v-btn>
                    </template>
                </modal-view>
             </div>
        </div>
        <section>
            <Tables :products="products" :headers="headers" :key="myKey" @open-modal="editLead"></Tables>
        </section>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.header {
    display: flex;
    justify-content: space-between;
}
.title-search-bar {
    padding: 2rem 0 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.button-searchbar {
    display: flex;
    gap: 1rem;
    align-items: stretch;
}
</style>