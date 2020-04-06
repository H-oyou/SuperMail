<template>
  <div id = 'recommend'>
      <div v-for = 'item in recommends' :key = 'item.title'>
          <a :href = 'item.link'>
            <img :src = "item.image" alt="item.title">
            <div class = 'text'>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'RecommendView',
  props:{
      recommends:{
          type:Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
#recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0 30px;
  border-bottom:10px solid #eee;

}
img{
  width: 70px;
  height: 70px;
}
.text{
  margin-top:10px;
  color:black;
  font-size:16px;
  text-align:center;
}
a{
  text-decoration: none;
}
</style>
