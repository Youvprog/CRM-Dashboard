<script setup>
import { reactive} from 'vue';

const props = defineProps(['products', 'headers'])
const page = reactive({val: 1})


const keys = Object.keys(props.products[0])


</script>

<template>
<div class="container">
    <v-table>
        <thead>
        <tr>
            <th class="text-left" v-for="header in headers">
              {{header.name}}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in products"
            :key="item.id"
        >
            <td v-for="key in keys">
              {{item[key]}}
            </td>
            <td>
              <v-icon @click="$emit('openModal', item['id'])" icon="mdi-pencil-outline"></v-icon>
              <v-icon @click="$emit('deleteLead', item['id'])" icon="mdi-delete-forever-outline"></v-icon>
            </td>
        </tr>
        </tbody>
  </v-table>
  <div class="pagination">
    <v-pagination
      v-model="page.val"
      :length="4"
    ></v-pagination>
  </div>

</div>



</template>

<style scoped>
  .pagination {
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: flex-end;
  }
</style>