//menu
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    navActive.classList.toggle('active');
});

function submitForm(){
    let valid= true;
    document.querySelectorAll('.err').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.fg input, .fg textarea').forEach(el => {
        el.style.borderColor = 'rgba(0, 0, 0, 0.18)';
    });

    const fname = document.getElementById('fname');
    if(!fname.value.trim()){
        document.getElementById('err-fname').style.display = 'block';
        fname.style.borderColor = '#c0392b'; valid = false;
    }

     const email = document.getElementById('email');
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('err-email').style.display = 'block';
      email.style.borderColor = '#c0392b'; valid = false;
    }

    const msg = document.getElementById('message');
    if (!msg.value.trim()) {
      document.getElementById('err-message').style.display = 'block';
      msg.style.borderColor = '#c0392b'; valid = false;
    }

    if (!valid) return;

    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
    ['fname','lname','email','message'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('budget').value = '';
    document.getElementById('project-type').value = '';
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
