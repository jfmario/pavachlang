
<template>
  <table class="table">
    <thead>
      <tr>
        <th>Character</th>
        <th>Name</th>
        <th>Transliteration</th>
        <th>Sound</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><PavachText :size="20" text="m" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>m&#x0101;n</i></td>
        <td><b><i>m</i></b></td>
        <td><b>m</b>ake, e<b>m</b>erge, sla<b>m</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="n" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>nam</i></td>
        <td><b><i>n</i></b></td>
        <td><b>n</b>eglect, ba<b>n</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="ng" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x014b;e&#x014b;</i></td>
        <td><b><i>&#x014b;</i></b></td>
        <td>bri<b>ng</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="p" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>p&#x0101;b</i></td>
        <td><b><i>p</i></b></td>
        <td><b>p</b>lan, cla<b>p</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="b" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>bap</i></td>
        <td><b><i>b</i></b></td>
        <td><b>b</b>ack, cra<b>b</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="t" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>t&#x0101;d</i></td>
        <td><b><i>t</i></b></td>
        <td><b>t</b>able, fla<b>t</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="d" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>dat</i></td>
        <td><b><i>d</i></b></td>
        <td><b>d</b>ead, bea<b>d</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="k" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>k&#x0101;g</i></td>
        <td><b><i>k</i></b></td>
        <td><b>c</b>ult, bla<b>ck</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="g" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>gak</i></td>
        <td><b><i>g</i></b></td>
        <td><b>g</b>ullible, ba<b>g</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="kk" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x1d0b;&#x0101;&#x0262;</i></td>
        <td><b><i>&#x1d0b;</i></b></td>
        <td>More guttural "k" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="gg" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0262;a&#x1d0b;</i></td>
        <td><b><i>&#x0262;</i></b></td>
        <td>More guttural "g" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="s" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>s&#x0101;z</i></td>
        <td><b><i>s</i></b></td>
        <td><b>s</b>ay, ga<b>s</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="z" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>zas</i></td>
        <td><b><i>z</i></b></td>
        <td><b>z</b>ebra, bla<b>z</b>e</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="sh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0161;&#x0101;&#x017e;</i></td>
        <td><b><i>&#x0161;</i></b></td>
        <td><b>sh</b>eep, ba<b>sh</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="zh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x017e;a&#x0161;</i></td>
        <td><b><i>&#x017e;</i></b></td>
        <td>vi<b>s</b>u</b>al</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="f" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>f&#x0101;v</i></td>
        <td><b><i>f</i></b></td>
        <td><b>f</b>amily, lau<b>gh</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="v" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>vaf</i></td>
        <td><b><i>v</i></b></td>
        <td><b>v</b>ideo, ca<b>v</b>e</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="th" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x03b8;&#x0101;&#x00f0;</i></td>
        <td><b><i>&#x03b8;</i></b></td>
        <td><b>th</b>ink, ba<b>th</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="dh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x00f0;a&#x03b8;</i></td>
        <td><b><i>&#x00f0;</i></b></td>
        <td><b>th</b>e, fa<b>th</b>er</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="kh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0137;&#x0101;&#x0123;</i></td>
        <td><b><i>&#x0137;</i></b></td>
        <td>The "kh" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="gh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0123;a&#x0137;</i></td>
        <td><b><i>&#x0123;</i></b></td>
        <td>The "gh" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="ch" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x010d;&#x0101;j</i></td>
        <td><b><i>&#x010d;</i></b></td>
        <td><b>ch</b>urch</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="j" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>ja&#x010d;</i></td>
        <td><b><i>j</i></b></td>
        <td><b>j</b>ustice</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="h" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>heh</i></td>
        <td><b><i>h</i></b></td>
        <td><b>h</b>atred, be<b>h</b>ave</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="hh" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x029c;&#x0101;w</i></td>
        <td><b><i>&#x029c;</i></b></td>
        <td>Heavier "h"</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="w" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>w&#x0101;&#x029c;</i></td>
        <td><b><i>w</i></b></td>
        <td><b>w</b>est, be<b>w</b>are</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="r" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>r&#x0101;l</i></td>
        <td><b><i>r</i></b></td>
        <td><b>r</b>egulation, b<b>r</b>ag</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="rr" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0280;&#x0101;y</i></td>
        <td><b><i>&#x0280;</i></b></td>
        <td>rolled "r"</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="l" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>lar</i></td>
        <td><b><i>l</i></b></td>
        <td><b>l</b>ife, ye<b>ll</b>ow</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="y" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>ya&#x0280;</i></td>
        <td><b><i>y</i></b></td>
        <td><b>y</b>ellow, bou<b>y</b>ant</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="ts" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x02a6;&#x0101;&#x01f3;</i></td>
        <td><b><i>&#x02a6;</i></b></td>
        <td>Na<b>z</b>i, ra<b>ts</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="dz" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x01f3;a&#x02a6;</i></td>
        <td><b><i>&#x01f3;</i></b></td>
        <td>la<b>ds</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="tch" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x02a8;&#x0101;&#x02a4;</i></td>
        <td><b><i>&#x02a8;</i></b></td>
        <td>ra<b>tch</b>et, bo<b>tch</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="dj" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x02a4;a&#x02a8;</i></td>
        <td><b><i>&#x02a4;</i></b></td>
        <td><b>Dj</b>ibouti, bri<b>dge</b></td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="tl" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x026b;&#x0101;&#x0281;</i></td>
        <td><b><i>&#x026b;</i></b></td>
        <td>rat<b>tl</b>e, bot<b>tl</b>e</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="dr" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0281;a&#x026b;</i></td>
        <td><b><i>&#x0281;</i></b></td>
        <td><b>dr</b>ain</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="mr" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>o&#x019c;</i></td>
        <td><b><i>&#x019c;</i></b></td>
        <td>"mr" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="nl" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>o&#x0273;</i></td>
        <td><b><i>&#x0273;</i></b></td>
        <td>"nl" sound</td>
      </tr>
      <tr>
        <td><PavachText :size="20" text="?" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x0294;e&#x0294;</i></td>
        <td><b><i>&#x0294;</i></b></td>
        <td>glottal stop</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import PavachText from './PavachText.vue';

export default {
  components: { PavachText },
  props: ['consonants', 'vowels']
}
</script>