// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 联系表单提交
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // 模拟表单提交
        const formData = new FormData(this);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // 显示成功消息
        const submitButton = this.querySelector('.btn');
        const originalText = submitButton.textContent;
        submitButton.textContent = '发送成功！';
        submitButton.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        
        // 重置表单
        setTimeout(() => {
            this.reset();
            submitButton.textContent = originalText;
            submitButton.style.background = 'linear-gradient(90deg, #64ffda, #00b8d4)';
        }, 2000);
    });
}

// 技能标签悬停效果
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    skill.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0)';
    });
});

// 项目卡片动画
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 滚动时的导航效果
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    const opacity = 1 - (scrollY / 500);
    if (hero) {
        hero.style.opacity = Math.max(0, opacity);
    }
});

// 页面加载动画
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// 添加背景粒子效果
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// 每秒钟创建一个粒子
setInterval(createParticle, 1000);