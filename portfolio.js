const testimonials = [
    {
        name: "Priya Sharma",
        branch: "Computer Science Engineering",
        college: "IIT Bombay",
        stars: 5,
        stripe: "default",
        type: "text",
        featured: true,
        feedback: "This program completely transformed my approach to problem-solving. The mentors were incredibly supportive and the curriculum was exactly what I needed to crack top MNC interviews. Highly recommend to every CS student!"
    },
    {
        name: "Rahul Mehta",
        branch: "Electronics & Communication",
        college: "NIT Surat",
        stars: 5,
        stripe: "green",
        type: "video",
        featured: true,
        videoSrc: "" /* ← here I will paste video URL */
    },
    {
        name: "Anjali Verma",
        branch: "Mechanical Engineering",
        college: "VIT Vellore",
        stars: 5,
        stripe: "amber",
        type: "text",
        featured: true,
        feedback: "As a mechanical student breaking into the software world, I was nervous. But the structured roadmap and peer community made the transition smooth and enjoyable. Got placed at a top product company!"
    },

    /*carousel cards starting*/
    {
        name: "Karan Patel",
        branch: "Information Technology",
        college: "SVIT Vasad",
        stars: 5,
        stripe: "default",
        type: "text",
        feedback: "The mock interviews and DSA sheets were a game-changer. I went from zero confidence to cracking Amazon's coding round in just 3 months."
    },
    {
        name: "Sneha Iyer",
        branch: "Data Science",
        college: "BITS Pilani",
        stars: 4,
        stripe: "coral",
        type: "text",
        feedback: "Fantastic content on ML fundamentals and system design. The instructors break down complex topics so clearly. My campus placement went exceptionally well!"
    },
    {
        name: "Arjun Nair",
        branch: "Civil Engineering",
        college: "NIT Calicut",
        stars: 5,
        stripe: "green",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Meera Joshi",
        branch: "Computer Science",
        college: "Pune University",
        stars: 5,
        stripe: "default",
        type: "text",
        feedback: "I learned more in 3 months here than in 2 years of college. The projects are real-world and the feedback from mentors is always constructive. Worth every rupee!"
    },
    {
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        college: "IIT Delhi",
        stars: 4,
        stripe: "amber",
        type: "text",
        feedback: "The placement support team is brilliant. They helped me tailor my resume and coached me through multiple rounds. Landed a role at a top startup!"
    },
    {
        name: "Divya Reddy",
        branch: "MBA (Tech)",
        college: "IIM Ahmedabad",
        stars: 5,
        stripe: "coral",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Rohit Kumar",
        branch: "Computer Applications",
        college: "DY Patil University",
        stars: 5,
        stripe: "green",
        type: "text",
        feedback: "Community support is outstanding. Whenever I was stuck, there was always someone ready to help — be it peers or mentors. Never felt alone during preparation."
    },
    {
        name: "Pooja Gupta",
        branch: "Information Science",
        college: "RV College of Engineering",
        stars: 4,
        stripe: "default",
        type: "text",
        feedback: "The structured week-by-week plan kept me on track. I never felt overwhelmed. Absolutely loved the system design modules!"
    },
    {
        name: "Aman Agarwal",
        branch: "CSE (AI & ML)",
        college: "Thapar University",
        stars: 5,
        stripe: "amber",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Nisha Tiwari",
        branch: "Electronics",
        college: "Amrita Vishwa Vidyapeetham",
        stars: 5,
        stripe: "coral",
        type: "text",
        feedback: "Switching from core electronics to software was a big decision. This program made that transition seamless with dedicated support and career guidance."
    },
    {
        name: "Gaurav Bansal",
        branch: "B.Tech (Biotech)",
        college: "Manipal University",
        stars: 4,
        stripe: "green",
        type: "text",
        feedback: "As a non-CS student I was skeptical, but the beginner-friendly approach eased me in. The instructors are patient and the content is top-notch."
    },
    {
        name: "Tanya Mishra",
        branch: "Computer Engineering",
        college: "MIT Pune",
        stars: 5,
        stripe: "default",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Akash Chauhan",
        branch: "Software Engineering",
        college: "SRM University",
        stars: 5,
        stripe: "amber",
        type: "text",
        feedback: "I cleared Infosys, TCS, and Wipro all in the same week. The aptitude and coding preparation here is unmatched. Highly effective!"
    },
    {
        name: "Ritika Sen",
        branch: "ECE",
        college: "Jadavpur University",
        stars: 4,
        stripe: "coral",
        type: "text",
        feedback: "Loved the live doubt sessions. The community is super active and the mentors respond fast. Got my dream job at a fintech startup!"
    },
    {
        name: "Siddharth Rao",
        branch: "MCA",
        college: "Symbiosis Institute",
        stars: 5,
        stripe: "green",
        type: "text",
        feedback: "The resume building and LinkedIn profile sessions gave me an edge over other candidates. Recruiters actually started reaching out to me after that!"
    },
    {
        name: "Kavya Pillai",
        branch: "B.Sc Computer Science",
        college: "Christ University",
        stars: 5,
        stripe: "default",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Nikhil Soni",
        branch: "Aerospace Engineering",
        college: "IIT Madras",
        stars: 4,
        stripe: "amber",
        type: "text",
        feedback: "I was aiming for a career change and this program was exactly what I needed. The structured curriculum for non-CS students is incredibly helpful."
    },
    {
        name: "Shreya Kapoor",
        branch: "Data Analytics",
        college: "NMIMS Mumbai",
        stars: 5,
        stripe: "coral",
        type: "text",
        feedback: "Data structures finally clicked for me here! The visual explanations and animated examples made even the hardest concepts easy. 10/10 experience."
    },
    {
        name: "Dev Acharya",
        branch: "Chemical Engineering",
        college: "NIT Rourkela",
        stars: 5,
        stripe: "green",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Preeti Bhatt",
        branch: "CSE",
        college: "Chandigarh University",
        stars: 4,
        stripe: "default",
        type: "text",
        feedback: "Got my first internship at a product-based company after just 2 months of this program. The hands-on projects were a major plus on my resume."
    },
    {
        name: "Manish Yadav",
        branch: "IT",
        college: "LNCT Bhopal",
        stars: 5,
        stripe: "amber",
        type: "text",
        feedback: "From a tier-3 college to a tier-1 company — this program made it possible. The content quality is truly world-class and accessible to everyone."
    },
    {
        name: "Simran Kaur",
        branch: "Cybersecurity",
        college: "Panjab University",
        stars: 5,
        stripe: "coral",
        type: "text",
        feedback: "Amazing program! The cybersecurity track and the coding prep together gave me a unique edge. Already have 3 offers in hand. Couldn't be happier!"
    },
    {
        name: "Tejas Kulkarni",
        branch: "Mechanical",
        college: "College of Engineering Pune",
        stars: 4,
        stripe: "green",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Bhavya Shah",
        branch: "B.Com (Finance)",
        college: "Mumbai University",
        stars: 5,
        stripe: "default",
        type: "text",
        feedback: "A commerce student breaking into fintech — sounds impossible, but this program's specialised track made it achievable. Got placed at a top bank's tech division!"
    },
    {
        name: "Rohan Desai",
        branch: "Electronics",
        college: "DJ Sanghvi College",
        stars: 4,
        stripe: "amber",
        type: "text",
        feedback: "The peer group here is incredibly motivated. You automatically push yourself harder when you're surrounded by people with similar goals and ambitions."
    },
    {
        name: "Prachi Patil",
        branch: "CSE",
        college: "VJTI Mumbai",
        stars: 5,
        stripe: "coral",
        type: "text",
        feedback: "I appeared in 12 interviews over 3 months and cracked 8 of them. The consistent practice and feedback loop from mentors made all the difference."
    },
    {
        name: "Saurabh Tripathi",
        branch: "EEE",
        college: "BIT Mesra",
        stars: 5,
        stripe: "green",
        type: "video",
        videoSrc: ""
    },
    {
        name: "Ayesha Khan",
        branch: "Computer Science",
        college: "Osmania University",
        stars: 5,
        stripe: "default",
        type: "text",
        feedback: "Coming from a vernacular medium background, I was worried about the language barrier. The bilingual support and clear explanations made this program truly inclusive."
    },
    {
        name: "Harsh Vardhan",
        branch: "IT Engineering",
        college: "GTU Ahmedabad",
        stars: 4,
        stripe: "amber",
        type: "text",
        feedback: "The placement statistics speak for themselves. Almost everyone I know from my batch got placed. The preparation is thorough and the support is genuine."
    },
    {
        name: "Leena George",
        branch: "MCA",
        college: "Cochin University",
        stars: 5,
        stripe: "coral",
        type: "text",
        feedback: "As a working professional re-entering the tech job market, the flexible schedule and self-paced content were a lifesaver. Excellent program for career switchers!"
    }
];

/*HELPERS*/

function initials(name) {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function stars(count) {
    return Array.from({
            length: 5
        }, (_, i) =>
        `<span class="star">${i < count ? '★' : '☆'}</span>`
    ).join('');
}

function videoPlaceholder() {
    return `
    <div class="video-placeholder">
      <div class="play-btn">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
      </div>
      <span class="video-label">Watch video review</span>
    </div>`;
}

function buildCard(t, isFeatured) {
    const stripeClass = t.stripe && t.stripe !== 'default' ? ` stripe-${t.stripe}` : '';
    const featuredBadge = isFeatured ? '<span class="featured-badge">Featured</span>' : '';

    const starsHtml = `<div class="t-stars">${stars(t.stars || 5)}</div>`;

    let contentHtml = '';
    if (t.type === 'video') {
        let mediaHtml = '';
        if (t.videoSrc && t.videoSrc.trim() !== '') {
            const isYT = /youtube\.com|youtu\.be/.test(t.videoSrc);
            const isVimeo = /vimeo\.com/.test(t.videoSrc);
            if (isYT) {
                const ytId = t.videoSrc.replace(/.*(?:v=|youtu\.be\/)([^&?/]+).*/, '$1');
                mediaHtml = `<iframe src="https://www.youtube.com/embed/${ytId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
            } else if (isVimeo) {
                const vId = t.videoSrc.replace(/.*vimeo\.com\/(\d+).*/, '$1');
                mediaHtml = `<iframe src="https://player.vimeo.com/video/${vId}" allowfullscreen loading="lazy"></iframe>`;
            } else {
                mediaHtml = `<video src="${t.videoSrc}" controls preload="metadata"></video>`;
            }
        } else {
            mediaHtml = videoPlaceholder();
        }
        contentHtml = `<div class="t-video-wrap">${mediaHtml}</div>`;
    } else {
        contentHtml = `<p class="t-quote">${t.feedback}</p>`;
    }

    return `
    <div class="t-card${stripeClass}">
      ${featuredBadge}
      ${starsHtml}
      ${contentHtml}
      <div class="t-footer">
        <div class="t-avatar">${initials(t.name)}</div>
        <div class="t-meta">
          <div class="t-name">${t.name}</div>
          <div class="t-branch">${t.branch}</div>
        </div>
        <div class="t-college-badge">${t.college}</div>
      </div>
    </div>`;
}

/* Render stable cards*/

const featured = testimonials.filter(t => t.featured);
const carousel = testimonials.filter(t => !t.featured);

const stableGrid = document.getElementById('stableGrid');
stableGrid.innerHTML = featured.map(t => buildCard(t, true)).join('');

/*Carousel*/

const track = document.getElementById('carouselTrack');
const dotsEl = document.getElementById('carouselDots');
const counter = document.getElementById('carouselCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

track.innerHTML = carousel.map(t => buildCard(t, false)).join('');

/*Card width=300+20 gap*/
const CARD_W = 320;
let current = 0;
let visibleCount = 1;

function getVisibleCount() {
    const w = track.parentElement.clientWidth;
    if (w >= 940) return 3;
    if (w >= 620) return 2;
    return 1;
}

function buildDots() {
    dotsEl.innerHTML = '';
    const total = Math.ceil(carousel.length / visibleCount);
    for (let i = 0; i < total; i++) {
        const d = document.createElement('button');
        d.className = 'dot' + (i === current ? ' active' : '');
        d.setAttribute('aria-label', `Go to page ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
    });
}

function updateCounter() {
    const total = Math.ceil(carousel.length / visibleCount);
    counter.textContent = `${current + 1} / ${total}`;
}

function updateButtons() {
    const total = Math.ceil(carousel.length / visibleCount);
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= total - 1;
}

function goTo(idx) {
    const total = Math.ceil(carousel.length / visibleCount);
    current = Math.max(0, Math.min(idx, total - 1));
    const offset = current * visibleCount * CARD_W;
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
    updateCounter();
    updateButtons();
}

function init() {
    visibleCount = getVisibleCount();
    current = 0;
    buildDots();
    updateCounter();
    updateButtons();
    track.style.transform = 'translateX(0)';

    /* Set card widths dynamically */
    const cards = track.querySelectorAll('.t-card');
    const w = track.parentElement.clientWidth;
    const cardWidth = Math.floor((w - (visibleCount - 1) * 20) / visibleCount);
    cards.forEach(c => {
        c.style.minWidth = cardWidth + 'px';
    });
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

let autoTimer = setInterval(() => {
    const total = Math.ceil(carousel.length / visibleCount);
    goTo(current < total - 1 ? current + 1 : 0);
}, 5000);

/*Pause on hover*/
track.addEventListener('mouseenter', () => clearInterval(autoTimer));
track.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
        const total = Math.ceil(carousel.length / visibleCount);
        goTo(current < total - 1 ? current + 1 : 0);
    }, 5000);
});

/*Touch/swipe support*/
let touchStartX = 0;
track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
}, {
    passive: true
});
track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goTo(current + 1) : goTo(current - 1);
});

/*Keyboard navigation*/
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft') goTo(current - 1);
});

/*Resize*/
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 150);
});

init();
