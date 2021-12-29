import setup from "../setup.js";
import components from "../components/index.js";

const HomePage = () => {
    const { Article, Head, Contacts } = components;

    const text = setup.html`
      <p>Современный рынок всемирно известной техники Apple из года в год пополняется новыми моделями, радующими своих поклонников. Гаджеты крупной корпорации отличаются своей надежностью, вводимыми новшествами, делающими работу с ними удобной и практичной. Разобравшись со всем функционалом, потребители годами остаются преданными поклонниками Apple!</p>
      <p>Несмотря на высокие стандарты качества, даже надежные аппараты могут выйти из строя, редко встречается незначительный заводской брак, требующий срочного устранения. Держа в руках неисправную аппаратуру, владельцы спешат обратиться в сервисный центр.</p>
      <p>Выбор компании всегда сопряжен с некоторыми опасениями, например, надежностью фирмы, качеством проводимых мероприятий, выполнением гарантийных обязательств и т.д. Здесь важно сделать верный выбор, ведь не все сервисные центры имеют возможность проводить профессиональный ремонт/диагностику с продуктами от Apple.</p>
      <h2>Предоставляемые услуги</h2>
      <p>«IRON» – компания, которой удается решать невероятно сложные, порой невыполнимые задачи. Работая более 7 лет на рынке, нашими специалистами задаются высокие стандарты обслуживания, ремонта и диагностики всех товаров, выпущенных компанией Apple.</p>
      <p>Наша специализация:</p>
      <ul>
        <li>Выполнение диагностики любого оборудования Apple.</li>
        <li>Ремонт телефонов, планшетов, системных блоков, моноблоков.</li>
        <li>Решение самых «безнадежных» проблем и повреждений.</li>
        <li>Проведение гарантийного и пост гарантийного обслуживания.</li>
        <li>Выдача технических заключений.</li>
      </ul>
      <p>Кроме того, у нас можно найти любой аксессуар, подходящий вашему гаджету, подобрать который помогут квалифицированные сотрудники. Для более полной информации вы всегда можете – перезвонить нам для получения детальной консультации по вашему устройству.</p>
      <h2>Iron Service</h2>
      <p>Имеет отличную репутацию, что подтверждается внушительной клиентской базой. Причины, по которым стоит сотрудничать с нами:</p>
      <ul>
        <li>«IRON» является специализированной ремонтной мастерской, выполняющей ремонт техники Apple.</li>
        <li>Проводим проверку качества выполненного ремонта компьютерной аппаратуры, мобильных устройств и прочей электроники, что подтверждает соответствующий сертификат.</li>
        <li>Выдаем технические заключения.</li>
      </ul>
      <p>Наши специалисты советуют всем обратившимся обращаться бережно к любому оборудованию, ведь даже незначительные механические воздействия могут стать причиной серьезных неисправностей.</p>
      <p>Мы ценим своих клиентов, готовы войти в положение каждого, безотлагательно приступить к срочному ремонту, если это вопрос острой необходимости. Все выполняемые работы нашими специалистами высокого качества. Длительность ремонта определяется после визуального осмотра техники или диагностики.</p>
      <p>Время для клиентов пролетит незаметно в уголке ожидания, где также можно выпить чай или свежезаваренный кофе.</p>
      <h2>Полезные статьи</h2>
      <p>В нашем блоге много интересного о технике Apple про ремонт и не только:</p>
      <ul>
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
          <li><a href="/blog/remont-ajfonov.html">Ремонт iPhone</a></li>
          <li><a href="/blog/remont-apple.html">Ремонт Apple</a></li>
          <li><a href="/blog/remont-imac.html">Ремонт iMac</a></li>
          <li><a href="/blog/remont-ipad.html">Ремонт iPad</a></li>
          <li><a href="/blog/remont-ipad-air.html">Ремонт iPad Air</a></li>
          <li><a href="/blog/remont-ipad-mini.html">Ремонт iPad Mini</a></li>
          <li><a href="/blog/remont-ipad-pro.html">Ремонт iPad Pro</a></li>
          <li><a href="/blog/remont-makbuk.html">Ремонт Macbook</a></li>
          <li><a href="/blog/remont-makbuk-retina.html">Ремонт Macbook Retina</a></li>
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
            <${Head} title="Специализированный сервисный центр по ремонту техники Apple" />
            <${Article} text=${text} />
            <${Contacts} />
        `;
}

export default HomePage;