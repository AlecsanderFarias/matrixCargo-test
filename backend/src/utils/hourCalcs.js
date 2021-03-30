const fns = require('date-fns');

const Calcs = {
  //Retorna index da semana que deve ser usado
  //day: dia do ponto
  //weeks: vetor de semanas do turno;
  getWeek: function (day, weeks) {
    let weeksLenght = weeks.length;
    let numberOfWeek = fns.getWeekOfMonth(new Date(day));

    let j = 0;

    for (let i = 1; i < numberOfWeek; i++) {
      if (j === weeksLenght - 1) {
        j = 0;
      } else {
        j += 1;
      }
    }
    return j;
  },
  //Retorna quantidade de horas que trabalhou
  //did: objeto com entrada e saida do ponto
  //requireds: vetor de turnos do dia.
  //isFeriado: Boolean, considerar feriado
  calculateTime: function (did, requireds, isFeriado) {
    let extra = {
      morning: 0,
      night: 0,
      holidayMorning: 0,
      holidayNight: 0,
    };
    let required = { morning: 0, night: 0 };

    let i = did.enterTime;

    while (i < did.leaveTime) {
      let flag = false; //é hora requerida

      requireds.map((item) => {
        if (i >= item.enterTime && i < item.leaveTime) {
          flag = true;
        }
      });

      if (flag) {
        //é hora requerida
        if (i >= 360 && i < 1200) {
          required.morning = required.morning + 1;
        } else {
          required.night = required.night + 1;
        }
      } else {
        if (i >= 360 && i < 1200) {
          isFeriado
            ? (extra.holidayMorning = extra.holidayMorning + 1)
            : (extra.morning = extra.morning + 1);
        } else {
          isFeriado
            ? (extra.holidayNight = extra.holidayNight + 1)
            : (extra.night = extra.night + 1);
        }
      }

      i++;
    }
    return {
      extra,
      required,
    };
  },
  //Retorna objeto com o salario calculado por hora de todos os periodos
  //salary:  objeto contendo salario do usuario({base, night,extra:{morning, night, holidayMorning, holidayNight}})
  //hour:  objeto contendo as horas do ponto do usuario({morning, night,extra:{morning, night, holidayMorning, holidayNight}})
  calcMoney: function (salary, hour) {
    const { extra, base, night } = salary;
    const { required } = hour;

    if (!salary) {
      return {
        total: 0,
        night: 0,
        morning: 0,
        extra: { night: 0, morning: 0, holidayNight: 0, holidayMorning: 0 },
      };
    } else {
      return {
        night:
          Math.ceil(required.night * (base / 30 / 8 / 60 - night / 60) * 100) /
          100,
        morning:
          Math.ceil(
            (required.morning + required.night) * (base / 30 / 8 / 60) * 100
          ) / 100,
        extra: {
          night: Math.ceil((extra.night / 60) * hour.extra.night * 100) / 100,
          morning:
            Math.ceil((extra.morning / 60) * hour.extra.morning * 100) / 100,
          holidayNight:
            Math.ceil(
              (extra.holidayNight / 60) * hour.extra.holidayNight * 100
            ) / 100,
          holidayMorning:
            Math.ceil(
              (extra.holidayMorning / 60) * hour.extra.holidayMorning * 100
            ) / 100,
        },
      };
    }
  },

  calcRemuneratedTime: function (days, shift) {
    let hours = 0;

    days.map((day) => {
      day.movimentation
        .filter((mov) => mov.remuneration)
        .map(() => {
          hours =
            hours +
            Calcs.calcRequiredTimeOnDay(
              day.day,
              shift.week[Calcs.getWeek(day, shift.week)]
            );
        });
    });

    return hours;
  },

  calcRequiredTimeOnDay: function (date, week, minuteOrObject) {
    const day = fns.addMinutes(new Date(date), new Date().getTimezoneOffset());

    let minutes = 0;

    if (minuteOrObject) {
      minutes = { morning: 0, night: 0 };
    }

    week.days[new Date(day).getUTCDay()].periods.map((item) => {
      if (minuteOrObject) {
        for (let i = item.enterTime; i < item.leaveTime; i++) {
          if (i >= 360 && i < 1200) {
            minutes.morning = minutes.morning + 1;
          } else {
            minutes.night = minutes.night + 1;
          }
        }
      } else {
        minutes = minutes + (item.leaveTime - item.enterTime);
      }
    });

    return minutes;
  },

  calcRequiredTime: function (intervalDays, weeks, minuteOrObject) {
    let minutes = 0;
    if (minuteOrObject) {
      minutes = { morning: 0, night: 0 };
    }

    intervalDays.map((item) => {
      if (minuteOrObject) {
        let response = Calcs.calcRequiredTimeOnDay(
          item,
          weeks[Calcs.getWeek(item, weeks)],
          true
        );

        minutes.morning += response.morning;
        minutes.night += response.night;
      } else {
        minutes += Calcs.calcRequiredTimeOnDay(
          item,
          weeks[Calcs.getWeek(item, weeks)]
        );
      }
    });

    return minutes;
  },

  hasToWorkDay: function (day, weeks) {
    const newDay = fns.addMinutes(
      new Date(day),
      new Date().getTimezoneOffset()
    );

    const indexWeek = Calcs.getWeek(day, weeks);
    let flag = false;
    weeks[indexWeek].days[new Date(newDay).getUTCDay()].periods.map((item) => {
      if (item.enterTime !== -1 || item.leaveTime !== -1) {
        flag = true;
      }
    });

    return flag;
  },
};

module.exports = Calcs;
