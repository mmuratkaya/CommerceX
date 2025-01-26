<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Ürün Görseli -->
      <div class="flex justify-center">
        <img
            :src="product.imageUrl"
            :alt="product.name"
            class="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      <!-- Ürün Bilgileri -->
      <div class="flex flex-col justify-start">
        <h1 class="text-3xl font-semibold text-gray-800">{{ product.name }}</h1>
        <p class="text-lg text-gray-500 mt-2">{{ product.description }}</p>

        <div class="mt-4">
          <span class="text-2xl font-bold text-indigo-600">{{ product.price }}₺</span>
        </div>

        <!-- Sepete Ekle Butonu -->
        <div class="mt-6">
          <button
              @click="addToCart"
              class="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// Route parametrelerine erişim
const route = useRoute();
const productId = route.params.id;

// Ürün verisi
const product = ref({
  name: productId == "1"?"klavye":"mouse",
  description: "Bu ürün çok kaliteli bir ürün, detaylı açıklamalar burada yer alacak.",
  price: "299,99",
  imageUrl: "https://placehold.co/600x400",
});

// Ürün verisini bir API'den veya statik veriden alabilirsiniz.
// Burada, örnek olarak ürün verisini doğrudan verdik.

// Sepete Ekleme fonksiyonu
const addToCart = () => {
  console.log(`${product.value.name} sepete eklendi!`);
};

// Ürün verisini API'den almak için onMounted kullanabilirsiniz.
// onMounted(() => {
//   fetchProductData(productId);
// });

// API'den veri çekme fonksiyonu
// const fetchProductData = async (id: string) => {
//   const response = await fetch(`/api/products/${id}`);
//   product.value = await response.json();
// };
</script>

<style scoped>
.container {
  max-width: 1200px;
}

button:hover {
  background-color: #4c51bf;
}
</style>
