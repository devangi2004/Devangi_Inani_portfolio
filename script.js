// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. WELCOME POPUP WITH CHANGING TEXTS
    function showWelcomePopup() {
        // Create welcome popup element
        const welcomePopup = document.createElement('div');
        welcomePopup.className = 'welcome-popup';
        welcomePopup.innerHTML = `
            <div class="popup-content">
                <div class="popup-header">
                    <h2>Welcome to Devangi's Portfolio</h2>
                    <button class="close-popup">&times;</button>
                </div>
                <div class="popup-body">
                    <div class="changing-text-container">
                        <span class="static-text">I am</span>
                        <div class="changing-text-wrapper">
                            <span class="changing-text" id="changing-text">A Frontend Developer</span>
                        </div>
                    </div>
                    <p>Explore my work, skills and services. Let's create something amazing together!</p>
                </div>
                <div class="popup-footer">
                    <button class="btn primary-btn enter-site">Enter Site</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(welcomePopup);
        
        // Text array for changing text
        const texts = [
            "A Frontend Developer",
            "A Graphic Designer", 
            "A UI/UX Designer",
            "A Web Designer"
        ];
        
        let currentIndex = 0;
        const changingText = document.getElementById('changing-text');
        
        // Function to change text
        function changeText() {
            changingText.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                changingText.textContent = texts[currentIndex];
                changingText.style.opacity = '1';
            }, 500);
        }
        
        // Start changing text every 2 seconds
        const textInterval = setInterval(changeText, 2000);
        
        // Close popup functions
        function closePopup() {
            welcomePopup.style.opacity = '0';
            welcomePopup.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(welcomePopup);
                clearInterval(textInterval);
                
                // Start changing text in header after popup closes
                startHeaderTextChange();
            }, 300);
        }
        
        // Close popup when clicking close button
        document.querySelector('.close-popup').addEventListener('click', closePopup);
        
        // Close popup when clicking enter site button
        document.querySelector('.enter-site').addEventListener('click', closePopup);
        
        // Close popup when clicking outside
        welcomePopup.addEventListener('click', function(e) {
            if (e.target === welcomePopup) {
                closePopup();
            }
        });
        
        // Show popup with animation
        setTimeout(() => {
            welcomePopup.style.opacity = '1';
            welcomePopup.style.transform = 'scale(1)';
        }, 100);
    }
    
    // 2. CHANGING TEXT IN HEADER (After popup closes)
    function startHeaderTextChange() {
        const texts = [
            "Frontend Developer",
            "Graphic Designer", 
            "UI/UX Designer",
            "Web Designer"
        ];
        
        // Create element for changing text if not exists
        let changingHeader = document.querySelector('.changing-header-text');
        if (!changingHeader) {
            changingHeader = document.createElement('span');
            changingHeader.className = 'changing-header-text';
            document.querySelector('.subtitle').appendChild(changingHeader);
        }
        
        let currentIndex = 0;
        
        function changeHeaderText() {
            changingHeader.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                changingHeader.textContent = texts[currentIndex];
                changingHeader.style.opacity = '1';
            }, 300);
        }
        
        // Initial text
        changingHeader.textContent = texts[0];
        changingHeader.style.opacity = '1';
        
        // Change text every 2.5 seconds
        setInterval(changeHeaderText, 2500);
    }
    
    // 3. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // 4. Active Navigation on Scroll with Smooth Transition
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    // 5. Scroll Animation for Elements (Smooth Load)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }
    
    // 6. Back to Top Button
    function toggleBackToTop() {
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }
    }
    
    // 7. Animate Skill Bars on Scroll
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }
        });
    }
    
    // 8. Initialize all scroll functions
    function handleScroll() {
        setActiveNav();
        animateOnScroll();
        toggleBackToTop();
        animateSkillBars();
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    handleScroll();
    
    // 9. WHATSAPP FORM SUBMISSION FUNCTION
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const subject = this.querySelectorAll('input[type="text"]')[1].value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            // Validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Create WhatsApp message
            const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}%0A%0A_This message was sent from your portfolio website._`;
            
            // Your WhatsApp number
            const phoneNumber = '918302455961';
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            
            // Show confirmation before redirecting
            setTimeout(() => {
                if (confirm('Ready to send message via WhatsApp?')) {
                    // Open WhatsApp in new tab
                    window.open(whatsappURL, '_blank');
                    
                    // Reset form
                    this.reset();
                    
                    // Show success message
                    showNotification('Message ready to send on WhatsApp!', 'success');
                }
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    // Notification function
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="close-notification">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
        
        // Close button
        notification.querySelector('.close-notification').addEventListener('click', function() {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
    }
    
    // 10. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 11. Add animation classes to elements
    function addAnimationClasses() {
        // Add animate-on-scroll class to elements
        const elementsToAnimate = [
            '.project-card',
            '.service-card',
            '.skill-category',
            '.about-content > div',
            '.contact-card'
        ];
        
        elementsToAnimate.forEach(selector => {
            document.querySelectorAll(selector).forEach((element, index) => {
                element.classList.add('animate-on-scroll');
                element.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }
    
    // 12. Initialize everything
    function init() {
        // Show welcome popup after 500ms
        setTimeout(showWelcomePopup, 500);
        
        // Add animation classes
        addAnimationClasses();
        
        // Trigger initial animations
        animateOnScroll();
    }
    
    // Start initialization
    init();
});

// Complete JavaScript for all 5 features
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 1. PRICING CALCULATOR ====================
    function initPricingCalculator() {
        const basePrices = {
            'basic': 7000,
            'business': 15000,
            'ecommerce': 35000,
            'custom': 50000
        };
        
        const featurePrices = {
            'responsive': 0,
            'cms': 3000,
            'animations': 5000,
            'seo': 3000
        };
        
        const addonPrices = {
            'logo': 1000,
            'hosting': 10000,
            'maintenance': 10000,
            'urgency': 10000
        };
        
        function calculateTotal() {
            // Get selected website type
            const websiteType = document.querySelector('input[name="website-type"]:checked').value;
            let total = basePrices[websiteType];
            let featuresTotal = 0;
            let addonsTotal = 0;
            
            // Calculate features total
            document.querySelectorAll('input[name="feature"]:checked').forEach(feature => {
                const price = featurePrices[feature.value];
                featuresTotal += price;
                total += price;
            });
            
            // Calculate addons total
            document.querySelectorAll('input[name="addon"]:checked').forEach(addon => {
                const price = addonPrices[addon.value];
                addonsTotal += price;
                total += price;
            });
            
            // Apply 15% discount
            const discount = total * 0.15;
            const discountedTotal = total - discount;
            
            // Update UI
            document.getElementById('base-price').textContent = `Rs ${basePrices[websiteType].toLocaleString()}`;
            document.getElementById('features-total').textContent = `Rs ${featuresTotal.toLocaleString()}`;
            document.getElementById('addons-total').textContent = `Rs ${addonsTotal.toLocaleString()}`;
            document.getElementById('total-price').textContent = `Rs ${total.toLocaleString()}`;
            document.getElementById('discounted-price').textContent = `Rs ${discountedTotal.toLocaleString()}`;
        }
        
        // Add event listeners
        document.querySelectorAll('input[name="website-type"]').forEach(input => {
            input.addEventListener('change', calculateTotal);
        });
        
        document.querySelectorAll('input[name="feature"]').forEach(input => {
            input.addEventListener('change', calculateTotal);
        });
        
        document.querySelectorAll('input[name="addon"]').forEach(input => {
            input.addEventListener('change', calculateTotal);
        });
        
        // WhatsApp Quote Button
        document.getElementById('whatsapp-quote').addEventListener('click', function() {
            const websiteType = document.querySelector('input[name="website-type"]:checked').value;
            const basePrice = basePrices[websiteType];
            const total = parseInt(document.getElementById('total-price').textContent.replace(/[^\d]/g, ''));
            const discounted = parseInt(document.getElementById('discounted-price').textContent.replace(/[^\d]/g, ''));
            
            let selectedFeatures = [];
            document.querySelectorAll('input[name="feature"]:checked').forEach(f => {
                selectedFeatures.push(f.parentElement.querySelector('span').textContent);
            });
            
            let selectedAddons = [];
            document.querySelectorAll('input[name="addon"]:checked').forEach(a => {
                selectedAddons.push(a.parentElement.querySelector('span').textContent);
            });
            
            const message = `*Website Quote Request*%0A%0A*Selected Website:* ${websiteType}%0A*Base Price:* Rs ${basePrice}%0A*Selected Features:* ${selectedFeatures.join(', ')}%0A*Add-ons:* ${selectedAddons.join(', ')}%0A*Total:* Rs ${total}%0A*Discounted Price:* Rs ${discounted}%0A%0A*I want to proceed with this quote!*`;
            
            window.open(`https://wa.me/918302455961?text=${message}`, '_blank');
        });
        
        // Download Quote Button
        document.getElementById('download-quote').addEventListener('click', function() {
            alert('PDF download feature will be implemented soon!');
            // In production, you would generate a PDF here
        });
        
        // Initial calculation
        calculateTotal();
    }
    
    // ==================== 2. LIVE CHAT ====================
    function initLiveChat() {
        const chatWidget = document.querySelector('.live-chat-widget');
        const chatToggle = document.querySelector('.chat-toggle-btn');
        const closeChat = document.querySelector('.close-chat');
        const quickReplies = document.querySelectorAll('.quick-reply');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.querySelector('.send-btn');
        const chatMessages = document.querySelector('.chat-messages');
        
        // Toggle chat
        chatToggle.addEventListener('click', function() {
            chatWidget.classList.toggle('active');
            this.querySelector('.notification-dot').style.display = 'none';
        });
        
        closeChat.addEventListener('click', function() {
            chatWidget.classList.remove('active');
        });
        
        // Quick replies
        quickReplies.forEach(reply => {
            reply.addEventListener('click', function() {
                const message = this.getAttribute('data-reply');
                addUserMessage(message);
                
                // Auto reply after 1 second
                setTimeout(() => {
                    let botReply = '';
                    switch(message) {
                        case 'I want a website quote':
                            botReply = "Great! I'll help you get a quote. Could you tell me what type of website you need? (Business, E-commerce, Portfolio, etc.)";
                            break;
                        case 'Show me your portfolio':
                            botReply = "Sure! Please check my projects section. I have worked on various websites including E-commerce, Medical, Restaurant, and Portfolio sites.";
                            break;
                        case "What's your availability?":
                            botReply = "I'm available for new projects! I can start your project within 2-3 days. For urgent projects, I charge a 25% premium.";
                            break;
                        case 'I need urgent help':
                            botReply = "For urgent help, please call me directly at +91 8302455961 or send a WhatsApp message. I'll respond quickly!";

                        default:
                            botReply = "Thanks for your message! How can I assist you further?";
                    }
                    addBotMessage(botReply);
                }, 1000);
            });
        });
        
        // Send message
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addUserMessage(message);
                chatInput.value = '';
                
                // Auto reply
                setTimeout(() => {
                    addBotMessage("Thanks for your message! I'll get back to you soon. For immediate response, please call +91 83024559661 or send a WhatsApp message.");
                }, 1500);
            }
        }
        
        sendBtn.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Add message functions
        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user';
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
                <span class="message-time">${getCurrentTime()}</span>
            `;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function addBotMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message bot';
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
                <span class="message-time">${getCurrentTime()}</span>
            `;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function getCurrentTime() {
            const now = new Date();
            return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        }
        
        // Auto open chat after 10 seconds
        setTimeout(() => {
            if (!chatWidget.classList.contains('active')) {
                chatToggle.querySelector('.notification-dot').style.display = 'block';
            }
        }, 10000);
    }
    
    // ==================== 3. WHATSAPP BUTTONS ====================
    function initWhatsAppButtons() {
        // Already working with HTML links
        console.log('WhatsApp buttons initialized');
    }
    
    // ==================== 4. PROJECT VIDEOS ====================
    function initProjectVideos() {
        const videoButtons = document.querySelectorAll('.play-video-btn');
        const videoModal = document.querySelector('.video-modal');
        const closeModal = document.querySelector('.close-modal');
        const demoVideo = document.querySelector('.demo-video');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        
        const videoData = {
            'dietitian-demo.mp4': {
                title: 'Dietitian Maryam Website Walkthrough',
                description: 'Complete website tour showing appointment system, diet plans, and client portal.'
            },
            'cake-shop-demo.mp4': {
                title: 'Cake Shop E-commerce Demo',
                description: 'Online ordering system with payment gateway integration and admin panel.'
            },
            'doctor-demo.mp4': {
                title: 'Dr. Zahid Clinic Portal',
                description: 'Medical website with patient management and appointment booking system.'
            },
            'coffee-demo.mp4': {
                title: 'Coffee Shop Website Tour',
                description: 'Cafe website with menu, location finder, and online reservation system.'
            }
        };
        
        videoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoFile = this.getAttribute('data-video');
                const data = videoData[videoFile] || {
                    title: 'Project Demo',
                    description: 'Watch the project demo video'
                };
                
                demoVideo.src = videoFile;
                videoTitle.textContent = data.title;
                videoDescription.textContent = data.description;
                
                videoModal.classList.add('active');
                demoVideo.play();
            });
        });
        
        closeModal.addEventListener('click', function() {
            videoModal.classList.remove('active');
            demoVideo.pause();
        });
        
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                demoVideo.pause();
            }
        });
    }
    // Updated Testimonial Slider JavaScript
function initTestimonialSlider() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update slide classes
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Reset interval on interaction
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetInterval();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetInterval();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
            resetInterval();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        }
    });
    
    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', function() {
        resetInterval();
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    sliderContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    sliderContainer.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        
        if (startX - endX > 50) {
            // Swipe left - next slide
            nextSlide();
            resetInterval();
        } else if (endX - startX > 50) {
            // Swipe right - previous slide
            prevSlide();
            resetInterval();
        }
    });
    
    // Play testimonial video
    const playTestimonialVideo = document.querySelector('.play-testimonial-video');
    if (playTestimonialVideo) {
        playTestimonialVideo.addEventListener('click', function() {
            // Create video modal
            const videoModal = document.createElement('div');
            videoModal.className = 'video-modal active';
            videoModal.innerHTML = `
                <div class="modal-content">
                    <button class="close-modal">&times;</button>
                    <div class="video-placeholder">
                        <i class="fab fa-youtube"></i>
                        <h3>Video Testimonial</h3>
                        <p>Client video testimonial will play here</p>
                        <button class="btn primary-btn watch-on-youtube">
                            <i class="fab fa-youtube"></i> Watch on YouTube
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(videoModal);
            
            // Close modal
            const closeModal = videoModal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                videoModal.remove();
            });
            
            videoModal.addEventListener('click', function(e) {
                if (e.target === videoModal) {
                    videoModal.remove();
                }
            });
            
            // YouTube button
            const youtubeBtn = videoModal.querySelector('.watch-on-youtube');
            youtubeBtn.addEventListener('click', function() {
                window.open('https://youtube.com', '_blank');
            });
        });
    }
    
    // Initial update
    updateSlider();
}
    // ==================== INITIALIZE ALL ====================
    function initAllFeatures() {
        initPricingCalculator();
        initLiveChat();
        initWhatsAppButtons();
        initProjectVideos();
        initTestimonialSlider();
        
        console.log('All 5 features initialized! 🚀');
    }
    
    // Start everything
    initAllFeatures();
});