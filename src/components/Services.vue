<template>
    <section class="menu" id="menu">
            <ul class="list" data-aos="fade-down">
                <li class="btn active" href="#content1" data-src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/den2.jpg">{{ $t("service.main.title.design") }}</li>
                <li class="btn" href="#content2" data-src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/den3.jpeg">{{ $t("service.main.title.coding") }}</li>
               <!--  <li class="btn" href="#content3" data-src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/cd3.jpeg">Geliştirme</li> -->
                <li class="btn" href="#content3" data-src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/cons2.jpeg">{{ $t("service.main.title.consultancy") }}</li>
            </ul>
            <div class="row" data-aos="fade-right">
                <div class="image" data-aos="fade-left">
                    <img src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/den2.jpg" id="menu-img" alt="">
                </div>
                <div id="menu-content" class="content" data-aos="fade-left">
                    
                   <Design />
                   <Coding />
                   <Consultancy />

                   
                    
                </div>
            </div>
        </section>
</template>


<script>
import Design from '@/components/Services/Design.vue'
import Coding from '@/components/Services/Coding.vue'
import Consultancy from '@/components/Services/Consultancy.vue'

export default {
    components: {
        Design,
        Coding,
        Consultancy
    },
}
</script>
