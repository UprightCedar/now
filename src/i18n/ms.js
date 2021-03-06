//! now.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

export default {
  months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
  monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
  weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
  weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
  weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
  longDateFormat: {
    LT: 'HH.mm',
    LTS: 'HH.mm.ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY [pukul] HH.mm',
    LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
  },
  meridiemParse: /pagi|tengahari|petang|malam/,
  meridiemHour(hour, meridiem) {
    let h = hour;
    if (h === 12) {
      h = 0;
    }
    if (meridiem === 'pagi') {
      return h;
    } else if (meridiem === 'tengahari') {
      return h >= 11 ? h : h + 12;
    } else if (meridiem === 'petang' || meridiem === 'malam') {
      return h + 12;
    }
    return h;
  },
  meridiem(hours) {
    if (hours < 11) {
      return 'pagi';
    } else if (hours < 15) {
      return 'tengahari';
    } else if (hours < 19) {
      return 'petang';
    }
    return 'malam';
  },
  calendar: {
    sameDay: '[Hari ini pukul] LT',
    nextDay: '[Esok pukul] LT',
    nextWeek: 'dddd [pukul] LT',
    lastDay: '[Kelmarin pukul] LT',
    lastWeek: 'dddd [lepas pukul] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'dalam %s',
    past: '%s yang lepas',
    s: 'beberapa saat',
    m: 'seminit',
    mm: '%d minit',
    h: 'sejam',
    hh: '%d jam',
    d: 'sehari',
    dd: '%d hari',
    M: 'sebulan',
    MM: '%d bulan',
    y: 'setahun',
    yy: '%d tahun',
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 7, // The week that contains Jan 1st is the first week of the year.
  },
};
