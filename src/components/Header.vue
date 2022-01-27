<template>
     <header>
            
            <div id="menu-bar" class="fas fa-bars"></div>
            <nav class="navbar">
                <ul>
                    <li><a href="#home" class="active">sisu9</a></li>
                    <li><a href="#company">{{ $t("header.message.about") }}</a></li>
                    <li><a href="#menu">{{ $t("header.message.works") }}</a></li>
                    <li><a href="#references">{{ $t("header.message.references") }}</a></li>
                    <!-- <li><a href="#about">ekibimiz</a></li> -->
                    <li><a href="#order">{{ $t("header.message.contact") }}</a></li>
                </ul>
            </nav>
        </header>
</template>