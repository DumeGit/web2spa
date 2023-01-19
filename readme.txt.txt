https://web2spa-0nep.onrender.com


interpolation/one-way binding - vue-project\src\App.vue DA, linija 10 i 28, username iz storea se stavlja u div


two-way binding - vue-project\src\components\DetailsModal.vue DA, linija 16, 42, varijabla courseCredits preko v-model spojena na polje iz forme


methods - vue-project\src\components\DetailsModal.vue DA, linija 47, 2 metode onSubmit i ...mapActions


computed properties - vue-project\src\components\Subjects.vue DA, linija 31, 63, sumOfCredits


barem jedan scoped style - vue-project\src\components\Subjects.vue DA, linija 82


koristiti barem jedan lifecycle hook - vue-project\src\components\Subjects.vue linija 57, DA, koristi se created hook, koji se pokrene kad se stvori komponenta


routing (više stranica) - vue-project\src\router\index.js,  DA, cijeli file su routes


aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - DA, probati s /about


dinamičko usmjeravanje s 404 stranicom ("catch all") - vue-project\src\router\index.js, DA, linija 26


komponenta bez stanja, koristiti properties - vue-project\src\components\Profile.vue, DA, komponenta ima samo props


komponenta sa stanjem - vue-project\src\components\Subjects.vue, DA, linija 51, komponenta ima stanje


barem jedna komponenta mora emitirati barem jedan event - vue-project\src\components\DetailsModal.vue, DA, linija 51, emita event "close" da se zatvori modul


store (Pinia) - vue-project\src\stores\courses.js, DA, cijeli file, koristi se u liniji 67 u fileu Subjects.vue, gdje se dohvate svi courses


asinkroni dohvat podataka s backenda, možete: - vue-project\src\stores\courses.js, DA, linija 14, dohvate se courses
koristiti Firebase ili Back4App, Mocky, itd.
