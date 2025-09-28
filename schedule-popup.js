// Skema-data for popup vinduet
const schedules = {
  friday: {
    title: "Fredag",
    table: `
      <table>
        <thead>
          <tr><th>Tidspunkt</th><th>Event</th></tr>
        </thead>
        <tbody>
          <tr><td>15:00-16:00</td><td><b>Opstart/velkomst</b> - en velkomst show på scenen i picnic zonen<br> boder åbner</td></tr>
          <tr><td>16:00-18:00</td><td>Kreazonen er åben</td></tr>
          <tr><td>18:00-20:00</td><td>Historietime på fællesscenen/picnic tid<br>slutter af med introduktion til stempeljagt + info</td></tr>
          <tr><td>20:00-22:00</td><td>Landendes individuelle aktiviteter</td></tr>
          <tr><td>22:00-23:00</td><td>Fyrværkerier<br>afslutningsshow<br>happy hour :)</td></tr>
          <tr><td>23:00-00:00 (01:00)</td><td>mad-boderne lukker, festivalen stopper for dagen<br>baren holder åben til klokken 01:00</td></tr>
        </tbody>
      </table>
    `
  },
  saturday: {
    title: "Lørdag",
    table: `
      <table>
        <thead>
          <tr><th>Tidspunkt</th><th>Event</th></tr>
        </thead>
        <tbody>
          <tr><td>12:00-14:00</td><td><b>Opstart/Velkomst</b> - en velkomst show på scenen i picnic zonen</td></tr>
          <tr><td>14:00-18:00</td><td>Krea-zone på hver deres land<br>“street performers” på pladserne</td></tr>
          <tr><td>17:00-20:00</td><td>Underholdning/forestillinger på main stage + konkurrence</td></tr>
          <tr><td>20:00-22:00</td><td>Afslutningsshow+<br>Fyrværkeri<br>Happy hour ;)</td></tr>
          <tr><td>23:00-00:00 (01:00)</td><td>mad-boderne lukker, festivalen stopper for dagen<br>baren holder åben til klokken 01:00</td></tr>
        </tbody>
      </table>
    `
  },
  sunday: {
    title: "Søndag",
    table: `
      <table>
        <thead>
          <tr><th>Tidspunkt</th><th>Event</th></tr>
        </thead>
        <tbody>
          <tr><td>12:00-14:00</td><td><b>Opstart/velkomst</b> - en velkomst show på scenen i picnic zonen</td></tr>
          <tr><td>14:00-16:00</td><td>stempeljagt lukker</td></tr>
          <tr><td>16:00-19:00</td><td>sell out<br>det meste lukker efter</td></tr>
          <tr><td>Lukket</td><td></td></tr>
          <tr><td>Lukket</td><td></td></tr>
        </tbody>
      </table>
    `
  }
};

function openSchedule(day) {
  const overlay = document.getElementById('schedule-overlay');
  const popup = document.getElementById('schedule-popup');
  const content = document.getElementById('schedule-content');
  if (schedules[day]) {
    content.innerHTML = `<h2>${schedules[day].title}</h2>${schedules[day].table}`;
    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSchedule() {
  document.getElementById('schedule-overlay').classList.remove('active');
  document.getElementById('schedule-popup').classList.remove('active');
  document.body.style.overflow = '';
}
