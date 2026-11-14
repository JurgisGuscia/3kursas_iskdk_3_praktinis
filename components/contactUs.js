export function ContactUs() {
  return `
    <img
      src="./img/man.png"
      alt="Man in a suit"
      class="
        absolute z-[2]
        w-[200px] right-[-10px] top-[10px]
        min-[768px]:max-[991px]:w-[300px]
        min-[768px]:max-[991px]:top-0
        min-[768px]:max-[991px]:right-[20px]
        min-[992px]:max-[1199px]:w-[130px]
        min-[992px]:max-[1199px]:top-[65px]
      "
    >

    <h2 class="
      text-white text-[2rem] w-[100px]
      min-[768px]:max-[991px]:w-[400px]
    ">
      Padėsime išsirinkti
    </h2>

    <p class="
      text-[var(--textColorBright)]
      text-[0.9rem] w-[200px]
      mt-[10px] mb-[25px]
      min-[768px]:max-[991px]:w-[400px]
    ">
      Asmeninė konsultacija, atsakymai į visus klausimus
      ir geriausias pasiūlymas pagal jūsų poreikius.
    </p>

    <a href="#"
       class="
         text-[var(--blueAccent)]
         no-underline
       ">
      Susisiekti
      <span class="text-[1.5rem] ml-[5px]">→</span>
    </a>
  `;
}
