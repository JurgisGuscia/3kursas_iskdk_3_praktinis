export function WhyUs() {
  return `
    <div class="
      flex w-[var(--baseWidth)] flex-row flex-nowrap
      items-center justify-between
      max-[767px]:w-full
      max-[767px]:flex-col
      max-[767px]:justify-center
    ">

      <div class="
        flex h-[60px] w-[360px] flex-row flex-nowrap
        items-center justify-start gap-[10px]
        border-r-2 border-[#edf3ff]
        max-[767px]:w-[240px]
        max-[767px]:border-0
        min-[768px]:max-[1199px]:w-[33%]
      ">

        <div class="
          flex h-[40px] w-[40px] shrink-0
          items-center justify-center
          rounded-[10px] bg-[#edf3ff]
        ">
          <img
            src="./icons/diamond.png"
            alt="Diamond"
            class="
              h-[25px] w-[25px]
              brightness-0 saturate-100
              invert-[31%] sepia-[99%] saturate-[3500%]
              hue-rotate-[211deg] brightness-[103%] contrast-[105%]
            "
          >
        </div>

        <div>
          <h3 class="text-[0.8rem]">
            Atrinkti premium automobiliai
          </h3>
          <p class="text-[0.6rem]">
            Tik patikimi ir patikrinti modeliai
          </p>
        </div>

      </div>

      <div class="
        flex h-[60px] w-[360px] flex-row flex-nowrap
        items-center justify-start gap-[10px]
        border-r-2 border-[#edf3ff]
        max-[767px]:w-[240px]
        max-[767px]:border-0
        min-[768px]:max-[1199px]:w-[33%]
      ">

        <div class="
          flex h-[40px] w-[40px] shrink-0
          items-center justify-center
          rounded-[10px] bg-[#edf3ff]
        ">
          <img
            src="./icons/security.png"
            alt="Security"
            class="
              h-[25px] w-[25px]
              brightness-0 saturate-100
              invert-[31%] sepia-[99%] saturate-[3500%]
              hue-rotate-[211deg] brightness-[103%] contrast-[105%]
            "
          >
        </div>

        <div>
          <h3 class="text-[0.8rem]">
            Lankstus finansavimas
          </h3>
          <p class="text-[0.6rem]">
            Sprendimai pagal jūsų poreikius
          </p>
        </div>

      </div>

      <div class="
        flex h-[60px] w-[360px] flex-row flex-nowrap
        items-center justify-start gap-[10px]
        max-[767px]:w-[240px]
        min-[768px]:max-[1199px]:w-[33%]
      ">

        <div class="
          flex h-[40px] w-[40px] shrink-0
          items-center justify-center
          rounded-[10px] bg-[#edf3ff]
        ">
          <img
            src="./icons/headphones.png"
            alt="Headphones"
            class="
              h-[25px] w-[25px]
              brightness-0 saturate-100
              invert-[31%] sepia-[99%] saturate-[3500%]
              hue-rotate-[211deg] brightness-[103%] contrast-[105%]
            "
          >
        </div>

        <div>
          <h3 class="text-[0.8rem]">
            Profesionali konsultacija
          </h3>
          <p class="text-[0.6rem]">
            Viso proceso metu ir po jo
          </p>
        </div>

      </div>

    </div>
  `;
}
