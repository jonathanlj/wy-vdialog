<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <div @click="test">点击</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    test() {
      this.$dialog
        .alert({
          title: "友情提示",
          body: "测试工作"
        })
        .then(() => {
          // 点击确定执行
          console.log("Clicked on proceed");
        })
        .catch(() => {
          // 点击取消执行
          console.log("Clicked on cancel");
        });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
