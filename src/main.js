import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "@/assets/style.css";
//import router from "@/router/index.js"
//import i18n from "./i18n.js";

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

const i18n = createI18n({
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages: {
      en: {
        header: {
          message: {
            about: "who we are",
            works: "works",
            references: "references",
            contact: "contact",
          },
        },
        banner: {
          message: {
            language: "English",
            greeting: "Hello !",
            title: "Sisu9 Technology",
            content:
              "We help you create digital experiences for the value you generate..",
          },
        },
        about: {
          message: {
            quote:
              "Sometimes the idea behind a program is one small creative effort.",
            content1:
              "We transform the value produced by our project partners into digital experiences, by combining our passion for creative design and our obsession with problem solving.",
            content2:
              "We are a dynamic team that enjoys developing trust-based collaborations with our project partners.",
            content3:
              "We develop web-based systems that do not lose their functionality for many years by using high-performance algorithms, where the user interface and user experience are the priority, we use the latest software technologies as our tools.",
            content4:
              "In addition to the technical support, follow-up and maintenance services of the projects we have developed; we offer consultancy services to our project partners on technology solutions.",
            up: "up",
          },
        },
        service: {
          main: {
            title: {
              design: "Design",
              coding: "Software",
              consultancy: "Technology Consultancy",
            },
          },
          design: {
            message: {
              quote: "Every great design begins with an even better story.",
              content1:
                "We have set ourselves the canvas for user interface (UI) and user experience (UX) to reflect our passion for creative design. By narrating the journeys of users in digital systems, we bring together the visual and mental scenarios we designed for these journeys with the digital experience.",
              tool: "Our Design Tools",
            },
          },
          coding: {
            message: {
              quote:
                "The craft of programming begins with empathy, not formatting or languages or tools or algorithms or data structures.",
              content1:
                "We believe that a strong communication language is a priority in order to digitize the value produced by our project partners. With the motto of 'solve the problem first, then write the code', we bring to life the specially designed front-end and back-end software architectures with up-to-date coding tools for each project we develop.",
              tool: "Software Tools and Technologies We Use",
            },
          },
          consultancy: {
            message: {
              quote:
                "People, not methodologies or tools, make projects successful.",
              content1:
                "We share the most suitable solution approaches for you and your goals, with our experience gained over 10 years in businesses using solutions from developers such as SAP, Oracle and Microsoft.",
              tool: "Products We Provide Consultancy",
            },
          },
        },
        reference: {
          company: {
            title: {
              ocalis: "Ocalis Engineering",
            },
          },
        },
        contact: {
          adress: {
            title: "Contact",
          },
          quick: {
            title: "Quick Menu",
            home: "Home",
            about: "About Us",
            service: "Services",
            reference: "References",
            contact: "Contact",
          },
          follow: {
              title: "Follow Us",
              linkedin: "Linkedin",
              twitter: "Twitter - Soon",
            },
        },
      },
      tr: {
        header: {
          message: {
            about: "biz kimiz",
            works: "işlerimiz",
            references: "referanslar",
            contact: "ietişim",
          },
        },
        banner: {
          message: {
            language: "Türkçe",
            greeting: "Merhaba",
            title: "Sisu9 Teknoloji",
            content:
              "Ürettiğiniz değer için dijital deneyimler oluşturmanıza yardımcı oluyoruz..",
          },
        },
        about: {
          message: {
            quote:
              "Bazen bir programın arkasındaki fikir, küçük bir yaratıcı çabadır.",
            content1:
              "Yaratıcı tasarıma olan tutkumuzu, problem çözmeye olan takıntımızla birleştirerek proje ortaklarımızın ürettiği değeri, dijital deneyimlere dönüştürüyoruz.",
            content2:
              "Proje ortaklarımızla birlikte, güvene dayalı iş birlikleri geliştirmekten keyif alan dinamik bir ekibiz.",
            content3:
              "En güncel yazılım teknolojilerini kendimize araç edindiğimiz, kullanıcı arayüzü ve kullanıcı deneyimi</span>nin öncelikli olduğu, yüksek performanslı algoritmalar kullanarak uzun yıllar işlevselliğini kaybetmeyen web tabanlı sistemler geliştiriyoruz.",
            content4:
              "Geliştirdiğimiz projelerin teknik destek, takip ve bakım hizmetlerinin yanısıra; proje ortaklarımıza teknoloji çözümleri konusunda danışmanlık hizmeti sunuyoruz.",
            up: "yukarı",
          },
        },
        service: {
          main: {
            title: {
              design: "Tasarım",
              coding: "Yazılım",
              consultancy: "Teknoloji Danışmanlığı",
            },
          },
          design: {
            message: {
              quote: "Her harika tasarım, daha da iyi bir hikayeyle başlar.",
              content1:
                "Yaratıcı tasarıma olan tutukumuzu yansıtmak için kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) alanlarını kendimize tuval olarak belirledik. Kullanıcıların dijital sistemlerdeki seyahatlerini hikayeleştirerek, onların bu yolculukları için tasarladığımız görsel ve zihinsel senaryoları dijital deneyimle buluşturuyoruz.",
              tool: "Tasarım Araçlarımız",
            },
          },
          coding: {
            message: {
              quote:
                "Programlama sanatı, biçimlendirme, diller, araçlar, algoritmalar veya veri yapıları ile değil, empati ile başlar.",
              content1:
                "Proje ortaklarımızın ürettiği değeri dijital ortama aktarmak için güçlü bir iletişim dilinin öncelikli olduğuna inanıyoruz. 'Önce sorunu çöz, sonra kodu yaz' mottosuyla geliştirdiğimiz her bir proje için, özel olarak tasarladığımız önyüz ve arkayüz yazılım mimarilerine güncel kodlama araçlarıyla hayat veriyoruz.",
              tool: "Kullandığımız Yazılım Araçları ve Teknolojileri",
            },
          },
          consultancy: {
            message: {
              quote:
                "Projeleri başarılı kılan metodolojiler veya araçlar değil, insanlardır.",
              content1:
                "SAP, Oracle ve Microsoft gibi geliştiricilerin sunduğu çözümleri kullanan işletmelerde 10 yılı aşkın zamandır kazandığımız deneyimlerimiz ile size ve hedeflerinize en uygun çözüm yaklaşımlarını paylaşıyoruz.",
              tool: "Danışmanlığını Verdiğimiz Ürünler",
            },
          },
        },
        reference: {
          company: {
              title: {
                  ocalis: "Ocalis Mühendislik",
              },
          },
        },
        contact: {
          adress: {
            title: "İletişim",
          },
          quick: {
            title: "Hızlı Menü",
            home: "Ana Sayfa",
            about: "Hakkımızda",
            service: "Hizmetler",
            reference: "Referanslar",
            contact: "İletişim",
          },
          follow: {
              title: "Bizi Takip Edin",
              linkedin: "Linkedin",
              twitter: "Twitter - Yakında",
            },
        },
      },
    },
  });


const app = createApp(App);

app.use(i18n);
//app.use(router);
app.mount("#app");


//////////////////////////////// Navigation ////////////////////////////////////////
$(document).ready(function () {
  $("#menu-bar").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu-bar").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // scroll spy
    $("section").each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let height = $(this).height();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".menu .list .btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let src = $(this).attr("data-src");
    $("#menu-img").attr("src", src);
  });
  $(".list .btn").click(function (event) {
    event.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".info").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
});
//////////////////////////////// Navigation End ////////////////////////////////////////

//////////////////////////////// Scrool Up Button JS ////////////////////////////////
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

////////////////////////////// Scrool Up Button JS End /////////////