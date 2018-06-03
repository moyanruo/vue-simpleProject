<template>
    <div class="alert alert-info">
        <slot name="one">
            {{msg}}
        </slot>
        <slot name="two">
            {{title}}
        </slot>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这是一个单页面组件",
      title:"这是一个单页面组件slot"
    };
  }
};
</script>
<style>
</style>
