
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

function checkReservation() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message');
  
  if (reservations[name]) {
    if (reservations[name].claimed) {
      message.innerHTML = `Hmm ${name}, someone already claimed this reservation`;
    } else {
      reservations[name].claimed = true;
      message.innerHTML = `Welcome, ${name}`;
    }
  } else {
    message.innerHTML = "You have no reservation";
  }
}

