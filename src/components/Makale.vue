<template>
  <div class="makale">
    <router-link :to="{ name: 'Detay', params: { id: makale.id } }">
      <h3>{{ makale.baslik }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["makale"],
};
</script>

<style>
.makale a {
  display: block;
  margin: 40px 0;
  padding: 20px;
  border-left: 6px solid #2db334;
  cursor: pointer;
}

.makale a:hover h3 {
  color: #2db334;
}
</style>
