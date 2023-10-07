<template>
    <section>
        <header>
            <button @click="insertNode">插入-insert</button>
            <!-- <button @click="deleteNode">删除-delete</button> -->
            <button @click="logTree">打印-logTree</button>
            <input v-model.number="nextValue" placeholder="节点值" />
        </header>
        <pre>
          <div v-for="list in (tree as any)">
             <span v-for="i in list"
             :style="{
                 backgroundColor: i?.color === 'red' ? 'red' : 'black',
                 color: 'white'
             }"
             ><span v-if="i?.color">{{ i?.value ?? 'nilNode' }}</span></span>
          </div>
      </pre>
    </section>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { toTree } from "../utils/toTree";
import { insertRBTNode } from "../RBT/insertRBTNode";
const nextValue = ref(0);
let rbtNode = insertRBTNode(undefined, 0)
const tree = ref(toTree(rbtNode));
const insertNode = () => {
    rbtNode = insertRBTNode(rbtNode, nextValue.value)
    updateTree();
};
const init = () => {
    const arr = [6,5,4,3,2,1]
    arr.forEach(num => {
        rbtNode = insertRBTNode(rbtNode, num)
    })
    updateTree()
}
const logTree = () => {
    console.log(rbtNode);
};
function updateTree() {
    tree.value = toTree(rbtNode);
}
init()
</script>
  
<style scoped></style>
  