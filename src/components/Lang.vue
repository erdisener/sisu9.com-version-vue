<template>
   <!--   <a href="home-tr.html" class="logo-tr">tr</a>
    <a href="home-en.html" class="logo-en">en</a> -->
        

        <select class="logo-tr-selection" v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
       

      <!--<a href="#company"><button class="btn">Daha fazla Öğren  >> </button></a>-->

</template>
<script>
export default {
    data() {
        return {langs: ['en', 'tr']}
    }
};
</script>
