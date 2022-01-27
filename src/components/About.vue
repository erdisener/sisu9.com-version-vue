<template>
     <section class="company" id="company">
            <button class="scrollToTopBtn">
                <div class="up"> {{ $t("about.message.up") }} </div>
                <i class="fas fa-chevron-circle-up"></i>
            </button>
            <div class="content" data-aos="fade-left">
                <h3>"{{ $t("about.message.quote") }}"</h3>
                <blockquote>-Dan Bricklin</blockquote>
                <p>{{ $t("about.message.content1") }}<br><br>
                
                {{ $t("about.message.content2") }}<br><br>

                {{ $t("about.message.content3") }}<br><br> 
                
                {{ $t("about.message.content4") }}</p>
            </div>
            <div class="image" data-aos="fade-right">
                <img src="https://sisu9.s3.eu-north-1.amazonaws.com/photos/a4.jpeg" alt="">
            </div>
        </section>
</template>