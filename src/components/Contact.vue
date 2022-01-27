<template>
    <section class="order" id="order">
            <div class="box-container" data-aos="fade-up">
                <div class="box">
                    <h3>{{ $t("contact.adress.title") }}</h3>
                    <p><i class="fas fa-map-marker-alt"></i>Cevdet Paşa Mah. Kayserili Ahmet Paşa Cd. No:60/7, Merkez, Çanakkale</p>
                    <p><i class="fas fa-envelope"></i>info@sisu9.com</p>
                    <p><i class="fas fa-phone"></i>+90 554 789 25 48</p>
                </div>
                <div class="box">
                    <h3>{{ $t("contact.quick.title") }}</h3>
                    <a href="#home">{{ $t("contact.quick.home") }}</a>
                    <a href="#company">{{ $t("contact.quick.about") }}</a>
                   <!--  <a href="#">Değerler</a> -->
                    <a href="#menu">{{ $t("contact.quick.service") }}</a>
                    <a href="#references">{{ $t("contact.quick.reference") }}</a>
                    <a href="#order">{{ $t("contact.quick.contact") }}</a>
                </div>
                <div class="box">
                    <h3>{{ $t("contact.follow.title") }}</h3>
                    <a href="https://www.linkedin.com/company/sisu9-technology" target="_blank">{{ $t("contact.follow.linkedin") }}</a>
                    <a href="#">{{ $t("contact.follow.twitter") }}</a>
                </div>
            </div>
            <div class="footer">
                <h1 class="credit">created by <a href="#">sisu9</a></h1>
            </div>
        </section>
</template>