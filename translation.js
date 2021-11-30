const flagBtn = document.querySelector('.langFlag')
const content = document.querySelectorAll('html [lang]')


const translate = () => {
    flagBtn.classList.toggle('activeTranslation')
    const newLangAttr = flagBtn.getAttribute('language')
    content.forEach(element => {
        let className = element.getAttribute('class');
        element.textContent = data[newLangAttr][className]
    })
}


flagBtn.addEventListener('click', translate)


let data = {
    'polish': {
        'ques1': 'Szukasz nowego samochodu?',
        'ques2': 'Masz dość przeglądania ofert i nie wiesz na co się zdecydować?',
        'answer': 'Dobrze trafiłeś!',
        'aboutTitle': 'O Nas',
        'aboutDescription': 'Nasza firma zajmuje się kompleksową pomocą w kupnie aut na terenie Niemiec. Dzięki naszemu doświadczeniu nasi klienci mogą czuć się bezpiecznie powierzając nam znalezienie i  kupno swojego przyszłego samochodu. Ogromna pasja do motoryzacji która towarzyszy nam przy każdym zleceniu sprawia, że nasza działalność to nie tylko praca ale również hobby i spełnienie marzeń. Naszą misją jest zapewnienie naszym klientom bezpiecznego podróżowania bezwypadkowymi i techniczne sprawnymi samochodami. ',
        'whyWeTitle': 'Dlaczego my?',
        'whyWeDes': 'W dzisiejszych czasach kupno samochodu używanego wiąże się z ogromnym ryzykiem. Na rynku wtórnym można spotkać wiele ofert samochodów powypadkowych, popowodziowych i z ukrytymi wadami technicznymi. Kupno takiego samochodu jest nie tylko niebezpieczne dla nas i innych uczestników ruchu drogowego ale również bardzo kosztowne. Aby uniknąć rozczarowań i być pewnym kupionego samochodu zapraszamy do skorzystania z naszej usługi. ',
        'servicesTitle': 'Nasza usługa',
        'consulting': 'Doradztwo',
        'consultingDes': 'Po zgłoszeniu się do nas pomożemy skonfrontować Twoje oczekiwania z aktualną sytuacją na rynku aut używanych. Doradzimy również czy poszukiwany przez Ciebie samochód to możliwie najlepszy wybór wśród dostępnych marek i modeli.',
        'more': 'więcej',
        'consultingDesMore': 'Wybór odpowiedniego modelu samochodu dopasowanego do potrzeb i oczekiwań klienta to bardzo ważna kwestia. Dzięki temu unikniemy rozczarowań w warsztacie, irytacji podczas parkowania w centrum miasta lub zaskoczenia podczas tankowania. Kwestia wyposażenia samochodu nie powinna być również obojętna ponieważ to od niej zależy nasz komfort podróżowania nowym samochodem. Służymy również profesjonalnym doradztwem w kwestii finansowania.',
        'searchTitle': 'Znalezienie auta',
        'searchDes': 'Po ustaleniu jakiego modelu mamy dla Ciebie szukać zaczynamy proces poszukiwania wybranego samochodu. Na tym etapie możesz zrezygnować z osobistego przeglądania ofert, lecz dalsze uczestniczenie w tym procesie jest również możliwe.',
        'searchDesMore': 'Po znalezieniu interesującej oferty lub otrzymaniu jej od Ciebie, dokonamy wstępnej weryfikacji i rozmowy ze sprzedającym celem uzyskania jak najwięcej informacji o danym egzemplarzu. Następnie skonsultujemy z Tobą czy ten egzemplarz na pewno spełnia Twoje oczekiwania, jeśli odpowiedź jest pozytywna przechodzimy do etapu weryfikacji.',
        'verifTitle': 'Weryfikacja',
        'verifDes': 'Proces weryfikacji to najważniejszy i najtrudniejszy z etapów. Polega na sprawdzeniu historii samochodu w serwisie po wcześniejszym otrzymaniu numeru VIN, w bazie danych i ostatecznie kontroli stanu technicznego i wizualnego na miejscu. ',
        'verifDesMore': 'Za pośrednictwem dostępu do bazy danych sprawdzamy czy pojazd widnieje w bazie pojazdów skradzionych, czy auto posiada historię uszkodzeń i czy wpisy stanu licznika odpowiadają rzeczywistemu przebiegowi z oferty. Po pomyślnej wstępnej weryfikacji czas na oględziny samochodu na miejscu. Podczas oględzin zostanie dokonana kontrola: grubości lakieru na całej karoserii, stanu szyb, stanu ogumienia, stanu układu hamulcowego, szczelności silnika, poziomu płynów ustrojowych i sprawności wyposażenia wnętrza. Podczas jazdy próbnej zostanie oceniony stan techniczny układu napędowego, hamulcowego i zawieszenia. Dodatkowo stan wizualny zostanie uwieczniony na zdjęciach i w miarę możliwości również kilkoma nagraniami wideo. Następnie wszystkie informację zostają przekazane klientowi.',
        'moneyTitle': 'Oszczędność',
        'moneyDes': 'Jedną z korzyści płynących ze skorzystania z naszych usług to duża oszczędność czasu, pieniędzy i nerwów.',
        'moneyDesMore': 'Dzięki nam oszczędzisz wiele czasu na przeglądaniu ofert i oglądaniu aut które na miejscu okazują się mocno odbiegać stanem od tych ze zdjęć sprzedawcy. Nasze doświadczenie w branży motoryzacyjnej i znajomość rynku oszczędzi Ci również nerwów związanych z kontaktem ze sprzedającym a ostatecznie kupienie sprawdzonego przez nas auta uchroni przed niechcianymi wydatkami.',
        'contactTitle': 'Wzbudziliśmy Twoje zainteresowanie?',
        'contactTitleTwo': 'Zapraszamy do kontaktu odpowiemy na każde pytanie.',
    }
}