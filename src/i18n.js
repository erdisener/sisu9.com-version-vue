 // i18n.js

 import { createI18n } from 'vue-i18n';


 const languages = {
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
          works: "i??lerimiz",
          references: "referanslar",
          contact: "ieti??im",
        },
      },
      banner: {
        message: {
          language: "T??rk??e",
          greeting: "Merhaba",
          title: "Sisu9 Teknoloji",
          content:
            "??retti??iniz de??er i??in dijital deneyimler olu??turman??za yard??mc?? oluyoruz..",
        },
      },
      about: {
        message: {
          quote:
            "Bazen bir program??n arkas??ndaki fikir, k??????k bir yarat??c?? ??abad??r.",
          content1:
            "Yarat??c?? tasar??ma olan tutkumuzu, problem ????zmeye olan tak??nt??m??zla birle??tirerek proje ortaklar??m??z??n ??retti??i de??eri, dijital deneyimlere d??n????t??r??yoruz.",
          content2:
            "Proje ortaklar??m??zla birlikte, g??vene dayal?? i?? birlikleri geli??tirmekten keyif alan dinamik bir ekibiz.",
          content3:
            "En g??ncel yaz??l??m teknolojilerini kendimize ara?? edindi??imiz, kullan??c?? aray??z?? ve kullan??c?? deneyimi</span>nin ??ncelikli oldu??u, y??ksek performansl?? algoritmalar kullanarak uzun y??llar i??levselli??ini kaybetmeyen web tabanl?? sistemler geli??tiriyoruz.",
          content4:
            "Geli??tirdi??imiz projelerin teknik destek, takip ve bak??m hizmetlerinin yan??s??ra; proje ortaklar??m??za teknoloji ????z??mleri konusunda dan????manl??k hizmeti sunuyoruz.",
          up: "yukar??",
        },
      },
      service: {
        main: {
          title: {
            design: "Tasar??m",
            coding: "Yaz??l??m",
            consultancy: "Teknoloji Dan????manl??????",
          },
        },
        design: {
          message: {
            quote: "Her harika tasar??m, daha da iyi bir hikayeyle ba??lar.",
            content1:
              "Yarat??c?? tasar??ma olan tutukumuzu yans??tmak i??in kullan??c?? aray??z?? (UI) ve kullan??c?? deneyimi (UX) alanlar??n?? kendimize tuval olarak belirledik. Kullan??c??lar??n dijital sistemlerdeki seyahatlerini hikayele??tirerek, onlar??n bu yolculuklar?? i??in tasarlad??????m??z g??rsel ve zihinsel senaryolar?? dijital deneyimle bulu??turuyoruz.",
            tool: "Tasar??m Ara??lar??m??z",
          },
        },
        coding: {
          message: {
            quote:
              "Programlama sanat??, bi??imlendirme, diller, ara??lar, algoritmalar veya veri yap??lar?? ile de??il, empati ile ba??lar.",
            content1:
              "Proje ortaklar??m??z??n ??retti??i de??eri dijital ortama aktarmak i??in g????l?? bir ileti??im dilinin ??ncelikli oldu??una inan??yoruz. '??nce sorunu ????z, sonra kodu yaz' mottosuyla geli??tirdi??imiz her bir proje i??in, ??zel olarak tasarlad??????m??z ??ny??z ve arkay??z yaz??l??m mimarilerine g??ncel kodlama ara??lar??yla hayat veriyoruz.",
            tool: "Kulland??????m??z Yaz??l??m Ara??lar?? ve Teknolojileri",
          },
        },
        consultancy: {
          message: {
            quote:
              "Projeleri ba??ar??l?? k??lan metodolojiler veya ara??lar de??il, insanlard??r.",
            content1:
              "SAP, Oracle ve Microsoft gibi geli??tiricilerin sundu??u ????z??mleri kullanan i??letmelerde 10 y??l?? a??k??n zamand??r kazand??????m??z deneyimlerimiz ile size ve hedeflerinize en uygun ????z??m yakla????mlar??n?? payla????yoruz.",
            tool: "Dan????manl??????n?? Verdi??imiz ??r??nler",
          },
        },
      },
      reference: {
        company: {
            title: {
                ocalis: "Ocalis M??hendislik",
            },
        },
      },
      contact: {
        adress: {
          title: "??leti??im",
        },
        quick: {
          title: "H??zl?? Men??",
          home: "Ana Sayfa",
          about: "Hakk??m??zda",
          service: "Hizmetler",
          reference: "Referanslar",
          contact: "??leti??im",
        },
        follow: {
            title: "Bizi Takip Edin",
            linkedin: "Linkedin",
            twitter: "Twitter - Yak??nda",
          },
      },
    },
  },
};

const i18n = createI18n({
  languages
})

export default i18n;