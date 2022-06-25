<template>
    <div class="d-flex w-100 justify-content-center" style="align-content: center">
        <ul class="list-group" style="width: 20rem">
            <li v-for="(item, index) of orderArray" :key="item.title" @click="add(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.title }}
                <span class="badge bg-primary rounded-pill">{{ item.quantity }}</span>
                <!--         <span left="0" @click="delete item.index"> 🗑 </span>
 -->
            </li>
            <button class="btn btn-danger" @click="clear()">Clear list</button>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "ListProd",
    computed: {
        ...mapState(["products"]),
        orderArray() {
            let productList = this.products
            return productList.sort((a,b) => b.quantity - a.quantity)
        },
    },
    methods: {
        ...mapMutations(["add", "delete", "clear"]),
    },
};
</script>

<style>
.badge {
    background-color: #7957c2 !important;
}
</style>
