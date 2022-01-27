<template>
  <section class="home" id="home">
    <div class="home-image">
      <!--<img src="./assets/Frame 63.png" alt="">-->
      <img
        src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/bg6.jpeg"
        alt=""
      />
    </div>
    <div class="content" data-aos="fade-right">
      <h5>{{ $t("banner.message.title") }}</h5>
      <h6>
        {{ $t("banner.message.content") }}
      </h6>
      <!--<a href="#company"><button class="btn">Daha fazla Öğren  >> </button></a>-->
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {langs: ['en', 'tr']}
    }
};
</script>
