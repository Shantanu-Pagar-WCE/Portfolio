/* =============================================
   TESTIMONIALS DATA
   ─────────────────────────────────────────────
   Each entry can have:
     name     : string (required)
     branch   : string (required)
     college  : string (required)
     stars    : 1–5 (optional, default 5)
     stripe   : 'default' | 'green' | 'amber' | 'coral'
     type     : 'text' | 'video'
     feedback : string  — for type:'text'
     videoSrc : string  — for type:'video' (URL or local path)
     featured : true    — pinned in top stable grid
   ============================================= */

const testimonials = [
    /* ── FEATURED (pinned stable cards) ── */
    {
        name: "Dhruv Harwalkar",
        branch: "Computer Science Engineering",
        college: "COEP",
        stars: 5,
        stripe: "default",
        type: "text",
        featured: true,
        feedback: "A big thank you to the entire Aditya COEP 3.0 team for the excellent counseling on the MHT CET CAP round process. I especially want to thank my personal mentor, Shantanu Pagar, for his amazing one-on-one guidance. The support was a great help!"
    },
    {
        name: "Tanishq Kashid",
        branch: "Computer Science Engineering",
        college: "COEP",
        stars: 5,
        stripe: "green",
        type: "video",
        featured: true,
        videoSrc: "" /* ← paste your video URL here */
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

    /* ── CAROUSEL CARDS ── */
    {
        name: "Yash Chimbalkar",
        branch: "Electrical Engineering",
        college: "AISSMS",
        stars: 5,
        stripe: "default",
        type: "text",
        featured: true,
        feedback: `Making out all the special understanding in limited time and getting core mentorship in councelling was truly appreciable , Shantanu Pagar (fr WCE) was best mentor assigned to me 🎯, and honestly, it turned out to be one of the best counselling experiences I’ve had. Right from the beginning — from selecting the right branch, choosing the college, understanding the registration process, form filling, creating the preference list, and every step in between — he guided me patiently and perfectly. He made sure I understood every detail properly, and that guidance helped me stay confident throughout the process.

Actually hi purna admission process khup jasta wide & long ahe so sagla perfectly karna important hota , je tu kelas !— simple, clear, & genuinely helpful होतं. 
Initially, I was getting a good branch but not that great college, but through his advice, I understood how important it is to choose a better college — for exposure, opportunities, mentorship, and overall personal growth. His constant guidance and efforts made my entire counselling journey meaningful and smooth.

Truly grateful for all his time, patience, and support.
Thankyou so much Shantanu dada`
    },
    {
        name: "Sneha Iyer",
        branch: "Data Science",
        college: "None",
        stars: 4,
        stripe: "coral",
        type: "text",
        featured: true,
        feedback: ""
    },
    {
        name: "Arjun Nair",
        branch: "Civil Engineering",
        college: "VIT Pune",
        stars: 5,
        stripe: "green",
        type: "video",
        featured: true,
        videoSrc: ""
    },
    {
        name: "Meera Joshi",
        branch: "Computer Science",
        college: "DES Pune",
        stars: 5,
        stripe: "default",
        type: "text",
        featured: true,
        feedback: "I learned more in 3 months here than in 2 years of college. The projects are real-world and the feedback from mentors is always constructive. Worth every rupee!"
    },
    {
        name: "Vikram Singh",
        branch: "Electrical Engineering",
        college: "PCCOE Ravet",
        stars: 4,
        stripe: "amber",
        type: "text",
        featured: true,
        feedback: "The placement support team is brilliant. They helped me tailor my resume and coached me through multiple rounds. Landed a role at a top startup!"
    },
    {
        name: "Divya Reddy",
        branch: "MBA (Tech)",
        college: "VJTI Mumbai",
        stars: 5,
        stripe: "coral",
        type: "video",
        featured: true,
        videoSrc: ""
    },
    {
        name: "Rohit Kumar",
        branch: "Computer Applications",
        college: "DY Patil University",
        stars: 5,
        stripe: "green",
        type: "text",
        featured: true,
        feedback: "Community support is outstanding. Whenever I was stuck, there was always someone ready to help — be it peers or mentors. Never felt alone during preparation."
    },
    {
        name: "Pooja Gupta",
        branch: "Information Science",
        college: "RV College of Engineering",
        stars: 4,
        stripe: "default",
        type: "text",
        featured: true,
        feedback: "The structured week-by-week plan kept me on track. I never felt overwhelmed. Absolutely loved the system design modules!"
    },
    {
        name: "Aman Agarwal",
        branch: "CSE (AI & ML)",
        college: "Thapar University",
        stars: 5,
        stripe: "amber",
        type: "video",
        featured: true,
        videoSrc: ""
    },
];

/* =============================================
   HELPERS
   ============================================= */

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
    <div class="t-card">
      ${contentHtml}
      </div>
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

/* =============================================
   RENDER STABLE CARDS
   ============================================= */

const featured = testimonials.filter(t => t.featured);

const stableGrid = document.getElementById('stableGrid');
stableGrid.innerHTML = featured.map(t => buildCard(t, true)).join('');
