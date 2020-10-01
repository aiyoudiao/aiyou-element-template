<template>
  <div id="calculator">
    <header>
      <h2>计算器</h2>
    </header>
    <section class="calculator">
      <content-view />
    </section>
  </div>
</template>

<script>
import { TOYS_MANAGER_INDEX } from '@/constant/toys-manager'
import ContentView from './calculator-views/content-view.vue'

export default {
  name: TOYS_MANAGER_INDEX,
  components: {
    ContentView
  }
}
</script>
<style lang="scss" scoped>
$styleColor1: rgb(237, 23, 31);
$styleColor2: rgb(253, 101, 106);

html {
  font-size: 62.5%; /* =10px */
}
body {
  background-color: #f4f1f1; /* HEX */
}

h2 {
  color: $styleColor1;
}

header {
  font-size: 1.8rem;
  font-family: "Pacifico", cursive;
}

header .author {
  font-size: 1.5rem;
}

header .author a {
  text-decoration: none;
}

header,
.calculator {
  margin: 1.5rem auto;
  text-align: center;
}

.calculator {
  border: 0.8rem solid $styleColor1;
  width: 34rem;
  height: 41.5rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 0.5rem #eee;
}
</style>
