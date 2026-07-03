//menu
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    navActive.classList.toggle('active');
});

function submitForm() {
  // Validation
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !message) {
    alert('Remplissez les champs obligatoires.');
    return;
  }

  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  // Envoi via EmailJS
  emailjs.send(
    "service_c1xp6wm",
    "template_mo5io0d",
    {
      from_name: fname + ' ' + document.getElementById('lname').value,
      from_email: email,
      project_type: document.getElementById('project-type').value,
      message: message
    }
  ).then(() => {
    btn.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }).catch((err) => {
    btn.textContent = 'Envoyer le message →';
    btn.disabled = false;
    alert('Erreur d\'envoi. Réessayez.');
    console.error(err);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
});
