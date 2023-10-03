<template>
    <div>
        <h1>
            post page
        </h1>
        <button @click="fetchPosts()">แสดงผลข้อมูล</button>
        <div>
            <ui v-for="(post,index) in items" :key="index">
                <li>userId = {{ post.userId }}</li>
                <li>id = {{ post.id }}</li>
                <li>title = {{ post.title }}</li>
                
                <li>
                    <RouterLink :to="`/post/${post.id}`">อ่านต่อ......</RouterLink>
                </li>
            </ui>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const items = ref([]);
const url = ref("https://jsonplaceholder.typicode.com/posts");
function fetchPosts() {
 axios
 .get(url.value)
 .then((response) => {
 items.value = response.data;
 })
 .catch((err) => {
 console.log(err);
 });
}
(fetchPosts);
</script>