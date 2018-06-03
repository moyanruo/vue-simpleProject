<template>
    <div class="container">
        <p>Written by {{author}}</p>
    </div>
</template>

<script>
export default {
//   props: ["author"]  //方式一
props:{
    author:{
        type:String,
        default:"lilll",
        // required:true  //是否必填与 default 只能写一个

    }
}
};
</script>

