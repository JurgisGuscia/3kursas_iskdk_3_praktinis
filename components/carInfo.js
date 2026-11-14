export function CarInfo() {
  const iconFilter =
    '[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]';

  const detailCard = `
    h-full w-[33%]
    flex flex-row flex-nowrap
    justify-start items-start
    max-[767px]:w-full
  `;

  const leftSide = `
    h-full w-[60px]
    flex justify-center items-center
  `;

  const iconWrapper = `
    w-[50px] h-[50px]
    flex flex-row flex-nowrap
    justify-center items-center
    bg-[#eff6fc] rounded-[50px]
    max-[767px]:w-[30px]
    max-[767px]:h-[30px]
  `;

  const iconClass = `
    w-[25px] h-[25px]
    max-[767px]:w-[20px]
    max-[767px]:h-[20px]
    ${iconFilter}
  `;

  const rightSide = `
    w-[180px] h-full
    flex flex-col
    justify-center items-start
    !pl-[20px]
  `;

  const topRow = 'max-[767px]:text-[0.8rem]';
  const botRow = 'font-bold max-[767px]:text-[0.8rem]';

  return `
    <h2 class="text-[2rem] font-extrabold">Automobilio informacija</h2>

    <img
      id="carImage"
      class="headImage w-full !mt-[20px] rounded-[10px]"
      src=""
      alt=""
    >

    <!-- Car information header -->
    <div class="
      infoHeader
      w-full h-[60px] mt-[30px]
      flex flex-row flex-nowrap
      justify-between items-center
    ">
      <h3
        id="carName"
        class="
          text-[2rem] font-extrabold
          max-[767px]:text-[1.2rem]
        "
      ></h3>

      <span
        id="carMonthlyPrice"
        class="
          text-[2rem] font-extrabold
          text-[var(--blueAccent)]
          max-[767px]:text-[1.2rem]
        "
      ></span>
    </div>

    <p
      id="carDescription"
      class="max-[767px]:text-[0.8rem]"
    ></p>

    <!-- Detail cards -->
    <div class="
      w-full h-[100px] !mt-[30px]
      flex flex-row flex-nowrap
      justify-between items-start
      border-2 border-[#edf3ff]
      rounded-[10px]
      max-[767px]:flex-col
      max-[767px]:h-auto
      max-[767px]:gap-[20px]
      !max-[767px]:py-[20px]
    ">

      <!-- Fuel -->
      <div class="
        detailCard
        ${detailCard}
        border-r-2 border-[#edf3ff]
      ">
        <div class="${leftSide}">
          <div class="${iconWrapper}">
            <img
              src="./icons/gas.png"
              alt="Fuel"
              class="${iconClass}"
            >
          </div>
        </div>

        <div class="${rightSide}">
          <div class="${topRow}">
            Kuro tipas
          </div>

          <div
            id="carFuel"
            class="botRow ${botRow}"
          ></div>
        </div>
      </div>

      <!-- Transmission -->
      <div class="
        detailCard
        ${detailCard}
        border-r-2 border-[#edf3ff]
      ">
        <div class="${leftSide}">
          <div class="${iconWrapper}">
            <img
              src="./icons/gear.png"
              alt="Transmission"
              class="${iconClass}"
            >
          </div>
        </div>

        <div class="${rightSide}">
          <div class="${topRow}">
            Pavarų dėžė
          </div>

          <div
            id="carTransmission"
            class="botRow ${botRow}"
          ></div>
        </div>
      </div>

      <!-- Engine -->
      <div class="detailCard ${detailCard}">
        <div class="${leftSide}">
          <div class="${iconWrapper}">
            <img
              src="./icons/engine.png"
              alt="Engine"
              class="${iconClass}"
            >
          </div>
        </div>

        <div class="${rightSide}">
          <div class="${topRow}">
            Galia
          </div>

          <div
            id="carPower"
            class="botRow ${botRow}"
          ></div>
        </div>
      </div>

    </div>
  `;
}
