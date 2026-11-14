export function AboutUs() {
  const iconFilter =
    '[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]';

  const statIconWrapper =
    'flex w-[55px] h-[55px] items-center justify-center rounded-[10px] bg-[#eff6fc]';
  const statLeft = 'h-full w-[100px] !pl-[20px] !pt-[20px]';
  const statRight = 'flex flex-col justify-start items-start !pt-[20px] !pb-[20px]';
  const statColumn = 'flex w-[272px] flex-row flex-nowrap justify-start items-start gap-[10px]';
  const benefitCard =
    'w-[30%] flex flex-col justify-start items-start !p-[20px] border-2 border-[#f5f5f5] rounded-[10px] max-[767px]:w-full';
  const benefitIcon =
    'flex w-[55px] h-[55px] items-center justify-center !mb-[15px] rounded-[10px] bg-[#eff6fc]';

  return `
    <!-- Header -->
    <div class="
      w-full flex flex-col
      justify-start items-start
      !mb-[20px]
    ">

      <h3 class="
        text-[var(--blueAccent)]
        mb-[15px]
      ">
        APIE MUS
      </h3>

      <h1 class="
        w-[570px] text-[2.5rem] font-extrabold
        max-[767px]:w-full
        max-[767px]:text-[1.5rem]
        
      ">
        Padedame lengviau išsirinkti ir įsigyti automobilį
      </h1>

      <p class="
        w-[700px] !mt-[30px]
        text-[1.3rem] text-[#8b919d]
        max-[767px]:w-full
        max-[767px]:text-[0.8rem]
        min-[992px]:max-[1199px]:w-full
        !mb-[20px]
      ">
        DRIVELEASE - tai patikimas jūsų partneris automiblių lizingo srityje. Padedame klientams greitai, aiškiai
        ir sklandžiai rasti tinkamiausius automobilio lizingo pasiūlymus. Mūsų tikslas - kad visas procesas
        būtų paprastas, suprantamas ir pritaikytas būtent jūsų poreikiams.
      </p>

      <div class="
        w-full flex flex-row flex-nowrap
        justify-start items-center
        gap-[40px] 
      ">

        <a href="cars.html"
           class="
             flex flex-row flex-nowrap
             justify-center items-center
             gap-[10px] !px-[30px] !py-[20px]
             rounded-[10px]
             bg-[var(--blueAccent)]
             text-white no-underline
             max-[767px]:w-full
           ">
          Peržiūrėti pasiūlymus

          <img
            src="./icons/right-arrow.png"
            alt=""
            class="w-[15px] invert"
          >
        </a>

        <a href="contacts.html"
           class="
             text-[var(--blueAccent)]
             font-bold no-underline
             max-[767px]:hidden
           ">
          Susisiekti
          <span class="text-[1.5rem] ml-[5px]">→</span>
        </a>

      </div>
    </div>

    <!-- Statistics dashboard -->
    <div class="
      w-full flex flex-row flex-nowrap
      items-start justify-center
      mt-[30px]
      rounded-[10px]
      border-2 border-[#f5f5f5]
      max-[767px]:flex-col
      max-[767px]:justify-start
      max-[767px]:items-center
    ">

      <div class="${statColumn}">
        <div class="${statLeft}">
          <div class="${statIconWrapper}">
            <img
              src="./icons/group.png"
              alt="Group"
              class="w-[40px] h-[40px] ${iconFilter}"
            >
          </div>
        </div>

        <div class="${statRight}">
          <h2 class="text-[2rem] font-extrabold">500+</h2>
          <h3 class="text-[1.1rem] font-extrabold">klientų</h3>
          <p class="
            mt-[20px] text-[0.9rem]
            text-[var(--textColorBright)]
          ">
            Mumis pasitiki šimtai klientų visoje Lietuvoje
          </p>
        </div>
      </div>

      <div class="
        ${statColumn}
        border-l-2 border-r-2 border-[#f5f5f5]
        max-[767px]:border-l-0
        max-[767px]:border-r-0
        max-[767px]:border-t-2
        max-[767px]:border-b-2
      ">
        <div class="${statLeft}">
          <div class="${statIconWrapper}">
            <img
              src="./icons/car.png"
              alt="Car"
              class="w-[40px] h-[40px] ${iconFilter}"
            >
          </div>
        </div>

        <div class="${statRight}">
          <h2 class="text-[2rem] font-extrabold">120+</h2>
          <h3 class="text-[1.1rem] font-extrabold">automobilių</h3>
          <p class="
            mt-[20px] text-[0.9rem]
            text-[var(--textColorBright)]
          ">
            Platus premium klasės automobilių pasirinkimas
          </p>
        </div>
      </div>

      <div class="${statColumn}">
        <div class="${statLeft}">
          <div class="${statIconWrapper}">
            <img
              src="./icons/star.png"
              alt="Star"
              class="w-[40px] h-[40px] ${iconFilter}"
            >
          </div>
        </div>

        <div class="${statRight}">
          <h2 class="text-[2rem] font-extrabold">10 metų</h2>
          <h3 class="text-[1.1rem] font-extrabold">patirties</h3>
          <p class="
            mt-[20px] text-[0.9rem]
            text-[var(--textColorBright)]
          ">
            Ilgametė patirtis automobilių lizingo srityje
          </p>
        </div>
      </div>

    </div>

    <!-- Why choose us -->
    <div class="
      w-full mt-[30px]
      flex flex-col
      justify-start items-start
      gap-[10px]
    ">
      <h2 class="
        text-[1.8rem] font-extrabold
        max-[767px]:text-[1.4rem]
      ">
        Kodėl verta rinktis DRIVELEASE?
      </h2>

      <p class="
        w-full text-[1.1rem] text-[#8b919d]
        max-[767px]:text-[0.8rem]
      ">
        Sujungiame patirtį, patikimus partnerius ir asmeninį požiūrį,
        kad galėtume jums pasiūlyti geriausius automobilių lizingo sprendimus.
      </p>
    </div>

    <!-- Benefits -->
    <div class="
      w-full mt-[20px]
      flex flex-row flex-nowrap
      justify-between items-start
      max-[767px]:flex-col
      max-[767px]:gap-[20px]
    ">

      <div class="${benefitCard}">
        <div class="${benefitIcon}">
          <img
            src="./icons/doc.png"
            alt="Document"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="
          mb-[15px] font-bold
          min-[992px]:max-[1199px]:text-[0.9rem]
        ">
          Aiškūs pasiūlymai
        </h3>

        <p class="
          w-[190px] text-[0.9rem]
          max-[767px]:w-full
          min-[992px]:max-[1199px]:w-full
          min-[992px]:max-[1199px]:h-[120px]
        ">
          Pateikiame aiškius ir suprantamus lizingo pasiūlymus be jokių paslėptų sąlygų.
          Visos sąlygos - skaidrios ir aiškios nuo pat pradžių.
        </p>
      </div>

      <div class="${benefitCard}">
        <div class="${benefitIcon}">
          <img
            src="./icons/gear.png"
            alt="Gear"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="
          mb-[15px] font-bold
          min-[992px]:max-[1199px]:text-[0.9rem]
        ">
          Patogus procesas
        </h3>

        <p class="
          w-[190px] text-[0.9rem]
          max-[767px]:w-full
          min-[992px]:max-[1199px]:w-full
          min-[992px]:max-[1199px]:h-[120px]
        ">
          Pasirūpiname visu procesu nuo paraiškos pateikimo iki automobilio atsiėmimo.
          Jums tereikia išsirinkti automobilį - visa kita paliekate mums.
        </p>
      </div>

      <div class="${benefitCard}">
        <div class="${benefitIcon}">
          <img
            src="./icons/partnership.png"
            alt="Partnership"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="
          mb-[15px] font-bold
          min-[992px]:max-[1199px]:text-[0.9rem]
        ">
          Patikimi partneriai
        </h3>

        <p class="
          w-[190px] text-[0.9rem]
          max-[767px]:w-full
          min-[992px]:max-[1199px]:w-full
          min-[992px]:max-[1199px]:h-[120px]
        ">
          Bendradarbiaujame su primaujančiais lizingo partneriais Lietuvoje,
          todėl galime pasiūlyti lankščius sprendimus ir geriausias sąlygas.
        </p>
      </div>

    </div>

    <!-- Our goal -->
    <div class="
      !mt-[10px] h-[300px]
      flex flex-row flex-nowrap
      justify-between items-start
      overflow-hidden rounded-[10px]
      max-[767px]:w-full
      max-[767px]:h-auto
      max-[767px]:flex-col
      min-[768px]:max-[991px]:w-full
    ">

      <div class="
        w-[500px] h-full
        bg-[url('./img/cars.png')]
        bg-center bg-cover
        max-[767px]:w-full
        max-[767px]:h-[300px]
        min-[992px]:max-[1199px]:w-[60%]
      "></div>

      <div class="
        w-[315px] h-full
        bg-[#f3f6fb]
        !py-[50px] !px-[30px]
        max-[767px]:w-full
        max-[767px]:h-auto
        min-[992px]:max-[1199px]:w-[40%]
      ">

        <h2 class="
          w-[250px]
          text-[1.7rem] font-extrabold
          mb-[20px]
        ">
          Mūsų tikslas - jūsų patogumas
        </h2>

        <p>
          Tikime, kad automobilio įsigijimas turi būti malonu patirtis,
          todėl nuolat tobuliname savo paslaugas ir ieškome geriausių
          sprendimų kienvienam klientui.
        </p>

      </div>
    </div>
  `;
}
