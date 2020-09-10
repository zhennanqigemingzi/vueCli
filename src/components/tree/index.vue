<template>
  <div class="myTree">
    <el-tree node-key="id" :load="loadNode" :props="defaultProps" :render-content='renderFun' @node-click="handleNodeClick" lazy></el-tree>
  </div>
</template>

<script>
import Axios from '../../request/index'
import YAML from 'json2yaml'
export default {
  name: "myTree",
  data() {
    return {
      data: null,
      defaultProps: {
        children: "children",
        label: "label",
        isLeaf: 'leaf'
      },
    };
  },
  created(){
    //   this.getFirst()

  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    renderFun(h,{data}){
        return (<span>
            <span>{data.label}</span>
        </span>)
    },
    async getFirst(){
        try{
            let { code, data } = await Axios.get('/test')
            if(code != 0) return
            this.data = data
        }catch(err){
            this.$message.error(err)
        }
    },
    loadNode(node, resolve){
        console.log('node',node)
        Axios.get('/test').then(res=>{
            resolve(res.data)
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.myTree {

}
</style>