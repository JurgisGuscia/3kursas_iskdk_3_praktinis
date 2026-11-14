export function WhyUsDash() {
  return `
    <h2 class="
      w-[85%] text-left font-semibold text-[1.5rem] mt-[20px]
    ">
      Kodėl DriveLease?
    </h2>

    <!-- Row 1 -->
    <div class="
      w-[85%] flex flex-row flex-nowrap
      justify-between items-start pt-[10px]
      min-[768px]:max-[991px]:justify-start
      min-[768px]:max-[991px]:gap-[20px] 
    ">

      <div class="
        w-[30px] h-[30px] shrink-0
        flex justify-center items-center
        bg-[#fcfcfc] rounded-[20px]
      ">
        <img
          src="./icons/diamond.png"
          alt=""
          class="
            w-[20px] h-[20px]
            [filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]
          "
        >
      </div>

      <div class="
        w-[260px] flex flex-col
        justify-start items-start
      ">
        <div class="text-[0.9rem] font-semibold shrink-0">
          Patikimi automobiliai
        </div>

        <div class="text-[0.75rem] text-[#728095] shrink-0">
          Tik kruopščiai atrinkti ir patikrinti modeliai.
        </div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="
      w-[85%] flex flex-row flex-nowrap
      justify-between items-start pt-[10px]
      min-[768px]:max-[991px]:justify-start
      min-[768px]:max-[991px]:gap-[20px]
    ">

      <div class="
        w-[30px] h-[30px] shrink-0
        flex justify-center items-center
        bg-[#fcfcfc] rounded-[20px]
      ">
        <img
          src="./icons/gear.png"
          alt=""
          class="
            w-[20px] h-[20px]
            [filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]
          "
        >
      </div>

      <div class="
        w-[260px] flex flex-col
        justify-start items-start
      ">
        <div class="text-[0.9rem] font-semibold shrink-0">
          Lankstūs sprendimai
        </div>

        <div class="text-[0.75rem] text-[#728095] shrink-0">
          Pritaikome lizingo sąlygas pries jūsų poreikių.
        </div>
      </div>
    </div>

    <!-- Row 3 -->
    <div class="
      w-[85%] flex flex-row flex-nowrap
      justify-between items-start pt-[10px]
      min-[768px]:max-[991px]:justify-start
      min-[768px]:max-[991px]:gap-[20px]
    ">

      <div class="
        w-[30px] h-[30px] shrink-0
        flex justify-center items-center
        bg-[#fcfcfc] rounded-[20px]
      ">
        <img
          src="./icons/group.png"
          alt=""
          class="
            w-[20px] h-[20px]
            [filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]
          "
        >
      </div>

      <div class="
        w-[260px] flex flex-col
        justify-start items-start
      ">
        <div class="text-[0.9rem] font-semibold shrink-0">
          Profesionali komanda
        </div>

        <div class="text-[0.75rem] text-[#728095] shrink-0">
          Konsultuojame nuo pasirinkimo iki sutarties pasirašymo ir vėliau.
        </div>
      </div>
    </div>
  `;
}
