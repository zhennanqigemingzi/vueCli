<template>
  <div class="secTree">
      <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
</el-tree>
  </div>
</template>

<script>
export default {
  name: 'secTree',
  data() { 
    return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
    }
  }
 }
</script>

<style lang="scss" scoped>
  .secTree{

  }
</style>