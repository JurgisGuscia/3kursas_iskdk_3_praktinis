export function PriceComparison() {
  return `
    <h2 class="font-extrabold mb-[10px] !pb-[10px]">
      Lizingo sąlygų palyginimas
    </h2>

    <table class="
        w-full
        border-2 border-[#e9ecf2]
        border-separate border-spacing-0
        rounded-[10px]
        overflow-hidden
        [&_tr]:h-[30px]
        [&_th]:bg-[#eaeff5]
        [&_th]:text-left
        [&_th]:px-[20px]
        [&_th]:py-[12px]
        [&_th]:text-[0.9rem]
        [&_th]:font-bold
        max-[767px]:[&_th]:text-[0.6rem]
        [&_td]:w-[25%]
        ![&_td]:px-[20px]
        [&_td]:py-[12px]
        max-[767px]:[&_td]:px-[8px]
        max-[767px]:[&_th]:px-[8px]
        max-[767px]:[&_td]:text-[0.5rem]
        [&_tbody_tr:nth-child(even)_td]:bg-[#e4f0fe]
        [&_tbody_tr:nth-child(odd)_td]:bg-[#f9fbfa]
    ">
      <thead>
        <tr>
          <th class="!px-[10px]">Laikotarpis</th>
          <th>Pradinis įnašas</th>
          <th>Mėnesio įmoka</th>
          <th>Bendra suma</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="!px-[10px]">36 mėnesiai</td>
          <td>10 %</td>
          <td>~ 620 €</td>
          <td>~ 51 840 €</td>
        </tr>

        <tr>
          <td class="!px-[10px]">48 mėnesiai</td>
          <td>10 %</td>
          <td>~ 450 €</td>
          <td>~ 53 960 €</td>
        </tr>

        <tr>
          <td class="!px-[10px]">60 mėnesių</td>
          <td>10 %</td>
          <td>~ 370 €</td>
          <td>~ 55 820 €</td>
        </tr>
      </tbody>
    </table>

    <p class="
      text-[0.8rem]
      mt-[10px]
      text-[var(--textColorBright)]
      max-[767px]:text-[0.6rem]
      !mt-[10px]
    ">
      * Pateiktos sumos yra preliminarios ir gali skirtis
      priklausomai nuo pasirinkto automobilio, jo įrangos
      bei jūsų kreditingumo.
    </p>
  `;
}
