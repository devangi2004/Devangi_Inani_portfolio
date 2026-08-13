// ============================================================
// DEVANGI INANI PORTFOLIO - COMPLETE SCRIPT.JS
// ============================================================


// ============================================================
// 1. MAIN DOM CONTENT LOADED
// ============================================================

document.addEventListener('DOMContentLoaded', function () {


    // ========================================================
    // 1. WELCOME POPUP WITH CHANGING TEXT
    // ========================================================

    function showWelcomePopup() {

        const welcomePopup =
            document.createElement('div');

        welcomePopup.className =
            'welcome-popup';

        welcomePopup.innerHTML = `
            <div class="popup-content">

                <div class="popup-header">

                    <h2>
                        Welcome to Devangi's Portfolio
                    </h2>

                    <button class="close-popup">
                        &times;
                    </button>

                </div>

                <div class="popup-body">

                    <div class="changing-text-container">

                        <span class="static-text">
                            I am
                        </span>

                        <div class="changing-text-wrapper">

                            <span
                                class="changing-text"
                                id="changing-text">
                                A Frontend Developer
                            </span>

                        </div>

                    </div>

                    <p>
                        Explore my work, skills and services.
                        Let's create something amazing together!
                    </p>

                </div>

                <div class="popup-footer">

                    <button class="btn primary-btn enter-site">
                        Enter Site
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(welcomePopup);


        const texts = [
            "A Frontend Developer",
            "A Graphic Designer",
            "A UI/UX Designer",
            "A Web Designer"
        ];


        let currentIndex = 0;

        const changingText =
            document.getElementById('changing-text');


        function changeText() {

            if (!changingText) return;

            changingText.style.opacity = '0';

            setTimeout(() => {

                currentIndex =
                    (currentIndex + 1) % texts.length;

                changingText.textContent =
                    texts[currentIndex];

                changingText.style.opacity = '1';

            }, 500);

        }


        const textInterval =
            setInterval(changeText, 2000);


        function closePopup() {

            welcomePopup.style.opacity = '0';

            welcomePopup.style.transform =
                'scale(0.8)';


            setTimeout(() => {

                if (welcomePopup.parentNode) {

                    welcomePopup.remove();

                }

                clearInterval(textInterval);

                startHeaderTextChange();

            }, 300);

        }


        const closeButton =
            welcomePopup.querySelector('.close-popup');


        const enterButton =
            welcomePopup.querySelector('.enter-site');


        if (closeButton) {

            closeButton.addEventListener(
                'click',
                closePopup
            );

        }


        if (enterButton) {

            enterButton.addEventListener(
                'click',
                closePopup
            );

        }


        welcomePopup.addEventListener(
            'click',
            function (event) {

                if (
                    event.target === welcomePopup
                ) {

                    closePopup();

                }

            }
        );


        setTimeout(() => {

            welcomePopup.style.opacity = '1';

            welcomePopup.style.transform =
                'scale(1)';

        }, 100);

    }



    // ========================================================
    // 2. HEADER CHANGING TEXT
    // ========================================================

    function startHeaderTextChange() {

        const texts = [
            "Frontend Developer",
            "Graphic Designer",
            "UI/UX Designer",
            "Web Designer"
        ];


        let changingHeader =
            document.querySelector(
                '.changing-header-text'
            );


        if (!changingHeader) {

            const subtitle =
                document.querySelector('.subtitle');


            if (!subtitle) return;


            changingHeader =
                document.createElement('span');


            changingHeader.className =
                'changing-header-text';


            subtitle.appendChild(
                changingHeader
            );

        }


        let currentIndex = 0;


        function changeHeaderText() {

            changingHeader.style.opacity = '0';


            setTimeout(() => {

                currentIndex =
                    (currentIndex + 1) %
                    texts.length;


                changingHeader.textContent =
                    texts[currentIndex];


                changingHeader.style.opacity =
                    '1';

            }, 300);

        }


        changingHeader.textContent =
            texts[0];

        changingHeader.style.opacity =
            '1';


        setInterval(
            changeHeaderText,
            2500
        );

    }



    // ========================================================
    // 3. MOBILE NAVIGATION
    // ========================================================

    const hamburger =
        document.querySelector('.hamburger');

    const navMenu =
        document.querySelector('.nav-menu');


    if (hamburger && navMenu) {

        hamburger.addEventListener(
            'click',
            function () {

                this.classList.toggle('active');

                navMenu.classList.toggle(
                    'active'
                );

            }
        );

    }


    document
        .querySelectorAll('.nav-link')
        .forEach(link => {

            link.addEventListener(
                'click',
                () => {

                    if (hamburger) {

                        hamburger.classList.remove(
                            'active'
                        );

                    }


                    if (navMenu) {

                        navMenu.classList.remove(
                            'active'
                        );

                    }

                }
            );

        });



    // ========================================================
    // 4. ACTIVE NAVIGATION ON SCROLL
    // ========================================================

    const sections =
        document.querySelectorAll('section');

    const navLinks =
        document.querySelectorAll('.nav-link');


    function setActiveNav() {

        let current = '';

        const scrollPosition =
            window.scrollY + 100;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.clientHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute('id');

            }

        });


        navLinks.forEach(link => {

            link.classList.remove('active');


            const href =
                link.getAttribute('href');


            if (
                href &&
                href.substring(1) === current
            ) {

                link.classList.add('active');

            }

        });

    }



    // ========================================================
    // 5. SCROLL ANIMATION
    // ========================================================

    function animateOnScroll() {

        const elements =
            document.querySelectorAll(
                '.animate-on-scroll'
            );


        elements.forEach(element => {

            const elementPosition =
                element.getBoundingClientRect().top;


            const screenPosition =
                window.innerHeight / 1.2;


            if (
                elementPosition <
                screenPosition
            ) {

                element.classList.add(
                    'animated'
                );

            }

        });

    }



    // ========================================================
    // 6. BACK TO TOP
    // ========================================================

    function toggleBackToTop() {

        const backToTop =
            document.querySelector(
                '.back-to-top'
            );


        if (!backToTop) return;


        if (window.scrollY > 500) {

            backToTop.classList.add(
                'active'
            );

        } else {

            backToTop.classList.remove(
                'active'
            );

        }

    }



    // ========================================================
    // 7. SKILL PROGRESS BARS
    // ========================================================

    function animateSkillBars() {

        const skillBars =
            document.querySelectorAll(
                '.skill-progress'
            );


        skillBars.forEach(bar => {

            const barPosition =
                bar.getBoundingClientRect().top;


            const screenPosition =
                window.innerHeight / 1.3;


            if (
                barPosition <
                screenPosition
            ) {

                const width =
                    bar.getAttribute(
                        'data-width'
                    );


                if (width) {

                    bar.style.width =
                        width + '%';

                }

            }

        });

    }



    // ========================================================
    // 8. HANDLE SCROLL
    // ========================================================

    function handleScroll() {

        setActiveNav();

        animateOnScroll();

        toggleBackToTop();

        animateSkillBars();

    }


    window.addEventListener(
        'scroll',
        handleScroll
    );


    handleScroll();



    // ========================================================
    // 9. CONTACT FORM
    // ========================================================

    const contactForm =
        document.querySelector(
            '.contact-form'
        );


    if (contactForm) {

        contactForm.addEventListener(
            'submit',
            function (event) {

                event.preventDefault();


                const textInputs =
                    this.querySelectorAll(
                        'input[type="text"]'
                    );


                const name =
                    textInputs[0]
                    ?.value
                    .trim() || '';


                const email =
                    this.querySelector(
                        'input[type="email"]'
                    )
                    ?.value
                    .trim() || '';


                const subject =
                    textInputs[1]
                    ?.value
                    .trim() || '';


                const message =
                    this.querySelector(
                        'textarea'
                    )
                    ?.value
                    .trim() || '';


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    showNotification(
                        'Please fill in all required fields.',
                        'error'
                    );

                    return;

                }


                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailRegex.test(email)
                ) {

                    showNotification(
                        'Please enter a valid email address.',
                        'error'
                    );

                    return;

                }


                const submitBtn =
                    this.querySelector(
                        'button[type="submit"]'
                    );


                const originalText =
                    submitBtn
                    ? submitBtn.innerHTML
                    : 'Send Message';


                if (submitBtn) {

                    submitBtn.innerHTML =
                        '<i class="fas fa-spinner fa-spin"></i> Sending...';

                    submitBtn.disabled = true;

                }


                const whatsappMessage =
                    `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}

_This message was sent from your portfolio website._`;


                const phoneNumber =
                    '918302455961';


                const whatsappURL =
                    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


                setTimeout(() => {

                    if (
                        confirm(
                            'Ready to send message via WhatsApp?'
                        )
                    ) {

                        window.open(
                            whatsappURL,
                            '_blank'
                        );


                        this.reset();


                        showNotification(
                            'Message ready to send on WhatsApp!',
                            'success'
                        );

                    }


                    if (submitBtn) {

                        submitBtn.innerHTML =
                            originalText;

                        submitBtn.disabled =
                            false;

                    }

                }, 700);

            }
        );

    }



    // ========================================================
    // 10. NOTIFICATION
    // ========================================================

    function showNotification(
        message,
        type = 'info'
    ) {

        const existingNotification =
            document.querySelector(
                '.notification'
            );


        if (existingNotification) {

            existingNotification.remove();

        }


        const notification =
            document.createElement('div');


        notification.className =
            `notification ${type}`;


        const icon =
            type === 'success'
                ? 'fa-check-circle'
                : type === 'error'
                    ? 'fa-exclamation-circle'
                    : 'fa-info-circle';


        notification.innerHTML = `

            <div class="notification-content">

                <i class="fas ${icon}"></i>

                <span>
                    ${message}
                </span>

            </div>

            <button class="close-notification">
                &times;
            </button>

        `;


        document.body.appendChild(
            notification
        );


        setTimeout(() => {

            notification.classList.add(
                'show'
            );

        }, 10);


        setTimeout(() => {

            notification.classList.remove(
                'show'
            );


            setTimeout(() => {

                if (
                    notification.parentNode
                ) {

                    notification.remove();

                }

            }, 300);

        }, 5000);


        const closeButton =
            notification.querySelector(
                '.close-notification'
            );


        if (closeButton) {

            closeButton.addEventListener(
                'click',
                function () {

                    notification.classList.remove(
                        'show'
                    );


                    setTimeout(() => {

                        if (
                            notification.parentNode
                        ) {

                            notification.remove();

                        }

                    }, 300);

                }
            );

        }

    }



    // ========================================================
    // 11. SMOOTH SCROLL
    // ========================================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                'click',
                function (event) {

                    const targetId =
                        this.getAttribute(
                            'href'
                        );


                    if (
                        !targetId ||
                        targetId === '#'
                    ) {

                        return;

                    }


                    const targetElement =
                        document.querySelector(
                            targetId
                        );


                    if (!targetElement) {

                        return;

                    }


                    event.preventDefault();


                    window.scrollTo({

                        top:
                            targetElement.offsetTop - 80,

                        behavior:
                            'smooth'

                    });

                }
            );

        });



    // ========================================================
    // 12. ADD ANIMATION CLASSES
    // ========================================================

    function addAnimationClasses() {

        const elementsToAnimate = [

            '.project-card',

            '.project-row',

            '.service-card',

            '.skill-category',

            '.about-content > div',

            '.contact-card'

        ];


        elementsToAnimate.forEach(
            selector => {

                document
                    .querySelectorAll(selector)
                    .forEach(
                        (element, index) => {

                            element.classList.add(
                                'animate-on-scroll'
                            );


                            element.style.animationDelay =
                                `${index * 0.1}s`;

                        }
                    );

            }
        );

    }



    // ========================================================
    // 13. INITIAL MAIN FEATURES
    // ========================================================

    function initMain() {

        setTimeout(
            showWelcomePopup,
            500
        );


        addAnimationClasses();


        animateOnScroll();

    }


    initMain();


});



// ============================================================
// SECOND DOM CONTENT LOADED
// PRICE CALCULATOR + CHAT + VIDEOS + TESTIMONIALS
// ============================================================

document.addEventListener(
    'DOMContentLoaded',
    function () {



        // ====================================================
        // 14. PRICING CALCULATOR
        // ====================================================

        function initPricingCalculator() {

            const basePrices = {

                basic: 7000,

                business: 15000,

                ecommerce: 35000,

                custom: 50000

            };


            const featurePrices = {

                responsive: 0,

                cms: 3000,

                animations: 5000,

                seo: 3000

            };


            const addonPrices = {

                logo: 1000,

                hosting: 10000,

                maintenance: 10000,

                urgency: 10000

            };


            function calculateTotal() {

                const websiteType =
                    document.querySelector(
                        'input[name="website-type"]:checked'
                    );


                if (!websiteType) {

                    return;

                }


                let total =
                    basePrices[
                        websiteType.value
                    ] || 0;


                let featuresTotal = 0;

                let addonsTotal = 0;


                document
                    .querySelectorAll(
                        'input[name="feature"]:checked'
                    )
                    .forEach(feature => {

                        const price =
                            featurePrices[
                                feature.value
                            ] || 0;


                        featuresTotal +=
                            price;


                        total += price;

                    });


                document
                    .querySelectorAll(
                        'input[name="addon"]:checked'
                    )
                    .forEach(addon => {

                        const price =
                            addonPrices[
                                addon.value
                            ] || 0;


                        addonsTotal +=
                            price;


                        total += price;

                    });


                const discount =
                    total * 0.15;


                const discountedTotal =
                    total - discount;


                const basePriceElement =
                    document.getElementById(
                        'base-price'
                    );


                const featuresElement =
                    document.getElementById(
                        'features-total'
                    );


                const addonsElement =
                    document.getElementById(
                        'addons-total'
                    );


                const totalElement =
                    document.getElementById(
                        'total-price'
                    );


                const discountedElement =
                    document.getElementById(
                        'discounted-price'
                    );


                if (basePriceElement) {

                    basePriceElement.textContent =
                        `Rs ${basePrices[
                            websiteType.value
                        ].toLocaleString('en-IN')}`;

                }


                if (featuresElement) {

                    featuresElement.textContent =
                        `Rs ${featuresTotal.toLocaleString('en-IN')}`;

                }


                if (addonsElement) {

                    addonsElement.textContent =
                        `Rs ${addonsTotal.toLocaleString('en-IN')}`;

                }


                if (totalElement) {

                    totalElement.textContent =
                        `Rs ${total.toLocaleString('en-IN')}`;

                }


                if (discountedElement) {

                    discountedElement.textContent =
                        `Rs ${discountedTotal.toLocaleString('en-IN')}`;

                }


                return {

                    websiteType:
                        websiteType.value,

                    base:
                        basePrices[
                            websiteType.value
                        ],

                    features:
                        featuresTotal,

                    addons:
                        addonsTotal,

                    total:
                        total,

                    discounted:
                        discountedTotal

                };

            }



            document
                .querySelectorAll(
                    'input[name="website-type"]'
                )
                .forEach(input => {

                    input.addEventListener(
                        'change',
                        calculateTotal
                    );

                });


            document
                .querySelectorAll(
                    'input[name="feature"]'
                )
                .forEach(input => {

                    input.addEventListener(
                        'change',
                        calculateTotal
                    );

                });


            document
                .querySelectorAll(
                    'input[name="addon"]'
                )
                .forEach(input => {

                    input.addEventListener(
                        'change',
                        calculateTotal
                    );

                });



            // =================================================
            // WHATSAPP QUOTE
            // =================================================

            const whatsappQuote =
                document.getElementById(
                    'whatsapp-quote'
                );


            if (whatsappQuote) {

                whatsappQuote.addEventListener(
                    'click',
                    function () {

                        const result =
                            calculateTotal();


                        if (!result) {

                            alert(
                                'Please select a website type first.'
                            );

                            return;

                        }


                        const websiteType =
                            document.querySelector(
                                'input[name="website-type"]:checked'
                            );


                        let selectedFeatures = [];


                        document
                            .querySelectorAll(
                                'input[name="feature"]:checked'
                            )
                            .forEach(feature => {

                                const span =
                                    feature
                                        .parentElement
                                        ?.querySelector(
                                            'span'
                                        );


                                selectedFeatures.push(
                                    span
                                        ? span.textContent.trim()
                                        : feature.value
                                );

                            });


                        let selectedAddons = [];


                        document
                            .querySelectorAll(
                                'input[name="addon"]:checked'
                            )
                            .forEach(addon => {

                                const span =
                                    addon
                                        .parentElement
                                        ?.querySelector(
                                            'span'
                                        );


                                selectedAddons.push(
                                    span
                                        ? span.textContent.trim()
                                        : addon.value
                                );

                            });


                        const message = `*Website Quote Request*

*Selected Website:* ${websiteType.value}

*Base Price:* Rs ${result.base.toLocaleString('en-IN')}

*Selected Features:*
${selectedFeatures.length
    ? selectedFeatures.join(', ')
    : 'None'}

*Add-ons:*
${selectedAddons.length
    ? selectedAddons.join(', ')
    : 'None'}

*Features Price:* Rs ${result.features.toLocaleString('en-IN')}

*Add-ons Price:* Rs ${result.addons.toLocaleString('en-IN')}

*Total:* Rs ${result.total.toLocaleString('en-IN')}

*Discounted Price:* Rs ${Math.round(result.discounted).toLocaleString('en-IN')}

*I want to proceed with this quote!*`;


                        window.open(
                            `https://wa.me/918302455961?text=${encodeURIComponent(message)}`,
                            '_blank'
                        );

                    }
                );

            }



            // =================================================
            // DOWNLOAD QUOTE
            // =================================================

            const downloadQuote =
                document.getElementById(
                    'download-quote'
                );


            if (downloadQuote) {

                downloadQuote.addEventListener(
                    'click',
                    function () {

                        alert(
                            'PDF download feature will be implemented soon!'
                        );

                    }
                );

            }


            calculateTotal();

        }



        // ====================================================
        // 15. LIVE CHAT
        // ====================================================

        function initLiveChat() {

            const chatWidget =
                document.querySelector(
                    '.live-chat-widget'
                );


            const chatToggle =
                document.querySelector(
                    '.chat-toggle-btn'
                );


            const closeChat =
                document.querySelector(
                    '.close-chat'
                );


            const quickReplies =
                document.querySelectorAll(
                    '.quick-reply'
                );


            const chatInput =
                document.getElementById(
                    'chat-input'
                );


            const sendBtn =
                document.querySelector(
                    '.send-btn'
                );


            const chatMessages =
                document.querySelector(
                    '.chat-messages'
                );


            // IMPORTANT:
            // If chat HTML is missing, stop here
            // without breaking the rest of website.

            if (
                !chatWidget ||
                !chatToggle ||
                !closeChat ||
                !chatInput ||
                !sendBtn ||
                !chatMessages
            ) {

                console.warn(
                    'Live chat HTML elements not found.'
                );

                return;

            }



            // =================================================
            // TOGGLE CHAT
            // =================================================

            chatToggle.addEventListener(
                'click',
                function () {

                    chatWidget.classList.toggle(
                        'active'
                    );


                    const dot =
                        this.querySelector(
                            '.notification-dot'
                        );


                    if (dot) {

                        dot.style.display =
                            'none';

                    }

                }
            );



            // =================================================
            // CLOSE CHAT
            // =================================================

            closeChat.addEventListener(
                'click',
                function () {

                    chatWidget.classList.remove(
                        'active'
                    );

                }
            );



            // =================================================
            // QUICK REPLIES
            // =================================================

            quickReplies.forEach(
                reply => {

                    reply.addEventListener(
                        'click',
                        function () {

                            const message =
                                this.getAttribute(
                                    'data-reply'
                                );


                            if (!message) return;


                            addUserMessage(
                                message
                            );


                            setTimeout(
                                () => {

                                    let botReply = '';


                                    switch (
                                        message
                                    ) {

                                        case 'I want a website quote':

                                            botReply =
                                                "Great! 😊 I'll help you get a quote. Please use the Price Calculator section to select your website type and requirements.";

                                            break;


                                        case 'Show me your portfolio':

                                            botReply =
                                                "Sure! 💻 Please check my My Projects section. You can visit my live projects using the Visit buttons.";

                                            break;


                                        case "What's your availability?":

                                            botReply =
                                                "I'm available for new projects! 😊 I can discuss your website requirements and project timeline through WhatsApp or the Contact section.";

                                            break;


                                        case 'I need urgent help':

                                            botReply =
                                                "For urgent help, please contact me through WhatsApp at +91 8302455961.";

                                            break;


                                        default:

                                            botReply =
                                                "Thanks for your message! How can I assist you further?";

                                    }


                                    addBotMessage(
                                        botReply
                                    );


                                },
                                800
                            );

                        }
                    );

                }
            );



            // =================================================
            // SEND MESSAGE
            // =================================================

            function sendMessage() {

                const message =
                    chatInput.value.trim();


                if (!message) return;


                addUserMessage(
                    message
                );


                chatInput.value = '';


                setTimeout(
                    () => {

                        let botReply =
                            "Thanks for your message! 😊 For project details, pricing or a custom requirement, you can use the Price Calculator or contact me through WhatsApp.";


                        const lowerMessage =
                            message.toLowerCase();


                        if (
                            lowerMessage.includes(
                                'price'
                            ) ||
                            lowerMessage.includes(
                                'quote'
                            ) ||
                            lowerMessage.includes(
                                'cost'
                            )
                        ) {

                            botReply =
                                "Sure! 💰 Please use my Price Calculator to calculate your website estimate.";

                        }


                        else if (
                            lowerMessage.includes(
                                'project'
                            ) ||
                            lowerMessage.includes(
                                'portfolio'
                            )
                        ) {

                            botReply =
                                "You can check all my projects in the My Projects section of the portfolio.";

                        }


                        else if (
                            lowerMessage.includes(
                                'available'
                            ) ||
                            lowerMessage.includes(
                                'availability'
                            )
                        ) {

                            botReply =
                                "Yes! 😊 I'm available for new frontend and website projects.";

                        }


                        else if (
                            lowerMessage.includes(
                                'hello'
                            ) ||
                            lowerMessage.includes(
                                'hi'
                            ) ||
                            lowerMessage.includes(
                                'hey'
                            )
                        ) {

                            botReply =
                                "Hello! 👋 How can I help you today?";

                        }


                        addBotMessage(
                            botReply
                        );


                    },
                    900
                );

            }



            sendBtn.addEventListener(
                'click',
                sendMessage
            );


            chatInput.addEventListener(
                'keypress',
                function (event) {

                    if (
                        event.key === 'Enter'
                    ) {

                        event.preventDefault();

                        sendMessage();

                    }

                }
            );



            // =================================================
            // ADD USER MESSAGE
            // =================================================

            function addUserMessage(
                text
            ) {

                const messageDiv =
                    document.createElement(
                        'div'
                    );


                messageDiv.className =
                    'message user';


                messageDiv.innerHTML = `

                    <div class="message-content">

                        <p>
                            ${escapeHTML(text)}
                        </p>

                    </div>

                    <span class="message-time">
                        ${getCurrentTime()}
                    </span>

                `;


                chatMessages.appendChild(
                    messageDiv
                );


                chatMessages.scrollTop =
                    chatMessages.scrollHeight;

            }



            // =================================================
            // ADD BOT MESSAGE
            // =================================================

            function addBotMessage(
                text
            ) {

                const messageDiv =
                    document.createElement(
                        'div'
                    );


                messageDiv.className =
                    'message bot';


                messageDiv.innerHTML = `

                    <div class="message-content">

                        <p>
                            ${escapeHTML(text)}
                        </p>

                    </div>

                    <span class="message-time">
                        ${getCurrentTime()}
                    </span>

                `;


                chatMessages.appendChild(
                    messageDiv
                );


                chatMessages.scrollTop =
                    chatMessages.scrollHeight;

            }



            // =================================================
            // SECURITY
            // =================================================

            function escapeHTML(
                text
            ) {

                const div =
                    document.createElement(
                        'div'
                    );


                div.textContent =
                    text;


                return div.innerHTML;

            }



            // =================================================
            // CURRENT TIME
            // =================================================

            function getCurrentTime() {

                const now =
                    new Date();


                return now
                    .getHours()
                    .toString()
                    .padStart(2, '0')
                    +
                    ':' +
                    now
                    .getMinutes()
                    .toString()
                    .padStart(2, '0');

            }



            // =================================================
            // NOTIFICATION DOT
            // =================================================

            setTimeout(
                () => {

                    if (
                        !chatWidget.classList.contains(
                            'active'
                        )
                    ) {

                        const dot =
                            chatToggle.querySelector(
                                '.notification-dot'
                            );


                        if (dot) {

                            dot.style.display =
                                'block';

                        }

                    }

                },
                10000
            );

        }



        // ====================================================
        // 16. WHATSAPP BUTTONS
        // ====================================================

        function initWhatsAppButtons() {

            console.log(
                'WhatsApp buttons initialized'
            );

        }



        // ====================================================
        // 17. PROJECT VIDEOS
        // ====================================================

        function initProjectVideos() {

            const videoButtons =
                document.querySelectorAll(
                    '.play-video-btn'
                );


            const videoModal =
                document.querySelector(
                    '.video-modal'
                );


            const closeModal =
                document.querySelector(
                    '.close-modal'
                );


            const demoVideo =
                document.querySelector(
                    '.demo-video'
                );


            const videoTitle =
                document.getElementById(
                    'video-title'
                );


            const videoDescription =
                document.getElementById(
                    'video-description'
                );


            if (
                !videoButtons.length ||
                !videoModal ||
                !closeModal ||
                !demoVideo
            ) {

                return;

            }


            const videoData = {

                'dietitian-demo.mp4': {

                    title:
                        'Dietitian Maryam Website Walkthrough',

                    description:
                        'Complete website tour showing appointment system, diet plans, and client portal.'

                },


                'cake-shop-demo.mp4': {

                    title:
                        'Cake Shop E-commerce Demo',

                    description:
                        'Online ordering system with payment gateway integration and admin panel.'

                },


                'doctor-demo.mp4': {

                    title:
                        'Dr. Zahid Clinic Portal',

                    description:
                        'Medical website with patient management and appointment booking system.'

                },


                'coffee-demo.mp4': {

                    title:
                        'Coffee Shop Website Tour',

                    description:
                        'Cafe website with menu, location finder, and online reservation system.'

                }

            };


            videoButtons.forEach(
                button => {

                    button.addEventListener(
                        'click',
                        function () {

                            const videoFile =
                                this.getAttribute(
                                    'data-video'
                                );


                            const data =
                                videoData[
                                    videoFile
                                ] || {

                                    title:
                                        'Project Demo',

                                    description:
                                        'Watch the project demo video'

                                };


                            demoVideo.src =
                                videoFile;


                            if (videoTitle) {

                                videoTitle.textContent =
                                    data.title;

                            }


                            if (videoDescription) {

                                videoDescription.textContent =
                                    data.description;

                            }


                            videoModal.classList.add(
                                'active'
                            );


                            const playPromise =
                                demoVideo.play();


                            if (
                                playPromise &&
                                playPromise.catch
                            ) {

                                playPromise.catch(
                                    () => {}
                                );

                            }

                        }
                    );

                }
            );


            closeModal.addEventListener(
                'click',
                function () {

                    videoModal.classList.remove(
                        'active'
                    );


                    demoVideo.pause();

                }
            );


            videoModal.addEventListener(
                'click',
                function (event) {

                    if (
                        event.target ===
                        videoModal
                    ) {

                        videoModal.classList.remove(
                            'active'
                        );


                        demoVideo.pause();

                    }

                }
            );

        }



        // ====================================================
        // 18. TESTIMONIAL SLIDER
        // ====================================================

        function initTestimonialSlider() {

            const track =
                document.querySelector(
                    '.slider-track'
                );


            const slides =
                document.querySelectorAll(
                    '.testimonial-slide'
                );


            const dots =
                document.querySelectorAll(
                    '.dot'
                );


            const prevBtn =
                document.querySelector(
                    '.slider-prev'
                );


            const nextBtn =
                document.querySelector(
                    '.slider-next'
                );


            const sliderContainer =
                document.querySelector(
                    '.slider-container'
                );


            // Stop safely if slider doesn't exist

            if (
                !track ||
                !slides.length ||
                !sliderContainer
            ) {

                return;

            }


            let currentSlide = 0;

            const totalSlides =
                slides.length;


            function updateSlider() {

                track.style.transform =
                    `translateX(-${currentSlide * 100}%)`;


                dots.forEach(
                    (dot, index) => {

                        dot.classList.toggle(
                            'active',
                            index === currentSlide
                        );

                    }
                );


                slides.forEach(
                    (slide, index) => {

                        slide.classList.toggle(
                            'active',
                            index === currentSlide
                        );

                    }
                );

            }


            function nextSlide() {

                currentSlide =
                    (currentSlide + 1) %
                    totalSlides;


                updateSlider();

            }


            function prevSlide() {

                currentSlide =
                    (
                        currentSlide -
                        1 +
                        totalSlides
                    ) %
                    totalSlides;


                updateSlider();

            }


            let slideInterval =
                setInterval(
                    nextSlide,
                    5000
                );


            function resetInterval() {

                clearInterval(
                    slideInterval
                );


                slideInterval =
                    setInterval(
                        nextSlide,
                        5000
                    );

            }



            if (nextBtn) {

                nextBtn.addEventListener(
                    'click',
                    function () {

                        nextSlide();

                        resetInterval();

                    }
                );

            }


            if (prevBtn) {

                prevBtn.addEventListener(
                    'click',
                    function () {

                        prevSlide();

                        resetInterval();

                    }
                );

            }


            dots.forEach(
                (dot, index) => {

                    dot.addEventListener(
                        'click',
                        function () {

                            currentSlide =
                                index;


                            updateSlider();


                            resetInterval();

                        }
                    );

                }
            );



            // Keyboard navigation

            document.addEventListener(
                'keydown',
                function (event) {

                    if (
                        event.key ===
                        'ArrowRight'
                    ) {

                        nextSlide();

                        resetInterval();

                    }


                    else if (
                        event.key ===
                        'ArrowLeft'
                    ) {

                        prevSlide();

                        resetInterval();

                    }

                }
            );



            // Pause on hover

            sliderContainer.addEventListener(
                'mouseenter',
                function () {

                    clearInterval(
                        slideInterval
                    );

                }
            );


            sliderContainer.addEventListener(
                'mouseleave',
                function () {

                    resetInterval();

                }
            );



            // =================================================
            // TOUCH / SWIPE
            // =================================================

            let startX = 0;

            let endX = 0;


            sliderContainer.addEventListener(
                'touchstart',
                function (event) {

                    startX =
                        event.touches[0].clientX;

                }
            );


            sliderContainer.addEventListener(
                'touchend',
                function (event) {

                    endX =
                        event.changedTouches[0].clientX;


                    if (
                        startX - endX > 50
                    ) {

                        nextSlide();

                        resetInterval();

                    }


                    else if (
                        endX - startX > 50
                    ) {

                        prevSlide();

                        resetInterval();

                    }

                }
            );



            // =================================================
            // TESTIMONIAL VIDEO
            // =================================================

            const playTestimonialVideo =
                document.querySelector(
                    '.play-testimonial-video'
                );


            if (
                playTestimonialVideo
            ) {

                playTestimonialVideo.addEventListener(
                    'click',
                    function () {

                        const videoModal =
                            document.createElement(
                                'div'
                            );


                        videoModal.className =
                            'video-modal active';


                        videoModal.innerHTML = `

                            <div class="modal-content">

                                <button class="close-modal">
                                    &times;
                                </button>

                                <div class="video-placeholder">

                                    <i class="fab fa-youtube"></i>

                                    <h3>
                                        Video Testimonial
                                    </h3>

                                    <p>
                                        Client video testimonial
                                        will play here
                                    </p>

                                    <button
                                        class="btn primary-btn watch-on-youtube">

                                        <i class="fab fa-youtube"></i>

                                        Watch on YouTube

                                    </button>

                                </div>

                            </div>

                        `;


                        document.body.appendChild(
                            videoModal
                        );


                        const closeModal =
                            videoModal.querySelector(
                                '.close-modal'
                            );


                        closeModal.addEventListener(
                            'click',
                            function () {

                                videoModal.remove();

                            }
                        );


                        videoModal.addEventListener(
                            'click',
                            function (event) {

                                if (
                                    event.target ===
                                    videoModal
                                ) {

                                    videoModal.remove();

                                }

                            }
                        );


                        const youtubeBtn =
                            videoModal.querySelector(
                                '.watch-on-youtube'
                            );


                        youtubeBtn.addEventListener(
                            'click',
                            function () {

                                window.open(
                                    'https://youtube.com',
                                    '_blank'
                                );

                            }
                        );

                    }
                );

            }


            updateSlider();

        }



        // ====================================================
        // 19. INITIALIZE ALL FEATURES
        // ====================================================

        function initAllFeatures() {

            initPricingCalculator();

            initLiveChat();

            initWhatsAppButtons();

            initProjectVideos();

            initTestimonialSlider();


            console.log(
                'All portfolio features initialized successfully! 🚀'
            );

        }


        initAllFeatures();

    }

);