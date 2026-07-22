// Billix contact site — lightweight enhancements

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: build a pre-filled email to info@billixapp.com (no backend needed).
// Swap the handler body for a fetch() to Formspree / your API when a backend exists.
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const val = (id) => (document.getElementById(id).value || '').trim();
  const name = val('name');
  const org = val('org');
  const email = val('email');
  const role = val('role');
  const orgType = val('orgType');
  const state = val('state');
  const message = val('message');

  const subject = `Billix inquiry — ${org || name || 'New contact'}`;
  const body = [
    `Name: ${name}`,
    `Organization: ${org}`,
    `Role: ${role}`,
    `Organization type: ${orgType}`,
    `State: ${state}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const mailto =
    `mailto:info@billixapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;

  note.innerHTML =
    'Thanks — your email client should be opening now. If it didn\'t, write us at ' +
    '<a href="mailto:info@billixapp.com">info@billixapp.com</a>.';
});
