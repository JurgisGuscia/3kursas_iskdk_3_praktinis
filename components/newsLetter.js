export function NewsLetter() {
  return `
    <h2 class="
      w-[85%]
      text-[1.2rem]
      mt-[20px] mb-[5px]
    ">
      Gaukite naujausius pasiūlymus
    </h2>

    <p class="
      w-[85%]
      text-[0.8rem]
      pr-[20px] mb-[10px]
    ">
      Užsiprenumeruokite ir pirmieji sužinokite apie naujus automobilius bei išskirtines sąlygas.
    </p>

    <form action="#" class="
      w-[85%]
      flex flex-col justify-start
      gap-[10px] mb-[20px]
    ">

      <input
        type="text"
        name="name"
        required
        placeholder="Jūsų vardas"
        class="
          w-full h-[35px]
          p-[5px]
          border-2 border-[#f5f5f5]
          rounded-[7px]
        "
      >

      <input
        type="email"
        name="email"
        required
        placeholder="El. pašto adresas"
        class="
          w-full h-[35px]
          p-[5px]
          border-2 border-[#f5f5f5]
          rounded-[7px]
        "
      >

      <button type="submit" class="
          w-full h-[35px]
          bg-[var(--blueAccent)]
          text-white
          border-0 rounded-[7px]
          cursor-pointer
          flex flex-row flex-nowrap
          items-center justify-center
          gap-[5px]
      ">
          Prenumeruoti

          <img
              src="./icons/right-arrow.png"
              alt=""
              class="w-[15px] invert"
          >
      </button>

    </form>
  `;
}
