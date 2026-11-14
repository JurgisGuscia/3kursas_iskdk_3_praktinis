export function Footer() {
  return `
    <div class="
      w-[var(--baseWidth)]
      max-[767px]:w-[400px]
      min-[768px]:max-[991px]:w-[768px]
      min-[992px]:max-[1199px]:w-[992px]
      !pt-[20px]
      
    ">

      <!-- Footer top -->
      <div class="
        w-full flex flex-row flex-nowrap
        justify-between items-start
        pb-[25px] gap-x-[20px]
        border-b border-[#182535]
        max-[767px]:flex-wrap
        max-[767px]:gap-x-0
        max-[767px]:gap-y-[25px]
        !pb-[20px]
      ">

        <!-- Section 1: Logo and social media -->
        <div class="
          w-[350px] shrink-0 flex flex-col
          justify-start items-start gap-[6px]
          max-[1199px]:shrink
          max-[767px]:w-[49%]
        ">

          <div class="text-white text-[1.2rem] font-semibold mb-[10px]">
            DRIVE<span class="text-[var(--blueAccent)]">LEASE</span>
          </div>

          <p class="
            text-[var(--textColorBright)] text-[0.8rem]
            max-[767px]:hidden
          ">
            Premium automobilių lizingas Lietuvoje.
          </p>

          <p class="
            text-[var(--textColorBright)] text-[0.8rem]
            max-[767px]:hidden
          ">
            Jūsų patikimas partneris kelyje į naujas galimybes.
          </p>

          <div class="
            flex flex-row flex-nowrap justify-start
            items-center gap-[20px] w-full h-[30px] mt-[20px]
          ">
            <a href="#">
              <img src="./icons/facebook.png" alt="Facebook"
                   class="w-[20px] h-[20px] invert">
            </a>

            <a href="#">
              <img src="./icons/instagram.png" alt="Instagram"
                   class="w-[20px] h-[20px] invert">
            </a>

            <a href="#">
              <img src="./icons/linkedin.png" alt="LinkedIn"
                   class="w-[20px] h-[20px] invert">
            </a>

            <a href="#">
              <img src="./icons/youtube.png" alt="YouTube"
                   class="w-[20px] h-[20px] invert">
            </a>
          </div>
        </div>

        <!-- Section 2: Quick links -->
        <div class="
          w-[200px] flex flex-col
          justify-start items-start gap-[8px]
          max-[767px]:w-[49%]
          max-[767px]:items-end
        ">

          <h3 class="text-white text-[0.8rem] mb-[8px]">
            Greitos nuorodos
          </h3>

          <a href="index.html"
             class="text-[var(--textColorBright)] no-underline text-[0.8rem] max-[767px]:text-[1rem]">
            Pagrindinis
          </a>

          <a href="cars.html"
             class="text-[var(--textColorBright)] no-underline text-[0.8rem] max-[767px]:text-[1rem]">
            Automobiliai
          </a>

          <a href="aboutUs.html"
             class="text-[var(--textColorBright)] no-underline text-[0.8rem] max-[767px]:text-[1rem]">
            Apie mus
          </a>

          <a href="contacts.html"
             class="text-[var(--textColorBright)] no-underline text-[0.8rem] max-[767px]:text-[1rem]">
            Kontaktai
          </a>
        </div>

        <!-- Section 3: Contacts -->
        <div class="
          w-[200px] flex flex-col
          justify-start items-start gap-[8px]
          max-[767px]:w-[49%]
        ">

          <h3 class="text-white text-[0.8rem] mb-[8px]">
            Kontaktai
          </h3>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
          ">
            <img src="./icons/phone.png" alt=""
                 class="w-[15px] h-[15px] shrink-0 invert">

            <span class="
              text-[var(--textColorBright)] text-[0.8rem] ml-[5px]
            ">
              +370 640 12345
            </span>
          </div>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
          ">
            <img src="./icons/mail.png" alt=""
                 class="w-[15px] h-[15px] shrink-0 invert">

            <span class="
              text-[var(--textColorBright)] text-[0.8rem] ml-[5px]
            ">
              info@drivelease.lt
            </span>
          </div>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
          ">
            <img src="./icons/location.png" alt=""
                 class="w-[15px] h-[15px] shrink-0 invert">

            <span class="
              text-[var(--textColorBright)] text-[0.8rem] ml-[5px]
            ">
              Konstitucijos pr. 21, Vilnius
            </span>
          </div>
        </div>

        <!-- Section 4: Working hours -->
        <div class="
          w-[200px] flex flex-col
          justify-start items-start gap-[8px]
          max-[767px]:w-[49%]
          max-[767px]:items-end
        ">

          <h3 class="text-white text-[0.8rem] mb-[8px]">
            Darbo laikas
          </h3>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
            max-[767px]:justify-end
          ">
            <img src="./icons/clock.png" alt=""
                 class="w-[15px] h-[15px] shrink-0 invert">

            <span class="
              flex w-[20px] ml-[5px] justify-center
              text-[var(--textColorBright)] text-[0.8rem]
            ">I-V</span>

            <span class="
              ml-[5px] text-left whitespace-nowrap
              text-[var(--textColorBright)] text-[0.8rem]
            ">9:00 - 18:00</span>
          </div>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
            max-[767px]:justify-end
          ">
            <span class="w-[15px] shrink-0"></span>

            <span class="
              flex w-[20px] ml-[5px] justify-center
              text-[var(--textColorBright)] text-[0.8rem]
            ">VI</span>

            <span class="
              ml-[5px] text-left whitespace-nowrap
              text-[var(--textColorBright)] text-[0.8rem]
            ">10:00 - 15:00</span>
          </div>

          <div class="
            flex w-full min-h-[20px] flex-row flex-nowrap
            justify-start items-center
            max-[767px]:justify-end
          ">
            <span class="w-[15px] shrink-0"></span>

            <span class="
              flex w-[20px] ml-[5px] justify-center
              text-[var(--textColorBright)] text-[0.8rem]
            ">VII</span>

            <span class="
              ml-[5px] text-left whitespace-nowrap
              text-[var(--textColorBright)] text-[0.8rem]
            ">Nedirbame</span>
          </div>
        </div>
      </div>

      <!-- Footer bottom -->
      <div class="
        w-full min-h-[40px] mt-[16px] pb-[10px]
        flex flex-row flex-nowrap
        justify-between items-center
        !pb-[20px]
      ">

        <div class="
          flex w-[300px] items-center
          text-[var(--textColorBright)] text-[0.7rem]
          max-[767px]:w-auto
        ">
          © 2026 DriveLease. Visos teisės saugomos.
        </div>

        <div class="
          flex w-[400px] flex-row flex-nowrap
          justify-end items-center
          max-[767px]:w-auto
        ">
          <div class="
            flex w-[150px] justify-end items-center
            max-[767px]:w-auto
          ">
            <a href="privacyPolicy.html"
               class="
                 text-[var(--textColorBright)]
                 text-[0.7rem] text-right no-underline
               ">
              Privatumo politika
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}
