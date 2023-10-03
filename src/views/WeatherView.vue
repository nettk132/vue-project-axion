<template>
    <div>
    <ui v-for="(i,index) in items.list" :key="index">
         {{ index+1 }}    
         dt = {{ i.dt }}   
         main ={{ i.main.temp }}

    </ui>
    </div>
    
</template>

<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";


const items = ref([]);
const lat = ref("18.896989");
const long = ref("99.012840");
const apikey = ref("74611ead16e738bf4595712e30ad3c9e");

const url = ref('https://api.openweathermap.org/data/2.5/forecast?lat='+lat.value+'&lon='+long.value+'&appid='+apikey.value+'&units=metric');
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