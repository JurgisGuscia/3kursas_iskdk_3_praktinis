export function Header() {
  return `
    <div class="
      hidden min-[1200px]:block
      absolute left-0 z-[2] h-full
      w-[clamp(30%,calc(100vw-2200px),35%)]
      bg-[linear-gradient(to_right,#030d16_80%,transparent_100%)]
    "></div>

    <div class="
      w-[var(--baseWidth)]
      max-[767px]:w-[400px]
      max-[767px]:h-full
      min-[768px]:max-[991px]:w-[768px]
      min-[992px]:max-[1199px]:w-[992px]
    ">

      <div class="
        relative z-[5] flex flex-col justify-center
        items-start gap-[20px] w-[385px] text-white
        max-[767px]:items-center
        max-[767px]:h-full
        max-[767px]:w-[400px]
        max-[767px]:gap-[60px]
      ">

        <h3 class="
          text-[0.5rem] font-thin tracking-[8px]
          max-[767px]:text-[0.6rem]
        ">
          PREMIUM AUTOMOBILIŲ LIZINGAS
        </h3>

        <h1 class="
          text-[3.5rem] font-semibold
          max-[767px]:text-[3rem]
          max-[767px]:text-center
          max-[767px]:mb-[20px]
        ">
          Jūsų kelionė
          <span class="text-[var(--blueAccent)]">
            prasideda čia
          </span>
        </h1>

        <p class="
          text-[0.9rem]
          max-[767px]:hidden
        ">
          Atrinkti premium klasės automobiliai, lankstus finansavimas
          ir profesionali konsultacija. <br>
          Daugiau nei tik lizingas - tai jūsų laisvė jdėti pirmyn.
        </p>

        <a href="cars.html"
           class="
             flex flex-row flex-nowrap items-center justify-center
             gap-[10px]
             w-[220px] h-[50px]
             rounded-[7px] border-0
             bg-[linear-gradient(to_right,#0063fe_30%,#0183fb_50%,#0063fe_70%)]
             text-white text-[1rem] no-underline
             cursor-pointer
           ">
          Atrasti automobilius

          <img
            src="./icons/right-arrow.png"
            alt="Right arrow"
            class="w-[15px] invert"
          >
        </a>

      </div>
    </div>

    <div class="
      hidden min-[1200px]:block
      absolute right-0 z-[2] h-full
      w-[clamp(20%,calc(100vw-2200px),35%)]
      bg-[linear-gradient(to_left,#030d16_80%,transparent_100%)]
    "></div>
  `;
}
