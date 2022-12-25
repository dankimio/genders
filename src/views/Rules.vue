<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Rules'
})
</script>

<template>
  <div class="text-gray-900">
    <router-link to="/" class="block mb-2">
      ← Go back
    </router-link>

    <h1 class="text-4xl font-semibold mb-4">
      Rules
    </h1>

    <h2 class="text-2xl font-semibold mb-2">
      Masculine
    </h2>

    <table class="mb-8 table-auto text-sm xl:text-base">
      <thead>
        <tr>
          <th title="Ending" class="text-left">
            Ending
          </th>
          <th title="Words" class="text-right sm:w-24">
            Words
          </th>
          <th title="Precision" class="text-right sm:w-24 mr-4">
            Precision
          </th>
          <th title="Exceptions" class="text-left">
            Exceptions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-age</td>
          <td>964</td>
          <td>99%</td>
          <td>cage, plage, image, nage, page, rage</td>
        </tr>
        <tr>
          <td>-an</td>
          <td>104</td>
          <td>95%</td>
          <td>médian, maman</td>
        </tr>
        <tr>
          <td>-c</td>
          <td>128</td>
          <td>98%</td>
          <td>fac</td>
        </tr>
        <tr>
          <td>-d</td>
          <td>184</td>
          <td>97%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-eme</td>
          <td>51</td>
          <td>90%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-g</td>
          <td>83</td>
          <td>99%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-i</td>
          <td>216</td>
          <td>91%</td>
          <td>merci, fourmi, foi, loi</td>
        </tr>
        <tr>
          <td>-in</td>
          <td>293</td>
          <td>96%</td>
          <td>main, fin</td>
        </tr>
        <tr>
          <td>-is</td>
          <td>189</td>
          <td>93%</td>
          <td>brebis, fois, souris, oasis</td>
        </tr>
        <tr>
          <td>-iste</td>
          <td>147</td>
          <td>97%</td>
          <td>modiste, liste, piste</td>
        </tr>
        <tr>
          <td>-k</td>
          <td>48</td>
          <td>98%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-l</td>
          <td>389</td>
          <td>89%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-lon</td>
          <td>89</td>
          <td>98%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-m</td>
          <td>156</td>
          <td>97%</td>
          <td>faim</td>
        </tr>
        <tr>
          <td>-non</td>
          <td>35</td>
          <td>97%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-o</td>
          <td>186</td>
          <td>82%</td>
          <td>météo, dactylo, dynamo, steno, magnéto, moto</td>
        </tr>
        <tr>
          <td>-ome</td>
          <td>50</td>
          <td>96%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-r</td>
          <td>1556</td>
          <td>89%</td>
          <td>mer, chair, minceur, douceur, froideur, grandeur, profondeur, odeur, largeur, valeur, fleur, couleur, soeur, peur, vapeur, erreur, horreur, cour, tour</td>
        </tr>
        <tr>
          <td>-ron</td>
          <td>73</td>
          <td>100%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-sme</td>
          <td>407</td>
          <td>100%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-t</td>
          <td>1976</td>
          <td>98%</td>
          <td>forêt, nuit, dent, part, plupart</td>
        </tr>
        <tr>
          <td>-taire</td>
          <td>34</td>
          <td>94%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-ton</td>
          <td>65</td>
          <td>100%</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>-tre</td>
          <td>195</td>
          <td>87%</td>
          <td>fenêtre, huître, vitre, rencontre, montre, lettre</td>
        </tr>
        <tr>
          <td>-u</td>
          <td>332</td>
          <td>97%</td>
          <td>eau, peau, vertu</td>
        </tr>
        <tr>
          <td>-us</td>
          <td>100</td>
          <td>95%</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-2xl font-semibold mb-2">
      Feminine
    </h2>

    <table class="mb-8 table-auto text-sm xl:text-base">
      <thead>
        <tr>
          <th title="Ending" class="text-left">
            Ending
          </th>
          <th title="Words" class="text-right w-24">
            Words
          </th>
          <th title="Precision" class="text-right w-24 mr-4">
            Precision
          </th>
          <th title="Exceptions" class="text-left">
            Exceptions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-ade</td>
          <td>128</td>
          <td>95%</td>
          <td>jade, grade, stade</td>
        </tr>
        <tr>
          <td>-aison</td>
          <td>37</td>
          <td>100%</td>
          <td>none</td>
        </tr>
        <tr>
          <td>-ce</td>
          <td>500</td>
          <td>89%</td>
          <td>espace, crustace, exercice, bénéfice, office, artifice, précipice, dentifrice, armistice, vice, service, silence, prince, commerce, pouce</td>
        </tr>
        <tr>
          <td>-ee</td>
          <td>233</td>
          <td>89%</td>
          <td>lycée, périgée, trophée, pedigree, musée</td>
        </tr>
        <tr>
          <td>-ie</td>
          <td>1034</td>
          <td>98%</td>
          <td>incendie, cryptographie, périhélie, génie, foie, parapluie</td>
        </tr>
        <tr>
          <td>-iere</td>
          <td>110</td>
          <td>97%</td>
          <td>arrière, derrière, cimetière</td>
        </tr>
        <tr>
          <td>-ine</td>
          <td>277</td>
          <td>91%</td>
          <td>domaine, capitaine, ciné, pipeline, moine, patrimoine, magazine</td>
        </tr>
        <tr>
          <td>-ion</td>
          <td>1530</td>
          <td>97%</td>
          <td>ion, million, billion, camion, dominion, lampion, scorpion, espion, démilitarisation, antivivisection, bastion, attribution, avion</td>
        </tr>
        <tr>
          <td>-ite</td>
          <td>739</td>
          <td>94%</td>
          <td>trilobite, anthracite, plébiscite, gîte, graphite, satellite, théodolite, comité, ermite, termite, granite, rite, mérite, site, opposite</td>
        </tr>
        <tr>
          <td>-lle</td>
          <td>303</td>
          <td>87%</td>
          <td>intervalle, vermicelle, scelle, braille, mille, gorille, vaudeville</td>
        </tr>
        <tr>
          <td>-se</td>
          <td>533</td>
          <td>85%</td>
          <td>vase, malaise, suspense, sconse, opposé, exposé, gypse, inverse, colosse, carrosse, pamplemousse</td>
        </tr>
        <tr>
          <td>-tte</td>
          <td>327</td>
          <td>98%</td>
          <td>squelette</td>
        </tr>
        <tr>
          <td>-ude</td>
          <td>47</td>
          <td>94%</td>
          <td>prélude, interlude, coude</td>
        </tr>
        <tr>
          <td>-ure</td>
          <td>339</td>
          <td>90%</td>
          <td>dinosaure, centaure, kilowattheure, sulfure/nitrure/..., parjure, murmure, trichosure</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
th {
  @apply .border-b .pb-1
}
th, td {
  @apply .pr-2;
  vertical-align: top;
}
tr td:nth-child(2) {
  text-align: right;
}
tr td:nth-child(3) {
  text-align: right;
}
tr th:nth-child(4), tr td:nth-child(4) {
  padding-left: .5rem;
}
@screen md {
  tr th:nth-child(4), tr td:nth-child(4) {
    padding-left: 2rem;
  }
}
</style>
