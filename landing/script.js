// Mobile Navigation
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav__links--open');
    });
});

// Currency Toggle
const currencyBtns = document.querySelectorAll('.pricing__currency');
const priceAmount = document.querySelector('.pricing-card--featured .pricing-card__amount');
const priceCurrencies = document.querySelectorAll('.pricing-card__currency');

currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currencyBtns.forEach(b => b.classList.remove('pricing__currency--active'));
        btn.classList.add('pricing__currency--active');

        const currency = btn.dataset.currency;

        if (priceAmount) {
            priceAmount.textContent = priceAmount.dataset[currency];
        }

        priceCurrencies.forEach(el => {
            el.textContent = el.dataset[currency];
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Navbar shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Stripe Checkout (placeholder — replace with your Stripe publishable key and price ID)
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        // TODO: Replace with your actual Stripe integration
        // Option 1: Redirect to Stripe Payment Link
        // window.location.href = 'https://buy.stripe.com/your-payment-link';

        // Option 2: Stripe Checkout Session (requires backend)
        // const response = await fetch('/api/create-checkout-session', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ priceId: 'price_xxxxx' })
        // });
        // const { url } = await response.json();
        // window.location.href = url;

        alert('Stripe checkout will be connected here. Replace this with your Stripe Payment Link or Checkout Session.');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step, .pricing-card, .faq__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
