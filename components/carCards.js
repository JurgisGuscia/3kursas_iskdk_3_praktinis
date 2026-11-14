export function CarCards({ page = '' }) {
  return `
    <div class="
      w-full h-[40px]
      flex flex-row flex-nowrap
      justify-between items-center
    ">
      <div class="
        font-bold text-[2rem]
        max-[767px]:text-[1.5rem]
      ">
        ${page == 'home' ? 'Atrinkti pasiūlymai' : 'Siūlomi automobiliai'}
      </div>

      <div class="max-[991px]:hidden">
        ${
          page == 'home'
            ? `
          <a href="cars.html"
             class="
               no-underline text-[var(--blueAccent)]
               text-[0.8rem] font-bold
             ">
            Peržiūrėti visus pasiūlymus
            <span>→</span>
          </a>
        `
            : ''
        }
      </div>
    </div>

    <div
      id="cardListWrapper"
      class="
        w-full flex flex-row flex-wrap
        justify-between items-start
        gap-[20px]
        min-[992px]:max-[1199px]:gap-0
      "
    ></div>
  `;
}

const response = await fetch('../data/cars.json');
const data = await response.json();

export async function loadCarCards({ page, limit } = {}) {
  let formattedList = data;

  if (page == 'home') {
    formattedList = data
      .filter((car) => car.popular == true)
      .sort((a, b) => b.monthlyPrice - a.monthlyPrice)
      .slice(0, limit);
  }

  const container = document.querySelector('#cardListWrapper');

  container.innerHTML = formattedList
    .map(
      (car) => `
        <div
          onclick="window.location.href='carInfo.html?id=${car.id}'"
          class="
            relative overflow-hidden
            w-[390px] h-[350px]
            rounded-t-[5px]
            transition-transform duration-150 ease-in-out
            hover:scale-[1.02] hover:cursor-pointer
            max-[767px]:w-full
            min-[768px]:max-[991px]:w-[370px]
            min-[992px]:max-[1199px]:w-[325px]
          "
        >

          ${
            car.popular
              ? `
            <div class="
              absolute z-20 top-[20px] left-[20px]
              bg-[#0e1725]
              rounded-[10px]
              !px-[20px] !py-[5px]
              text-[var(--blueAccent)]
              text-[0.8rem] font-bold
            ">
              Populiariusias
            </div>
          `
              : ''
          }

          <img
            src="${car.image}"
            alt="${car.name}"
            class="w-full"
          >

          <div class="
            relative z-[3] top-[-5px]
            h-[130px] pt-[10px]
            border border-[var(--textColorBright)]
            rounded-b-[5px]
            bg-[#fdfdfd]
            max-[767px]:h-[125px]
          ">

            <!-- Car name and price -->
            <div class="
              w-full h-[38px]
              flex flex-row flex-nowrap
              justify-between items-center
              !px-[20px]
            ">

              <div class="
                flex flex-row flex-nowrap
                items-center justify-start
                h-full pl-[5px] gap-[10px]
                text-[1.3rem] font-bold
                min-[992px]:max-[1199px]:text-[0.9rem]
              ">
                ${car.name}
              </div>

              <div class="
                flex flex-row flex-nowrap
                items-center justify-end
                h-full pl-[5px] gap-[10px]
                text-[1.3rem] font-bold
                text-[var(--blueAccent)]
                min-[992px]:max-[1199px]:text-[0.9rem]
              ">
                ${car.monthlyPrice} € / mėn.
              </div>

            </div>

            <!-- Car specifications -->
            <div class="
              w-full h-[38px]
              flex flex-row flex-nowrap
              justify-between items-center
              !px-[20px]
            ">

              <div class="
                flex flex-row flex-nowrap
                items-center justify-start
                h-full pl-[5px] gap-[10px]
                min-[992px]:max-[1199px]:gap-[3px]
              ">
                <img
                  src="./icons/gas.png"
                  alt="Fuel"
                  class="w-[15px]"
                >

                <span class="
                  text-[var(--textColorBright)]
                  text-[0.7rem]
                ">
                  ${car.fuel}
                </span>
              </div>

              <div class="
                flex flex-row flex-nowrap
                items-center justify-start
                h-full pl-[5px] gap-[10px]
                min-[992px]:max-[1199px]:gap-[3px]
              ">
                <img
                  src="./icons/gearbox.png"
                  alt="Transmission"
                  class="w-[15px]"
                >

                <span class="
                  text-[var(--textColorBright)]
                  text-[0.7rem]
                ">
                  ${car.transmission}
                </span>
              </div>

              <div class="
                flex flex-row flex-nowrap
                items-center justify-start
                h-full pl-[5px] gap-[10px]
                min-[992px]:max-[1199px]:gap-[3px]
              ">
                <img
                  src="./icons/engine.png"
                  alt="Engine"
                  class="w-[15px]"
                >

                <span class="
                  text-[var(--textColorBright)]
                  text-[0.7rem]
                ">
                  ${car.powerKw} kW (${car.powerHp} AG)
                </span>
              </div>

            </div>

            <!-- View offer -->
            <div class="
              w-full h-[38px]
              flex flex-row flex-nowrap
              justify-between items-center
              !px-[20px]
            ">

              <span class="
                text-[var(--blueAccent)]
                text-[0.8rem] no-underline
              ">
                Peržiūrėti pasiūlymą
                <span>→</span>
              </span>

            </div>

          </div>
        </div>
      `,
    )
    .join('');
}
