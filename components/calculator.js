export function Calculator() {
  return `
    <div class="w-full h-[7px] shrink-0 bg-[var(--blueAccent)]"></div>

    <h2 class="w-[85%] text-left">
      Lizingo skaičiuoklė
    </h2>

    <p class="w-[85%] text-left text-[0.9rem]">
      Sužinokite preliminarią mėnesio įmoką
    </p>

    <label for="carPrice"
      class="flex w-[85%] flex-row flex-nowrap justify-between font-semibold">
      <span>Automobilio kaina:</span>
      <output id="priceValue" for="carPrice">30 000 €</output>
    </label>

    <input
      type="range"
      id="carPrice"
      min="10000"
      max="100000"
      step="1000"
      value="30000"
      class="w-[85%] accent-[#0c69ff] cursor-pointer"
    >

    <div class="
      flex w-[85%] justify-between
      text-[12px] text-[#728095]
    ">
      <span>10 000 €</span>
      <span>100 000 €</span>
    </div>

    <label for="leaseTerm" class="w-[85%] text-left">
      Laikotarpis
    </label>

    <select
      id="leaseTerm"
      class="
        box-border w-[85%] h-[50px]
        pl-[10px]
        border border-[#dbe2eb]
        rounded-[4px]
        bg-white text-[#102032]
        font-[inherit]
      "
    >
      <option value="36">36 mėnesiai</option>
      <option value="48">48 mėnesiai</option>
      <option value="60" selected>60 mėnesių</option>
    </select>

    <div class="
      w-[85%] !p-[16px]
      rounded-[4px] bg-[#eaf3fc]
      
    ">
      <span class="text-[1.1rem]">
        Mėnesio įmoka nuo
      </span>

      <div>
        <output
          id="paymentValue"
          for="carPrice leaseTerm"
          class="text-[3rem] font-bold"
        >
          450 €
        </output>
        <span>/ mėn.</span>
      </div>
    </div>

    <a
      href="contacts.html"
      class="
        flex w-[85%] h-[60px]
        flex-row flex-nowrap
        items-center justify-center
        gap-[10px] mb-[10px]
        border-0 rounded-[7px]
        bg-[var(--blueAccent)]
        text-white text-[1rem]
        no-underline cursor-pointer
      "
    >
      Gauti individualų pasiūlymą

      <img
        src="./icons/right-arrow.png"
        alt=""
        class="w-[15px] invert"
      >
    </a>
  `;
}
