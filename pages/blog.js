import setup from "../setup.js";
import components from "../components/index.js";

const Blog = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
      <ul class="articles-list">
          <li><a href="/blog/kak-pravilno-zarjazhat-makbuk.html">Как правильно заряжать Macbook?</a></li>
          <li><a href="/blog/chto-delat-esli-po-iphone-ploho-slyshno-sobesednika.html">Что делать, если по iPhone плохо слышно собеседника?</a></li>
          <li><a href="/blog/chto-delat-esli-razbil-displej-iphone.html">Что делать, если разбил дисплей iPhone?</a></li>
          <li><a href="/blog/chto-takoe-cpo-i-raznica-s-kitajskim-refom.html">Что такое CPO и разница с китайским рефом</a></li>
          <li><a href="/blog/glavnye-problemy-iphone.html">Главные проблемы iPhone</a></li>
          <li><a href="/blog/hdd-i-ssd-v-chjom-raznica.html">HDD и SSD: в чем разница?</a></li>
          <li><a href="/blog/kakaja-problema-zarjadki-iphone-samaja-chastaja.html">Какая проблема зарядки iPhone самая частая?</a></li>
          <li><a href="/blog/kakoj-macbook-vybrat-fotografu.html">Какой Macbook выбрать фотографу?</a></li>
          <li><a href="/blog/ne-rabotajut-klavishi-na-makbuke-uvereny-chto-ne-zalivali.html">Не работают клавиши на Макбуке: уверены, что не заливали?</a></li>
          <li><a href="/blog/pomenjat-steklo-iphone.html">Поменять стекло iPhone</a></li>
          <li><a href="/blog/razbil-displej-na-makbuke-chto-delat.html">Разбил дисплей на Макбуке: что делать?</a></li>
          <li><a href="/blog/upgrade-macbook.html">Апгрейд Macbook</a></li>
          <li><a href="/blog/zamena-stekla-iphone.html">Замена стекла iPhone</a></li>
          <li><a href="/blog/zamena-ssd-na-macbook-air-i-macbook-pro-retina-kuda-obrashhatsja.html">Замена SSD на Macbook Air и Macbook Pro Retina</a></li>
          <li><a href="/blog/zamena-akkumuljatora-iphone-skolko-stoit-kogda-nuzhno-menjat.html">Замена аккумулятора iPhone: сколько стоит, когда нужно менять</a></li>
          <li><a href="/blog/zamena-displeja-na-iphone-chto-vybrat-i-kak-ne-popast-na-dengi.html">
            Замена дисплея на iPhone: что выбрать и как не попасть на деньги</a></li>
          <li><a href="/blog/v-iphone-popala-voda-sushka-v-rise-i-drugie-mifi.html">В iPhone попала вода: сушка в рисе и другие мифы</a></li>
          <li><a href="/blog/remont-iphone-posle-popadanija-vlagi-kak-proishodit-chto-delat.html">Ремонт iPhone после попадания влаги: как происходит, что делать</a></li>
          <li><a href="/blog/kakoj-iphone-vybrat-v-2020-godu.html">Какой iPhone выбрать в 2020 году?</a></li>
      </ul>
    `;

    return setup.html`
            <${Contacts} />
            <${Head} title="Блог" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default Blog;