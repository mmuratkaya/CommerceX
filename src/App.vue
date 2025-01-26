<template>
  <div>
    <!-- Navbar / Menü -->
    <nav>
      <ul>
        <li><router-link to="/">Ana Sayfa</router-link></li>
        <li><router-link to="/product/1">Ürün 1</router-link></li>
        <li><router-link to="/product/2">Ürün 2</router-link></li>
        <li><router-link to="/about">Hakkımızda</router-link></li>
      </ul>
    </nav>

    <!-- Aktif Route'a ait içeriği göstermek için router-view -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script setup>
// App.vue içerisinde özel bir şey eklemene gerek yok, zaten router'ı main.js'de ekledik.
</script>

<style>
/* Basit stiller, daha sonra özelleştirebilirsin */
nav {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>
