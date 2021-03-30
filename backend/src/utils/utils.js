const Funcs = {
  hourToMinute: function (hour) {
    if (hour === undefined || hour === null || hour === '') return 0;

    let splited = String(hour).split(':');
    if (splited.length !== 2) return 0;

    if (splited[0] === '00') {
      splited[0] = 0;
    }

    if (splited[1] === '00') {
      splited[1] = 0;
    }

    return Number(splited[0] * 60) + Number(splited[1]);
  },
};

module.exports = Funcs;
