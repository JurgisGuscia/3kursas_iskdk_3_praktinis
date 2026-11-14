export function Navbar() {
  return `
    <div class="font-extrabold text-[1.4rem] min-[992px]:text-[1.9rem]">
      DRIVE<span class="text-[var(--blueAccent)]">LEASE</span>
    </div>

    <div class="relative flex w-[400px] flex-row flex-nowrap items-center justify-end min-[768px]:justify-between">

      <a href="index.html"
         class="hidden min-[768px]:block text-[var(--textColor)] no-underline font-bold text-[0.8rem] min-[992px]:text-[0.9rem]">
        Pagrindinis
      </a>

      <a href="cars.html"
         class="hidden min-[768px]:block text-[var(--textColor)] no-underline font-bold text-[0.8rem] min-[992px]:text-[0.9rem]">
        Automobiliai
      </a>

      <a href="aboutUs.html"
         class="hidden min-[768px]:block text-[var(--textColor)] no-underline font-bold text-[0.8rem] min-[992px]:text-[0.9rem]">
        Apie mus
      </a>

      <a href="contacts.html"
         class="hidden min-[768px]:block text-[var(--textColor)] no-underline font-bold text-[0.8rem] min-[992px]:text-[0.9rem]">
        Kontaktai
      </a>

      <div id="burgerWrapper"
           class="block h-[30px] min-[768px]:hidden">
        <img id="burgerere"
             src="./icons/burger.png"
             alt="Burger menu"
             class="w-[30px] cursor-pointer">
      </div>

      <ul id="phoneMenu"
          class="hidden absolute top-[35px] right-0 z-20 w-[250px] flex-col items-end justify-start overflow-hidden rounded-[10px] [&.show]:flex">

        <li class="flex h-[50px] w-[250px] flex-row flex-nowrap items-center justify-end border border-[var(--textColorBright)] bg-white pr-[10px]">
          <a href="index.html" class="text-[var(--textColor)] no-underline">
            Pagrindinis
          </a>
        </li>

        <li class="flex h-[50px] w-[250px] flex-row flex-nowrap items-center justify-end border border-[var(--textColorBright)] bg-white pr-[10px]">
          <a href="cars.html" class="text-[var(--textColor)] no-underline">
            Automobiliai
          </a>
        </li>

        <li class="flex h-[50px] w-[250px] flex-row flex-nowrap items-center justify-end border border-[var(--textColorBright)] bg-white pr-[10px]">
          <a href="aboutUs.html" class="text-[var(--textColor)] no-underline">
            Apie mus
          </a>
        </li>

        <li class="flex h-[50px] w-[250px] flex-row flex-nowrap items-center justify-end border border-[var(--textColorBright)] bg-white pr-[10px]">
          <a href="contacts.html" class="text-[var(--textColor)] no-underline">
            Kontaktai
          </a>
        </li>

      </ul>
    </div>

    <a href="contacts.html"
       class="hidden min-[768px]:flex h-[35px] min-[992px]:h-[40px] w-[150px] min-[992px]:w-[205px] flex-row flex-nowrap items-center justify-center gap-[10px] rounded-[7px] border-0 bg-[var(--blueAccent)] text-[0.8rem] min-[992px]:text-[0.9rem] text-white no-underline cursor-pointer">

      Gauti pasiūlymą

      <img class="w-[15px] invert"
           src="./icons/right-arrow.png"
           alt="Right arrow">
    </a>
  `;
}
