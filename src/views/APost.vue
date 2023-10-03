<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute()
const id = ref(route.params.id)
console.log("ID"+id.value)
const items = ref({});
const url = ref('https://jsonplaceholder.typicode.com/posts/' + id.value)
function fetchposts() {
    axios
    .get(url.value)
    .then((response) => {
        items.value = response.data;
    })
    .catch((err) => {
        console.log(err);
    });
}
onMounted(fetchposts);

</script>
<template>
    <div>
    <h1>page{{ route.params.id }}</h1>
    <div>
        <ul>
            <li>userId = {{ items.userId }}</li>
            <li>id =  {{ items.id }}</li>
            <li>title = {{ items.title }}</li>
            <li>body = {{ items.body }}</li>
        </ul>
    </div>
    </div>
</template>
<style scoped>

</style>