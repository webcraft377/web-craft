// Lightweight reveal-on-scroll + simple contact form handler
document.addEventListener('DOMContentLoaded', function(){
  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r=>io.observe(r));

  // Simple form handler (placeholder)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Collect values
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
      };
      // For now just show a friendly message
      alert('Terima kasih! Permintaan Anda telah diterima. Kami akan menghubungi Anda segera.');
      form.reset();
      // TODO: implement real submission (email, webhook, or backend endpoint)
    });
  }
});
