export function Contacts() {
  const iconFilter =
    '[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(99%)_saturate(3500%)_hue-rotate(211deg)_brightness(103%)_contrast(105%)]';

  const contactCard =
    'w-[32%] h-[210px] flex flex-col justify-start items-start !p-[20px] border-2 border-[#f5f5f5] rounded-[10px] max-[767px]:w-full';

  const iconWrapper =
    'w-[55px] h-[55px] shrink-0 flex justify-center items-center bg-[#eff6fc] rounded-[40px] !mb-[15px]';

  const contactHeading = 'text-[1rem] font-semibold';

  const contactValue =
    'text-[1rem] font-extrabold text-[var(--blueAccent)] !mt-[10px] min-[768px]:max-[991px]:text-[0.9rem] min-[992px]:max-[1199px]:text-[0.8rem]';

  const contactDetails =
    'flex flex-row flex-nowrap justify-between items-start gap-[10px] !mt-[10px] min-[768px]:max-[1199px]:text-[0.9rem] min-[992px]:max-[1199px]:text-[0.8rem]';

  const contactDetailIcon =
    'w-[15px] mt-[4px] min-[768px]:max-[1199px]:w-[13px] min-[768px]:max-[1199px]:mt-[2px]';

  const labelRow =
    'w-full h-[25px] !mt-[20px] flex flex-row flex-nowrap justify-between gap-[20px] max-[767px]:hidden';

  const inputRow =
    'w-full h-[40px] flex flex-row flex-nowrap justify-between gap-[20px] max-[767px]:h-auto max-[767px]:flex-col max-[767px]:justify-start max-[767px]:items-center';

  const inputClass =
    'w-[375px] h-full border-[3px] border-[#eaebee] rounded-[10px] p-[10px] max-[767px]:w-full max-[767px]:h-[40px]';

  const selectClass =
    'w-[375px] h-full border-[3px] border-[#eaebee] rounded-[10px] max-[767px]:w-full max-[767px]:h-[40px]';

  return `
    <!-- Header -->
    <div class="
      w-full flex flex-col
      justify-start items-start
    ">

      <h3 class="text-[var(--blueAccent)] mb-[15px]">
        KONTAKTAI
      </h3>

      <h1 class="
        w-[570px] text-[2.5rem] font-extrabold
        max-[767px]:text-[2rem]
        max-[767px]:w-full
      ">
        Susisiekime
      </h1>

      <p class="
        w-[700px] mt-[30px]
        text-[1.3rem] text-[#8b919d]
        max-[767px]:w-full
        max-[767px]:text-[0.8rem]
        min-[768px]:max-[991px]:w-full
      ">
        Turite klausimų apie automobilio lizingą, norite gauti individualų pasiūlymą ar pasikonsultuoti?
        Mūsų komanda visada pasiruošusi padėti.
      </p>

    </div>

    <!-- Contact cards -->
    <div class="
      w-full mt-[30px]
      flex flex-row flex-nowrap
      justify-between items-start
      max-[767px]:flex-col
      max-[767px]:gap-[20px]
    ">

      <!-- Phone -->
      <div class="${contactCard}">

        <div class="${iconWrapper}">
          <img
            src="./icons/phone.png"
            alt="Phone"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="${contactHeading}">
          Telefonas
        </h3>

        <h2 class="${contactValue}">
          +370 640 12345
        </h2>

        <p class="${contactDetails}">
          <img
            src="./icons/clock.png"
            alt=""
            class="${contactDetailIcon}"
          >
          <span class="w-[170px]">I-V 9:00 - 18:00</span>
        </p>

      </div>

      <!-- Email -->
      <div class="${contactCard}">

        <div class="${iconWrapper}">
          <img
            src="./icons/mail.png"
            alt="Mail"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="${contactHeading}">
          El. paštas
        </h3>

        <h2 class="${contactValue}">
          info@drivelease.lt
        </h2>

        <p class="${contactDetails}">
          <img
            src="./icons/clock.png"
            alt=""
            class="${contactDetailIcon}"
          >
          <span class="w-[170px]">Atsakome per 24 val.</span>
        </p>

      </div>

      <!-- Address -->
      <div class="${contactCard}">

        <div class="${iconWrapper}">
          <img
            src="./icons/location.png"
            alt="Location"
            class="w-[30px] h-[30px] ${iconFilter}"
          >
        </div>

        <h3 class="${contactHeading}">
          Mūsų adresas
        </h3>

        <h2 class="${contactValue}">
          Konstitucijos pr. 21, Vilnius
        </h2>

        <p class="${contactDetails}">
          <img
            src="./icons/clock.png"
            alt=""
            class="${contactDetailIcon}"
          >
          <span class="w-[170px]">
            Lankytojus priimame I-V 10:00 - 17:00
          </span>
        </p>

      </div>

    </div>

    <!-- Contact form -->
    <div class="
      w-full !mt-[10px] !p-[20px]
      flex flex-col justify-start items-start
      bg-[#fafbff]
      border-2 border-[#f5f5f5]
      rounded-[10px]
    ">

      <h2 class="text-[2rem] font-extrabold">
        Parašykite mums
      </h2>

      <p class="
        mt-[10px] text-[1rem] text-[#8a8c91]
        max-[767px]:mb-[10px]
      ">
        Užpildykite formą ir mes su jumis susisieksime artimiausiu metu.
      </p>

      <form
        id="contactForm"
        action="#"
        class="
          w-full
          max-[767px]:flex
          max-[767px]:flex-col
          max-[767px]:justify-start
          max-[767px]:items-center
          max-[767px]:gap-[20px]
        "
      >

        <!-- Name and email labels -->
        <div class="${labelRow}">
          <label for="fullName" class="inline-block w-[375px] h-full">
            Vardas ir pavardė <span class="text-red-500">*</span>
          </label>

          <label for="email" class="inline-block w-[375px] h-full">
            El. paštas <span class="text-red-500">*</span>
          </label>
        </div>

        <!-- Name and email inputs -->
        <div class="${inputRow}">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Jonas Jonaitis"
            autocomplete="name"
            aria-label="Vardas ir pavardė"
            required
            class="${inputClass}"
          >

          <input
            type="email"
            id="email"
            name="email"
            placeholder="jonas@pastas.lt"
            autocomplete="email"
            aria-label="El. paštas"
            required
            class="${inputClass}"
          >
        </div>

        <!-- Phone and service labels -->
        <div class="${labelRow}">
          <label for="phone" class="inline-block w-[375px] h-full">
            Telefono numeris
          </label>

          <label for="service" class="inline-block w-[375px] h-full">
            Dominanti paslauga
          </label>
        </div>

        <!-- Phone and service inputs -->
        <div class="${inputRow}">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+370 600 12345"
            autocomplete="tel"
            aria-label="Telefono numeris"
            class="${inputClass}"
          >

          <select
            id="service"
            name="service"
            aria-label="Dominanti paslauga"
            class="${selectClass}"
          >
            <option value="" selected disabled>
              Pasirinkite paslaugą
            </option>
            <option value="leasing">Automobilių lizingas</option>
            <option value="consultation">Konsultacija</option>
            <option value="offer">Individualus pasiūlymas</option>
            <option value="other">Kita</option>
          </select>
        </div>

        <!-- Message label -->
        <div class="${labelRow}">
          <label for="message" class="inline-block w-[375px] h-full">
            Jūsų žinutė <span class="text-red-500">*</span>
          </label>
        </div>

        <!-- Message -->
        <textarea
          id="message"
          name="message"
          placeholder="Parašykite savo klausimą ar žinutę..."
          aria-label="Jūsų žinutė"
          rows="5"
          maxlength="1000"
          required
          class="
            w-full h-[150px]
            border-[3px] border-[#eaebee]
            rounded-[10px]
            p-[10px] resize-none
          "
        ></textarea>

        <!-- Submit button -->
        <button
          type="submit"
          class="
            w-full h-[40px] mt-[20px]
            flex justify-center items-center
            bg-[var(--blueAccent)]
            text-white
            border-0 rounded-[10px]
            cursor-pointer
          "
        >
          Siųsti žinutę
        </button>

      </form>
    </div>

    <!-- Location -->
    <div class="
      w-full !mt-[30px] !p-[20px]
      border-2 border-[#f5f5f5]
      rounded-[10px]
    ">

      <h2 class="mb-[20px]">
        Kur mus rasti
      </h2>

      <div class="
        w-full rounded-[10px] overflow-hidden
      ">
        <iframe
          title="DriveLease vieta žemėlapyje"
          width="100%"
          height="300"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Konstitucijos%20pr.%2021%2C%20Vilnius%2C%20Vilniaus%20m.%20sav.%2C%20Lietuva&maptype=roadmap"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>

    </div>
  `;
}
