
        // Enhanced JavaScript functionality
        // Mobile Navigation Toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        // Modal Functionality
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeSignup = document.getElementById('closeSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        // Payment Modal Functionality
        const paymentModal = document.getElementById('paymentModal');
        const traditionalPaymentModal = document.getElementById('traditionalPaymentModal');
        const paymentSuccessModal = document.getElementById('paymentSuccessModal');
        const planDetailsModal = document.getElementById('planDetailsModal');
        const closePayment = document.getElementById('closePayment');
        const closeTraditionalPayment = document.getElementById('closeTraditionalPayment');
        const closeSuccess = document.getElementById('closeSuccess');
        const closePlanDetails = document.getElementById('closePlanDetails');
        const confirmPayment = document.getElementById('confirmPayment');
        const confirmTraditionalPayment = document.getElementById('confirmTraditionalPayment');
        // Export Modal Functionality
        const exportModal = document.getElementById('exportModal');
        const closeExport = document.getElementById('closeExport');
        const downloadExport = document.getElementById('downloadExport');
        const emailExport = document.getElementById('emailExport');
        // Analytics Modal Functionality
        const analyticsModal = document.getElementById('analyticsModal');
        const closeAnalytics = document.getElementById('closeAnalytics');
        const exportAnalytics = document.getElementById('exportAnalytics');
        const scheduleReport = document.getElementById('scheduleReport');
        // Tariff Details Modal Functionality
        const tariffDetailsModal = document.getElementById('tariffDetailsModal');
        const closeTariffDetails = document.getElementById('closeTariffDetails');
        const confirmTariffPayment = document.getElementById('confirmTariffPayment');
        // User Profile Modal Functionality
        const userProfileModal = document.getElementById('userProfileModal');
        const userSettingsModal = document.getElementById('userSettingsModal');
        const closeUserProfile = document.getElementById('closeUserProfile');
        const closeUserSettings = document.getElementById('closeUserSettings');
        const saveProfile = document.getElementById('saveProfile');
        const saveSettings = document.getElementById('saveSettings');
        // User Profile Dropdown
        const userAvatar = document.getElementById('userAvatar');
        const userDropdown = document.getElementById('userDropdown');
        let isDropdownOpen = false;
        
        // Contact Sales Modal
        const contactSalesBtn = document.getElementById('contactSalesBtn');
        const contactModal = document.getElementById('contactModal');
        const closeContact = document.getElementById('closeContact');
        const contactForm = document.getElementById('contactForm');
        const contactSuccess = document.getElementById('contactSuccess');
        
        // Schedule Demo Modal
        const scheduleDemoBtn = document.getElementById('scheduleDemoBtn');
        const scheduleDemoBtn2 = document.getElementById('scheduleDemoBtn2');
        const demoModal = document.getElementById('demoModal');
        const closeDemo = document.getElementById('closeDemo');
        const demoForm = document.getElementById('demoForm');
        const demoSuccess = document.getElementById('demoSuccess');
        
        // Download Form Modal
        const downloadFormModal = document.getElementById('downloadFormModal');
        const closeDownloadForm = document.getElementById('closeDownloadForm');
        const confirmDownload = document.getElementById('confirmDownload');
        
        // Open Login Modal
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'block';
        });
        // Open Signup Modal
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'block';
        });
        // Close Login Modal
        closeLogin.addEventListener('click', function() {
            loginModal.style.display = 'none';
            document.getElementById('loginForm').reset();
            document.getElementById('loginSuccess').style.display = 'none';
        });
        // Close Signup Modal
        closeSignup.addEventListener('click', function() {
            signupModal.style.display = 'none';
            document.getElementById('signupForm').reset();
            document.getElementById('signupSuccess').style.display = 'none';
        });
        // Switch to Login from Signup
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
            document.getElementById('signupForm').reset();
            document.getElementById('signupSuccess').style.display = 'none';
        });
        // Close Payment Modal
        closePayment.addEventListener('click', function() {
            paymentModal.style.display = 'none';
        });
        // Close Traditional Payment Modal
        closeTraditionalPayment.addEventListener('click', function() {
            traditionalPaymentModal.style.display = 'none';
        });
        // Close Success Modal
        closeSuccess.addEventListener('click', function() {
            paymentSuccessModal.style.display = 'none';
        });
        // Close Plan Details Modal
        closePlanDetails.addEventListener('click', function() {
            planDetailsModal.style.display = 'none';
        });
        // Close Export Modal
        closeExport.addEventListener('click', function() {
            exportModal.style.display = 'none';
        });
        // Close Analytics Modal
        closeAnalytics.addEventListener('click', function() {
            analyticsModal.style.display = 'none';
        });
        // Close Tariff Details Modal
        closeTariffDetails.addEventListener('click', function() {
            tariffDetailsModal.style.display = 'none';
        });
        // Close User Profile Modal
        closeUserProfile.addEventListener('click', function() {
            userProfileModal.style.display = 'none';
        });
        // Close User Settings Modal
        closeUserSettings.addEventListener('click', function() {
            userSettingsModal.style.display = 'none';
        });
        // Close Contact Modal
        closeContact.addEventListener('click', function() {
            contactModal.style.display = 'none';
            contactForm.reset();
            contactSuccess.style.display = 'none';
        });
        // Close Demo Modal
        closeDemo.addEventListener('click', function() {
            demoModal.style.display = 'none';
            demoForm.reset();
            demoSuccess.style.display = 'none';
        });
        // Close Download Form Modal
        closeDownloadForm.addEventListener('click', function() {
            downloadFormModal.style.display = 'none';
        });
        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';
                document.getElementById('loginForm').reset();
                document.getElementById('loginSuccess').style.display = 'none';
            }
            if (event.target == signupModal) {
                signupModal.style.display = 'none';
                document.getElementById('signupForm').reset();
                document.getElementById('signupSuccess').style.display = 'none';
            }
            if (event.target == paymentModal) {
                paymentModal.style.display = 'none';
            }
            if (event.target == traditionalPaymentModal) {
                traditionalPaymentModal.style.display = 'none';
            }
            if (event.target == paymentSuccessModal) {
                paymentSuccessModal.style.display = 'none';
            }
            if (event.target == planDetailsModal) {
                planDetailsModal.style.display = 'none';
            }
            if (event.target == exportModal) {
                exportModal.style.display = 'none';
            }
            if (event.target == analyticsModal) {
                analyticsModal.style.display = 'none';
            }
            if (event.target == tariffDetailsModal) {
                tariffDetailsModal.style.display = 'none';
            }
            if (event.target == userProfileModal) {
                userProfileModal.style.display = 'none';
            }
            if (event.target == userSettingsModal) {
                userSettingsModal.style.display = 'none';
            }
            if (event.target == contactModal) {
                contactModal.style.display = 'none';
                contactForm.reset();
                contactSuccess.style.display = 'none';
            }
            if (event.target == demoModal) {
                demoModal.style.display = 'none';
                demoForm.reset();
                demoSuccess.style.display = 'none';
            }
            if (event.target == downloadFormModal) {
                downloadFormModal.style.display = 'none';
            }
            // Close user dropdown if clicked outside
            if (!event.target.closest('.user-profile-dropdown') && isDropdownOpen) {
                userDropdown.classList.remove('show');
                isDropdownOpen = false;
            }
        });
        // Login Form Submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            if (email && password) {
                // Send to Flask backend
                fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                }).then(r => r.json()).then(data => {
                    console.log('Login response:', data);
                }).catch(err => console.error('Login error:', err));
                // Show success message
                document.getElementById('loginSuccess').style.display = 'block';
                // Hide form
                this.style.display = 'none';
                // Simulate redirect after 2 seconds
                setTimeout(function() {
                    loginModal.style.display = 'none';
                    document.getElementById('loginForm').reset();
                    document.getElementById('loginSuccess').style.display = 'none';
                    document.getElementById('loginForm').style.display = 'block';
                    // Show user profile after login
                    userAvatar.style.display = 'flex';
                }, 2000);
            }
        });
        // Signup Form Submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const company = document.getElementById('signupCompany').value;
            if (name && email && password && password === confirmPassword) {
                // Send to Flask backend
                fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password, company })
                }).then(r => r.json()).then(data => {
                    console.log('Signup response:', data);
                }).catch(err => console.error('Signup error:', err));
                // Show success message
                document.getElementById('signupSuccess').style.display = 'block';
                // Hide form
                this.style.display = 'none';
                // Simulate redirect after 2 seconds
                setTimeout(function() {
                    signupModal.style.display = 'none';
                    document.getElementById('signupForm').reset();
                    document.getElementById('signupSuccess').style.display = 'none';
                    document.getElementById('signupForm').style.display = 'block';
                    // Show user profile after signup
                    userAvatar.style.display = 'flex';
                }, 2000);
            } else if (password !== confirmPassword) {
                alert('Passwords do not match!');
            }
        });
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.closest('.auth-form')) {
                anchor.addEventListener('click', function (e) {
                    if (this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            }
        });
        // Tracking Functionality
        function trackShipment() {
            const trackingInput   = document.getElementById('trackingInput');
            const trackingResults = document.getElementById('trackingResults');
            const trackBtn        = document.querySelector('#tracking .btn-primary');
            const tid             = trackingInput.value.trim();
            if (!tid) return;

            // Button loading state
            const origLabel = trackBtn.innerHTML;
            trackBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking...';
            trackBtn.disabled = true;

            // POST to Flask
            fetch('/api/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tracking_id: tid })
            }).then(r => r.json()).then(serverData => {
                console.log('Track response:', serverData);
            }).catch(err => console.error('Track error:', err));

            // Random route data pool
            const routes = [
                { origin:'Shanghai, China',     originPt:[720,155], current:'Singapore Port',  currentPt:[670,230], dest:'Los Angeles, USA',    destPt:[130,150], progress:45, eta:'5 Days 8 Hrs',  temp:'20°C', weight:'2,400 kg', status:'In Transit' },
                { origin:'Mumbai, India',        originPt:[580,200], current:'Dubai Port, UAE', currentPt:[490,130], dest:'Hamburg, Germany',    destPt:[395,80],  progress:58, eta:'3 Days 14 Hrs', temp:'18°C', weight:'1,200 kg', status:'In Transit' },
                { origin:'Rotterdam, Netherlands',originPt:[395,80], current:'Suez Canal',      currentPt:[450,165], dest:'Singapore',           destPt:[670,230], progress:40, eta:'6 Days 2 Hrs',  temp:'22°C', weight:'3,100 kg', status:'In Transit' },
                { origin:'New York, USA',        originPt:[200,130], current:'Atlantic Ocean',   currentPt:[310,140], dest:'London, UK',          destPt:[370,75],  progress:65, eta:'2 Days 6 Hrs',  temp:'15°C', weight:'980 kg',   status:'In Transit'  },
                { origin:'Tokyo, Japan',         originPt:[760,130], current:'Pacific Ocean',    currentPt:[450,160], dest:'Vancouver, Canada',   destPt:[90,105],  progress:30, eta:'8 Days 12 Hrs', temp:'16°C', weight:'1,850 kg', status:'In Transit'  },
                { origin:'Dubai, UAE',           originPt:[490,130], current:'Red Sea',          currentPt:[440,185], dest:'Barcelona, Spain',    destPt:[360,95],  progress:70, eta:'1 Day 18 Hrs',  temp:'24°C', weight:'760 kg',   status:'Near Arrival'},
            ];

            const r   = routes[Math.floor(Math.random() * routes.length)];
            const ox  = r.originPt[0],  oy  = r.originPt[1];
            const cx  = r.currentPt[0], cy  = r.currentPt[1];
            const dx  = r.destPt[0],    dy  = r.destPt[1];
            const mx1 = (ox+cx)/2,      my1 = Math.min(oy,cy) - 40;
            const mx2 = (cx+dx)/2,      my2 = Math.min(cy,dy) - 40;
            const routeD = `M ${ox},${oy} Q ${mx1},${my1} ${cx},${cy} Q ${mx2},${my2} ${dx},${dy}`;

            setTimeout(() => {
                trackBtn.innerHTML = origLabel;
                trackBtn.disabled  = false;

                // Update badge
                const badge = document.getElementById('trackIdBadge');
                if (badge) badge.textContent = tid.toUpperCase();

                // Rebuild SVG route
                const ap = document.getElementById('animRoute');
                const dp = document.getElementById('routePath');
                if (ap && dp) {
                    ap.setAttribute('d', routeD);
                    dp.setAttribute('d', routeD);
                    // Reset & replay stroke animation
                    ap.setAttribute('stroke-dashoffset','400');
                    ap.setAttribute('stroke-dasharray','400');
                    void ap.getBoundingClientRect();
                    ap.innerHTML = '<animate attributeName="stroke-dashoffset" from="400" to="0" dur="2.5s" fill="freeze" begin="0.1s"/>';
                }

                // Move ship path
                const sm = document.querySelector('#shipGroup animateMotion');
                if (sm) sm.setAttribute('path', routeD);

                // Update origin/current/dest circles & labels
                function movePt(id, nx, ny, label, sub, color) {
                    const grp = document.getElementById(id);
                    if (!grp) return;
                    const [c1, ring, t1, t2] = grp.children;
                    c1.setAttribute('cx', nx); c1.setAttribute('cy', ny);
                    ring.setAttribute('cx', nx); ring.setAttribute('cy', ny);
                    t1.setAttribute('x', nx); t1.setAttribute('y', ny+22); t1.textContent = label;
                    t2.setAttribute('x', nx); t2.setAttribute('y', ny+35); t2.textContent = sub;
                    c1.setAttribute('fill', color); ring.setAttribute('stroke', color); t1.setAttribute('fill', color);
                }

                // Rebuild route points directly via SVG attribute updates
                const svg = document.getElementById('trackingMapSvg');
                if (svg) {
                    // Remove old dynamic points if any
                    svg.querySelectorAll('.dyn-pt').forEach(e => e.remove());

                    // Helper to create a labelled point group
                    function makePt(x, y, color, label, sublabel) {
                        const g = document.createElementNS('http://www.w3.org/2000/svg','g');
                        g.classList.add('dyn-pt');
                        const ns = 'http://www.w3.org/2000/svg';
                        const c  = document.createElementNS(ns,'circle');
                        c.setAttribute('cx', x); c.setAttribute('cy', y);
                        c.setAttribute('r', '8'); c.setAttribute('fill', color);
                        c.style.filter = 'url(#glow)';
                        const ring = document.createElementNS(ns,'circle');
                        ring.setAttribute('cx', x); ring.setAttribute('cy', y);
                        ring.setAttribute('r', '8'); ring.setAttribute('fill','none');
                        ring.setAttribute('stroke', color); ring.setAttribute('stroke-width','2');
                        ring.classList.add('pulse-ring');
                        const t1 = document.createElementNS(ns,'text');
                        t1.setAttribute('x', x); t1.setAttribute('y', y+20);
                        t1.setAttribute('text-anchor','middle'); t1.setAttribute('fill', color);
                        t1.setAttribute('font-size','12'); t1.setAttribute('font-weight','bold');
                        t1.textContent = label.split(',')[0];
                        const t2 = document.createElementNS(ns,'text');
                        t2.setAttribute('x', x); t2.setAttribute('y', y+34);
                        t2.setAttribute('text-anchor','middle');
                        t2.setAttribute('fill','rgba(255,255,255,0.6)');
                        t2.setAttribute('font-size','10'); t2.textContent = sublabel;
                        g.appendChild(c); g.appendChild(ring); g.appendChild(t1); g.appendChild(t2);
                        return g;
                    }

                    svg.appendChild(makePt(ox, oy, '#10b981', r.origin,  'Origin'));
                    svg.appendChild(makePt(cx, cy, '#f59e0b', r.current, '● ' + r.status));
                    svg.appendChild(makePt(dx, dy, '#ef4444', r.dest,    'Destination'));

                    // Hide static hard-coded labels
                    svg.querySelectorAll('circle:not(.dyn-pt circle), text:not(.dyn-pt text)').forEach(el => {
                        const labels = ['Mumbai','Dubai','Hamburg'];
                        if (el.tagName === 'text' && labels.some(l => el.textContent.includes(l))) {
                            el.setAttribute('opacity','0');
                        }
                        if (el.tagName === 'circle' && !el.classList.contains('pulse-ring')) {
                            const fill = el.getAttribute('fill');
                            if (['#10b981','#f59e0b','#ef4444'].includes(fill) && !el.closest('.dyn-pt')) {
                                el.setAttribute('opacity','0');
                            }
                        }
                    });
                }

                // Update status chips
                const chips = document.querySelectorAll('.ts-chip');
                const chipData = [
                    '<i class="fas fa-map-marker-alt"></i> ' + r.current,
                    '<i class="fas fa-clock"></i> ETA: ' + r.eta,
                    '<i class="fas fa-thermometer-half"></i> ' + r.temp + ' | 45% RH',
                    '<i class="fas fa-shield-alt"></i> Blockchain Verified',
                    '<i class="fas fa-weight-hanging"></i> ' + r.weight,
                ];
                chips.forEach((c, i) => { if (chipData[i]) c.innerHTML = chipData[i]; });

                // Update route step labels
                const routeLabels = document.querySelectorAll('.route-steps + div span');
                if (routeLabels.length >= 6) {
                    routeLabels[0].textContent = r.origin.split(',')[0];
                    routeLabels[2].textContent = r.current.split(',')[0] + ' ●';
                    routeLabels[5].textContent = r.dest.split(',')[0];
                }

                // Animate progress bar
                const fill = document.getElementById('shipProgress');
                const lbl  = document.getElementById('progressLabel');
                if (fill) { fill.style.width = '0%'; setTimeout(() => fill.style.width = r.progress + '%', 100); }
                if (lbl)  lbl.textContent = r.progress + '% Complete';

                // Show results
                trackingResults.style.display = 'block';
                trackingResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1800);
        }
        // Cryptocurrency Converter
        function convertCurrency() {
            const usdAmount = parseFloat(document.getElementById('usdAmount').value);
            const cryptoSelect = document.getElementById('cryptoSelect').value;
            const resultDiv = document.getElementById('conversionResult');
            if (usdAmount && usdAmount > 0) {
                // Mock conversion rates (in real app, these would come from an API)
                const rates = {
                    'BTC': 0.000023,
                    'ETH': 0.00032,
                    'LTC': 0.0098,
                    'ADA': 1.25,
                    'USDC': 1.00,
                    'DOT': 0.12,
                    'XRP': 2.15,
                    'DOGE': 15.8,
                    'SOL': 0.035,
                    'MATIC': 1.85
                };
                const convertedAmount = (usdAmount * rates[cryptoSelect]).toFixed(8);
                resultDiv.innerHTML = `
                    <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <h4><i class="fas fa-calculator"></i> Conversion Result</h4>
                        <p>$${usdAmount} USD = ${convertedAmount} ${cryptoSelect}</p>
                        <small>*Rates updated in real-time</small>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = '<p style="color: #ff6b6b;">Please enter a valid amount</p>';
            }
        }
        // Add Enter key support for tracking input
        document.getElementById('trackingInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                trackShipment();
            }
        });
        // Add Enter key support for currency converter
        document.getElementById('usdAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                convertCurrency();
            }
        });
        // Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        // Observe all service cards and feature cards
        document.querySelectorAll('.service-card, .feature-card, .solution-card, .tariff-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
        // Counter Animation for Stats
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 200;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = formatNumber(target);
                    clearInterval(timer);
                } else {
                    element.textContent = formatNumber(Math.floor(current));
                }
            }, 10);
        }
        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(0) + 'K';
            } else {
                return num.toString();
            }
        }
        // Trigger counter animation when stats section is visible
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    const targets = [5000, 200, 1000000, 99.5, 2400000000, 45];
                    statNumbers.forEach((element, index) => {
                        if (targets[index]) {
                            animateCounter(element, targets[index]);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        const statsSection = document.querySelector('#stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
        // Dynamic header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });
        // Enhanced button interactions
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        // Payment Modal Functionality
        function openPaymentModal(cryptoName, iconClass) {
            // Set modal content
            document.getElementById('paymentTitle').textContent = `Pay with ${cryptoName}`;
            document.getElementById('paymentIcon').className = iconClass;
            // You can customize these values based on the selected service
            // For demo purposes, we'll use sample values
            document.getElementById('serviceType').textContent = 'Ocean Freight';
            document.getElementById('weight').textContent = '1000 kg';
            document.getElementById('basePrice').textContent = '$3,000.00';
            document.getElementById('cryptoDiscount').textContent = '-$450.00'; // 15% discount
            document.getElementById('totalAmount').innerHTML = '<strong>$2,550.00</strong>';
            // Show payment modal
            paymentModal.style.display = 'block';
        }
        // Traditional Payment Modal Functionality
        function openTraditionalPaymentModal() {
            // Set modal content
            document.getElementById('traditionalServiceType').textContent = 'Ocean Freight';
            document.getElementById('traditionalWeight').textContent = '1000 kg';
            document.getElementById('traditionalBasePrice').textContent = '$3,000.00';
            document.getElementById('traditionalDiscount').textContent = '-$0.00'; // No crypto discount
            document.getElementById('traditionalTotalAmount').innerHTML = '<strong>$3,000.00</strong>';
            // Show traditional payment modal
            traditionalPaymentModal.style.display = 'block';
        }
        // Confirm Payment Function for Crypto
        confirmPayment.addEventListener('click', function() {
            const cryptoAddress = document.getElementById('cryptoAddress').value;
            if (cryptoAddress && cryptoAddress.trim() !== '') {
                // Hide payment modal
                paymentModal.style.display = 'none';
                // Show success modal after a short delay
                setTimeout(function() {
                    paymentSuccessModal.style.display = 'block';
                }, 500);
                // Reset the payment form
                document.getElementById('cryptoAddress').value = '';
            } else {
                alert('Please enter your cryptocurrency wallet address');
            }
        });
        // Confirm Traditional Payment Function
        confirmTraditionalPayment.addEventListener('click', function() {
            const cardName = document.getElementById('cardName').value;
            const cardNumber = document.getElementById('cardNumber').value;
            const cardExpiry = document.getElementById('cardExpiry').value;
            const cardCVV = document.getElementById('cardCVV').value;
            const billingAddress = document.getElementById('billingAddress').value;
            if (cardName && cardNumber && cardExpiry && cardCVV && billingAddress) {
                // Hide traditional payment modal
                traditionalPaymentModal.style.display = 'none';
                // Show success modal after a short delay
                setTimeout(function() {
                    paymentSuccessModal.style.display = 'block';
                }, 500);
                // Reset the payment form
                document.getElementById('cardName').value = '';
                document.getElementById('cardNumber').value = '';
                document.getElementById('cardExpiry').value = '';
                document.getElementById('cardCVV').value = '';
                document.getElementById('billingAddress').value = '';
            } else {
                alert('Please fill in all payment details');
            }
        });
        // Plan Details Functionality
        function openPlanDetails(title, price, description, planType) {
            // Set modal content
            document.getElementById('planTitle').textContent = title;
            document.getElementById('planPriceDisplay').textContent = price;
            document.getElementById('planDescription').textContent = description;
            // Clear existing features
            const featuresList = document.getElementById('planFeaturesList');
            featuresList.innerHTML = '';
            // Clear existing benefits
            const benefitsGrid = document.getElementById('planBenefitsGrid');
            benefitsGrid.innerHTML = '';
            // Define plan details based on plan type
            let features = [];
            let benefits = [];
            switch(planType) {
                case 'express-air':
                    features = [
                        '1-3 Days Delivery',
                        'Real-time GPS Tracking',
                        'Full Insurance Coverage',
                        'Priority Handling at All Hubs',
                        'Temperature Controlled Options',
                        '24/7 Customer Support',
                        'Customs Clearance Assistance',
                        'Flexible Pickup & Delivery Times'
                    ];
                    benefits = [
                        {icon: 'fas fa-clock', title: 'Fast Delivery', desc: '1-3 business days'},
                        {icon: 'fas fa-shield-alt', title: 'Full Insurance', desc: 'Complete coverage'},
                        {icon: 'fas fa-star', title: 'Priority Service', desc: 'Top priority handling'},
                        {icon: 'fas fa-thermometer-half', title: 'Temp Control', desc: 'Climate options'}
                    ];
                    break;
                case 'ocean-freight':
                    features = [
                        '15-45 Days Delivery',
                        'Blockchain Verified Tracking',
                        'Full Cargo Insurance',
                        'FCL & LCL Container Options',
                        'Volume Discounts Available',
                        'Port-to-Port or Door-to-Door',
                        'Customs Documentation Support',
                        'Consolidation Services'
                    ];
                    benefits = [
                        {icon: 'fas fa-ship', title: 'Cost Effective', desc: 'Best value shipping'},
                        {icon: 'fas fa-shield-alt', title: 'Full Insurance', desc: 'Complete coverage'},
                        {icon: 'fas fa-box', title: 'Container Options', desc: 'FCL & LCL available'},
                        {icon: 'fas fa-percent', title: 'Volume Discounts', desc: 'Save on bulk'}
                    ];
                    break;
                case 'ground-transport':
                    features = [
                        '5-10 Days Delivery',
                        'Real-time GPS Tracking',
                        'Basic Insurance Included',
                        'Regional & National Coverage',
                        'Eco-Friendly Vehicle Options',
                        'Scheduled Pickup & Delivery',
                        'Weekend Delivery Available',
                        'Oversized Cargo Handling'
                    ];
                    benefits = [
                        {icon: 'fas fa-truck', title: 'Reliable Service', desc: 'Consistent delivery'},
                        {icon: 'fas fa-leaf', title: 'Eco-Friendly', desc: 'Green options'},
                        {icon: 'fas fa-map-marked', title: 'Wide Coverage', desc: 'Nationwide'},
                        {icon: 'fas fa-clock', title: 'Flexible Scheduling', desc: 'Your convenience'}
                    ];
                    break;
                case 'premium-express':
                    features = [
                        '24-Hour Delivery Guarantee',
                        'Dedicated Courier Service',
                        'Premium Insurance Coverage',
                        'Temperature Control Options',
                        'Priority Customs Clearance',
                        'White Glove Service Available',
                        '24/7 Dedicated Support',
                        'Real-time Notifications'
                    ];
                    benefits = [
                        {icon: 'fas fa-rocket', title: 'Ultra Fast', desc: '24-hour delivery'},
                        {icon: 'fas fa-user-tie', title: 'Dedicated Courier', desc: 'Personal service'},
                        {icon: 'fas fa-shield-alt', title: 'Premium Insurance', desc: 'Enhanced coverage'},
                        {icon: 'fas fa-certificate', title: 'Guaranteed', desc: 'On-time or free'}
                    ];
                    break;
                case 'economy-bulk':
                    features = [
                        '30-60 Days Delivery',
                        'Basic Tracking Available',
                        'Shared Container Shipping',
                        'Best Value Pricing',
                        'Minimum 1000kg Required',
                        'Port-to-Port Service',
                        'Consolidated Shipments',
                        'Economy Insurance Options'
                    ];
                    benefits = [
                        {icon: 'fas fa-dollar-sign', title: 'Lowest Cost', desc: 'Best value'},
                        {icon: 'fas fa-boxes', title: 'Bulk Shipping', desc: 'High volume'},
                        {icon: 'fas fa-hand-holding-usd', title: 'Budget Friendly', desc: 'Save more'},
                        {icon: 'fas fa-shipping-fast', title: 'Consolidated', desc: 'Efficient shipping'}
                    ];
                    break;
            }
            // Populate features
            features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                featuresList.appendChild(li);
            });
            // Populate benefits
            benefits.forEach(benefit => {
                const benefitDiv = document.createElement('div');
                benefitDiv.className = 'benefit-item';
                benefitDiv.innerHTML = `
                    <div class="benefit-icon">
                        <i class="${benefit.icon}"></i>
                    </div>
                    <h4>${benefit.title}</h4>
                    <p>${benefit.desc}</p>
                `;
                benefitsGrid.appendChild(benefitDiv);
            });
            // Show plan details modal
            planDetailsModal.style.display = 'block';
        }
        // Payment Method Selection - FIXED: Now it works properly
        document.querySelectorAll('.payment-method-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.payment-method-btn').forEach(b => {
                    b.classList.remove('active');
                });
                // Add active class to clicked button
                this.classList.add('active');
                // Get payment method
                const method = this.getAttribute('data-method');
                // Handle different payment methods
                if (method === 'traditional') {
                    document.querySelector('.traditional-payment-form').style.display = 'block';
                    // Update modal title and icon for traditional payment
                    document.getElementById('paymentTitle').textContent = 'Pay with Credit Card';
                    document.getElementById('paymentIcon').className = 'fas fa-credit-card';
                } else {
                    document.querySelector('.traditional-payment-form').style.display = 'none';
                    // Set up crypto payment
                    let cryptoName = '';
                    let iconClass = '';
                    switch(method) {
                        case 'bitcoin':
                            cryptoName = 'Bitcoin';
                            iconClass = 'fab fa-bitcoin';
                            break;
                        case 'ethereum':
                            cryptoName = 'Ethereum';
                            iconClass = 'fab fa-ethereum';
                            break;
                        case 'usdc':
                            cryptoName = 'USDC';
                            iconClass = 'fab fa-usd';
                            break;
                    }
                    // Set modal content for crypto payment
                    document.getElementById('paymentTitle').textContent = `Pay with ${cryptoName}`;
                    document.getElementById('paymentIcon').className = iconClass;
                }
            });
        });
        // Export Report Modal Functionality
        function openExportModal() {
            exportModal.style.display = 'block';
        }
        // Analytics Modal Functionality
        function openAnalyticsModal() {
            analyticsModal.style.display = 'block';
        }
        // Download Export Report
        downloadExport.addEventListener('click', function() {
            // Show download form instead of direct download
            exportModal.style.display = 'none';
            downloadFormModal.style.display = 'block';
        });
        // Email Export Report
        emailExport.addEventListener('click', function() {
            // In a real application, this would send an email
            setTimeout(() => {
                exportModal.style.display = 'none';
                alert('Report has been emailed to your registered email address.');
            }, 1500);
        });
        // Export Analytics Data
        exportAnalytics.addEventListener('click', function() {
            // Show download form instead of direct download
            analyticsModal.style.display = 'none';
            downloadFormModal.style.display = 'block';
        });
        // Schedule Report
        scheduleReport.addEventListener('click', function() {
            // In a real application, this would open a scheduling interface
            setTimeout(() => {
                analyticsModal.style.display = 'none';
                alert('Report scheduling interface would open here.');
            }, 1500);
        });
        // Toggle Switch Functionality
        document.getElementById('paymentToggle').addEventListener('change', function() {
            if (this.checked) {
                console.log('Advanced Payment Options Enabled');
            } else {
                console.log('Advanced Payment Options Disabled');
            }
        });
        // User Profile Dropdown Toggle
        userAvatar.addEventListener('click', function() {
            if (isDropdownOpen) {
                userDropdown.classList.remove('show');
                isDropdownOpen = false;
            } else {
                userDropdown.classList.add('show');
                isDropdownOpen = true;
            }
        });
        // Open User Profile Modal
        function openUserProfile() {
            userDropdown.classList.remove('show');
            isDropdownOpen = false;
            userProfileModal.style.display = 'block';
        }
        // Open User Settings Modal
        function openUserSettings() {
            userDropdown.classList.remove('show');
            isDropdownOpen = false;
            userSettingsModal.style.display = 'block';
        }
        // Toggle Theme Function
        function toggleTheme() {
            userDropdown.classList.remove('show');
            isDropdownOpen = false;
            // In a real application, this would toggle between light and dark themes
            document.body.classList.toggle('dark-theme');
            const themePreference = document.getElementById('themePreference');
            themePreference.checked = !themePreference.checked;
        }
        // Logout Function
        function logoutUser() {
            userDropdown.classList.remove('show');
            isDropdownOpen = false;
            if (confirm('Are you sure you want to logout?')) {
                userAvatar.style.display = 'none';
                alert('You have been logged out successfully.');
            }
        }
        // Save Profile Function - FIXED: Now updates user details
        saveProfile.addEventListener('click', function() {
            // Get values from form
            const newName = document.getElementById('userName').value;
            const newEmail = document.getElementById('userEmail').value;
            const newCompany = document.getElementById('userCompany').value;
            const newPhone = document.getElementById('userPhone').value;
            
            // Validate inputs
            if (newName && newEmail) {
                // Update display elements
                document.getElementById('profileNameDisplay').textContent = newName;
                document.getElementById('profileEmailDisplay').textContent = newEmail;
                
                // Show success message
                const successMessage = document.getElementById('profileUpdateSuccess');
                successMessage.style.display = 'block';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
                
                // In a real application, this would save the profile data to a database
                console.log('Profile updated:', {name: newName, email: newEmail, company: newCompany, phone: newPhone});
            } else {
                alert('Please fill in all required fields (Name and Email)');
            }
        });
        // Save Settings Function - FIXED: Now saves settings
        saveSettings.addEventListener('click', function() {
            // Get settings values
            const emailNotifications = document.getElementById('notificationEmail').checked;
            const smsNotifications = document.getElementById('notificationSMS').checked;
            const darkMode = document.getElementById('themePreference').checked;
            const language = document.getElementById('languagePreference').value;
            const currency = document.getElementById('currencyPreference').value;
            
            // Show success message
            const successMessage = document.getElementById('settingsUpdateSuccess');
            successMessage.style.display = 'block';
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
            
            // In a real application, this would save the settings to a database
            console.log('Settings updated:', {
                emailNotifications,
                smsNotifications,
                darkMode,
                language,
                currency
            });
            
            // Apply dark mode if selected
            if (darkMode) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
        // Tariff Details Functionality (Blue Background Modal)
        function openTariffDetails(title, price, description, tariffType) {
            // Set modal content
            document.getElementById('tariffTitle').textContent = title;
            document.getElementById('tariffPrice').textContent = price;
            document.getElementById('tariffDescription').textContent = description;
            // Clear existing features
            const featuresList = document.getElementById('tariffFeaturesList');
            featuresList.innerHTML = '';
            // Clear existing benefits
            const benefitsGrid = document.getElementById('tariffBenefitsGrid');
            benefitsGrid.innerHTML = '';
            // Define tariff details based on tariff type
            let features = [];
            let benefits = [];
            switch(tariffType) {
                case 'express-air':
                    features = [
                        '1-3 Days Delivery',
                        'Real-time GPS Tracking',
                        'Full Insurance Coverage',
                        'Priority Handling at All Hubs',
                        'Temperature Controlled Options',
                        '24/7 Customer Support',
                        'Customs Clearance Assistance',
                        'Flexible Pickup & Delivery Times'
                    ];
                    benefits = [
                        {icon: 'fas fa-clock', title: 'Fast Delivery', desc: '1-3 business days'},
                        {icon: 'fas fa-shield-alt', title: 'Full Insurance', desc: 'Complete coverage'},
                        {icon: 'fas fa-star', title: 'Priority Service', desc: 'Top priority handling'},
                        {icon: 'fas fa-thermometer-half', title: 'Temp Control', desc: 'Climate options'}
                    ];
                    break;
                case 'ocean-freight':
                    features = [
                        '15-45 Days Delivery',
                        'Blockchain Verified Tracking',
                        'Full Cargo Insurance',
                        'FCL & LCL Container Options',
                        'Volume Discounts Available',
                        'Port-to-Port or Door-to-Door',
                        'Customs Documentation Support',
                        'Consolidation Services'
                    ];
                    benefits = [
                        {icon: 'fas fa-ship', title: 'Cost Effective', desc: 'Best value shipping'},
                        {icon: 'fas fa-shield-alt', title: 'Full Insurance', desc: 'Complete coverage'},
                        {icon: 'fas fa-box', title: 'Container Options', desc: 'FCL & LCL available'},
                        {icon: 'fas fa-percent', title: 'Volume Discounts', desc: 'Save on bulk'}
                    ];
                    break;
                case 'ground-transport':
                    features = [
                        '5-10 Days Delivery',
                        'Real-time GPS Tracking',
                        'Basic Insurance Included',
                        'Regional & National Coverage',
                        'Eco-Friendly Vehicle Options',
                        'Scheduled Pickup & Delivery',
                        'Weekend Delivery Available',
                        'Oversized Cargo Handling'
                    ];
                    benefits = [
                        {icon: 'fas fa-truck', title: 'Reliable Service', desc: 'Consistent delivery'},
                        {icon: 'fas fa-leaf', title: 'Eco-Friendly', desc: 'Green options'},
                        {icon: 'fas fa-map-marked', title: 'Wide Coverage', desc: 'Nationwide'},
                        {icon: 'fas fa-clock', title: 'Flexible Scheduling', desc: 'Your convenience'}
                    ];
                    break;
                case 'premium-express':
                    features = [
                        '24-Hour Delivery Guarantee',
                        'Dedicated Courier Service',
                        'Premium Insurance Coverage',
                        'Temperature Control Options',
                        'Priority Customs Clearance',
                        'White Glove Service Available',
                        '24/7 Dedicated Support',
                        'Real-time Notifications'
                    ];
                    benefits = [
                        {icon: 'fas fa-rocket', title: 'Ultra Fast', desc: '24-hour delivery'},
                        {icon: 'fas fa-user-tie', title: 'Dedicated Courier', desc: 'Personal service'},
                        {icon: 'fas fa-shield-alt', title: 'Premium Insurance', desc: 'Enhanced coverage'},
                        {icon: 'fas fa-certificate', title: 'Guaranteed', desc: 'On-time or free'}
                    ];
                    break;
                case 'economy-bulk':
                    features = [
                        '30-60 Days Delivery',
                        'Basic Tracking Available',
                        'Shared Container Shipping',
                        'Best Value Pricing',
                        'Minimum 1000kg Required',
                        'Port-to-Port Service',
                        'Consolidated Shipments',
                        'Economy Insurance Options'
                    ];
                    benefits = [
                        {icon: 'fas fa-dollar-sign', title: 'Lowest Cost', desc: 'Best value'},
                        {icon: 'fas fa-boxes', title: 'Bulk Shipping', desc: 'High volume'},
                        {icon: 'fas fa-hand-holding-usd', title: 'Budget Friendly', desc: 'Save more'},
                        {icon: 'fas fa-shipping-fast', title: 'Consolidated', desc: 'Efficient shipping'}
                    ];
                    break;
            }
            // Populate features
            features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                featuresList.appendChild(li);
            });
            // Populate benefits
            benefits.forEach(benefit => {
                const benefitDiv = document.createElement('div');
                benefitDiv.className = 'tariff-details-benefit-item';
                benefitDiv.innerHTML = `
                    <div class="tariff-details-benefit-icon">
                        <i class="${benefit.icon}"></i>
                    </div>
                    <h4>${benefit.title}</h4>
                    <p>${benefit.desc}</p>
                `;
                benefitsGrid.appendChild(benefitDiv);
            });
            // Show tariff details modal
            tariffDetailsModal.style.display = 'block';
        }
        // Tariff Payment Method Selection
        document.querySelectorAll('.tariff-details-payment-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.tariff-details-payment-btn').forEach(b => {
                    b.classList.remove('active');
                });
                // Add active class to clicked button
                this.classList.add('active');
                // Get payment method
                const method = this.getAttribute('data-method');
                // Handle different payment methods
                if (method === 'traditional') {
                    document.getElementById('tariffTraditionalForm').style.display = 'block';
                } else {
                    document.getElementById('tariffTraditionalForm').style.display = 'none';
                }
            });
        });
        // Confirm Tariff Payment
        confirmTariffPayment.addEventListener('click', function() {
            const activePaymentBtn = document.querySelector('.tariff-details-payment-btn.active');
            if (!activePaymentBtn) {
                alert('Please select a payment method');
                return;
            }
            const method = activePaymentBtn.getAttribute('data-method');
            if (method === 'traditional') {
                // Validate traditional payment form
                const cardName = document.getElementById('tariffCardName').value;
                const cardNumber = document.getElementById('tariffCardNumber').value;
                const cardExpiry = document.getElementById('tariffCardExpiry').value;
                const cardCVV = document.getElementById('tariffCardCVV').value;
                const billingAddress = document.getElementById('tariffBillingAddress').value;
                if (cardName && cardNumber && cardExpiry && cardCVV && billingAddress) {
                    // Hide tariff details modal
                    tariffDetailsModal.style.display = 'none';
                    // Show success modal after a short delay
                    setTimeout(function() {
                        paymentSuccessModal.style.display = 'block';
                    }, 500);
                    // Reset the payment form
                    document.getElementById('tariffCardName').value = '';
                    document.getElementById('tariffCardNumber').value = '';
                    document.getElementById('tariffCardExpiry').value = '';
                    document.getElementById('tariffCardCVV').value = '';
                    document.getElementById('tariffBillingAddress').value = '';
                } else {
                    alert('Please fill in all payment details');
                }
            } else {
                // For crypto payments, show success immediately
                tariffDetailsModal.style.display = 'none';
                setTimeout(function() {
                    paymentSuccessModal.style.display = 'block';
                }, 500);
            }
        });
        
        // Contact Sales Button Functionality
        contactSalesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            contactModal.style.display = 'block';
        });
        
        // Schedule Demo Button Functionality
        scheduleDemoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            demoModal.style.display = 'block';
        });
        
        // Second Schedule Demo Button Functionality
        scheduleDemoBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            demoModal.style.display = 'block';
        });
        
        // Contact Form Submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const company = document.getElementById('companyName').value;
            const message = document.getElementById('message').value;
            
            if (name && email && phone && company && message) {
                // Send to Flask backend
                fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, company, message })
                }).then(r => r.json()).then(data => {
                    console.log('Contact response:', data);
                }).catch(err => console.error('Contact error:', err));
                // Hide form
                this.style.display = 'none';
                // Show success message
                contactSuccess.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactSuccess.style.display = 'none';
                    this.style.display = 'block';
                    contactModal.style.display = 'none';
                }, 3000);
            } else {
                alert('Please fill in all required fields');
            }
        });
        
        // Demo Form Submission
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('demoName').value;
            const email = document.getElementById('demoEmail').value;
            const phone = document.getElementById('demoPhone').value;
            const date = document.getElementById('demoDate').value;
            const time = document.getElementById('demoTime').value;
            const company = document.getElementById('demoCompany').value;
            
            if (name && email && phone && date && time && company) {
                // Send to Flask backend
                fetch('/api/demo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, date, time, company })
                }).then(r => r.json()).then(data => {
                    console.log('Demo response:', data);
                }).catch(err => console.error('Demo error:', err));
                // Hide form
                this.style.display = 'none';
                // Show success message
                demoSuccess.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    demoForm.reset();
                    demoSuccess.style.display = 'none';
                    this.style.display = 'block';
                    demoModal.style.display = 'none';
                }, 3000);
            } else {
                alert('Please fill in all required fields');
            }
        });
        
        // Currency Selection for Download Form
        function selectCurrency(element, currencyCode) {
            // Remove selected class from all options
            document.querySelectorAll('.currency-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Add selected class to clicked option
            element.classList.add('selected');
            // Store selected currency (in real app, you would use this for download)
            console.log('Selected currency:', currencyCode);
        }
        
        // Confirm Download
        confirmDownload.addEventListener('click', function() {
            const selectedCurrency = document.querySelector('.currency-option.selected');
            const downloadFormat = document.getElementById('downloadFormat').value;
            
            if (!selectedCurrency) {
                alert('Please select a currency for your download');
                return;
            }
            
            // Get currency name
            const currencyName = selectedCurrency.querySelector('.currency-name').textContent;
            
            // Hide download form
            downloadFormModal.style.display = 'none';
            
            // Show success message
            alert(`Preparing your download in ${currencyName} as ${downloadFormat.toUpperCase()} format...`);
            
            // In a real application, this would trigger the actual download
            // For demo purposes, we'll just show a success message
            setTimeout(() => {
                alert('Download completed successfully!');
            }, 2000);
        });
        
        console.log('LogiChain OS - Advanced Blockchain Logistics Platform Loaded Successfully!');

        /* =====================================================
           RIPPLE EFFECT — All buttons
        ===================================================== */
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn, .auth-btn, .payment-method-btn, .tariff-details-payment-btn, .amount-chip, .crypto-tile');
            if (!btn) return;
            const r = document.createElement('span');
            r.className = 'ripple';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            r.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size/2) + 'px;top:' + (e.clientY - rect.top - size/2) + 'px;';
            btn.appendChild(r);
            setTimeout(() => r.remove(), 700);
        });

        /* =====================================================
           ENHANCED PAYMENT MODAL (multi-step)
        ===================================================== */
        // Build overlay HTML once
        const pmOverlay = document.createElement('div');
        pmOverlay.className = 'pay-modal-overlay';
        pmOverlay.id = 'pmOverlay';
        pmOverlay.innerHTML = `
          <div class="pay-modal-box" id="pmBox">
            <div class="pay-modal-header">
              <button class="pm-close" id="pmClose">&#x2715;</button>
              <h2 id="pmTitle"><i class="fab fa-bitcoin"></i> Crypto Payment</h2>
              <p id="pmSubtitle">Secure blockchain-powered transaction</p>
            </div>
            <div class="pay-modal-body">
              <!-- Step indicator -->
              <div class="pm-steps">
                <div class="pm-step active" id="pms1"></div>
                <div class="pm-step"        id="pms2"></div>
                <div class="pm-step"        id="pms3"></div>
              </div>
              <div class="pm-step-label">
                <span class="cur" id="pml1">Service</span>
                <span         id="pml2">Payment</span>
                <span         id="pml3">Confirm</span>
              </div>

              <!-- STEP 1: service & amount -->
              <div id="pmStep1">
                <div class="pm-field">
                  <label>Service Type</label>
                  <select id="pmService">
                    <option value="ocean">Ocean Freight — $3/kg</option>
                    <option value="air">Express Air — $15/kg</option>
                    <option value="road">Road Logistics — $1.5/kg</option>
                    <option value="rail">Rail Freight — $2/kg</option>
                    <option value="cold">Cold Chain — $8/kg</option>
                  </select>
                </div>
                <div class="pm-field">
                  <label>Cargo Weight (kg)</label>
                  <input type="number" id="pmWeight" value="1000" min="1"/>
                </div>
                <div class="pm-field">
                  <label>Quick Select Amount</label>
                  <div class="amount-chips" id="amountChips">
                    <span class="amount-chip sel" data-val="1000">$1,000</span>
                    <span class="amount-chip"     data-val="2500">$2,500</span>
                    <span class="amount-chip"     data-val="5000">$5,000</span>
                    <span class="amount-chip"     data-val="10000">$10,000</span>
                    <span class="amount-chip"     data-val="custom">Custom</span>
                  </div>
                </div>
                <div class="pm-field" id="customAmtField" style="display:none;">
                  <label>Custom Amount (USD)</label>
                  <input type="number" id="pmCustomAmt" placeholder="Enter custom amount"/>
                </div>
                <div class="pm-actions">
                  <button class="btn btn-primary" id="pmNext1">Next <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>

              <!-- STEP 2: payment method -->
              <div id="pmStep2" style="display:none;">
                <p style="margin-bottom:.8rem;font-weight:600;color:var(--gray-700);">Select Payment Method</p>
                <div class="crypto-grid" id="pmCryptoGrid">
                  <div class="crypto-tile sel" data-method="btc"><i class="fab fa-bitcoin" style="color:#f7931a;"></i><span>Bitcoin</span></div>
                  <div class="crypto-tile" data-method="eth"><i class="fab fa-ethereum" style="color:#627eea;"></i><span>Ethereum</span></div>
                  <div class="crypto-tile" data-method="usdc"><i class="fas fa-dollar-sign" style="color:#2775ca;"></i><span>USDC</span></div>
                  <div class="crypto-tile" data-method="dot"><i class="fas fa-atom" style="color:#e6007a;"></i><span>Polkadot</span></div>
                  <div class="crypto-tile" data-method="ada"><i class="fas fa-fire" style="color:#0033ad;"></i><span>Cardano</span></div>
                  <div class="crypto-tile" data-method="card"><i class="fas fa-credit-card" style="color:#1a73e8;"></i><span>Card</span></div>
                </div>

                <!-- Crypto wallet field -->
                <div id="pmWalletField">
                  <div class="pm-field" id="pmWalletGroup">
                    <label id="pmWalletLabel">Wallet Address</label>
                    <input type="text" id="pmWallet" placeholder="Enter your wallet address"/>
                    <span class="err-msg">Please enter a valid wallet address</span>
                  </div>
                </div>

                <!-- Card fields -->
                <div id="pmCardFields" style="display:none;">
                  <div class="pm-field" id="pmCardNameGroup">
                    <label>Name on Card</label>
                    <input type="text" id="pmCardName" placeholder="Full name"/>
                    <span class="err-msg">Required</span>
                  </div>
                  <div class="pm-field" id="pmCardNumGroup">
                    <label>Card Number</label>
                    <input type="text" id="pmCardNum" placeholder="XXXX XXXX XXXX XXXX" maxlength="19"/>
                    <span class="err-msg">Enter a valid 16-digit number</span>
                  </div>
                  <div class="pm-row">
                    <div class="pm-field" id="pmExpGroup">
                      <label>Expiry</label>
                      <input type="text" id="pmExp" placeholder="MM/YY" maxlength="5"/>
                      <span class="err-msg">Required</span>
                    </div>
                    <div class="pm-field" id="pmCvvGroup">
                      <label>CVV</label>
                      <input type="text" id="pmCvv" placeholder="123" maxlength="4"/>
                      <span class="err-msg">Required</span>
                    </div>
                  </div>
                  <div class="pm-field" id="pmAddrGroup">
                    <label>Billing Address</label>
                    <input type="text" id="pmAddr" placeholder="Street, City, Country"/>
                    <span class="err-msg">Required</span>
                  </div>
                </div>

                <div class="pm-actions">
                  <button class="btn btn-outline" id="pmBack2"><i class="fas fa-arrow-left"></i> Back</button>
                  <button class="btn btn-primary" id="pmNext2">Review <i class="fas fa-arrow-right"></i></button>
                </div>
              </div>

              <!-- STEP 3: confirm -->
              <div id="pmStep3" style="display:none;">
                <div class="pay-summary" id="pmSummary"></div>
                <div class="pm-actions">
                  <button class="btn btn-outline" id="pmBack3"><i class="fas fa-arrow-left"></i> Back</button>
                  <button class="btn btn-primary" id="pmConfirm"><i class="fas fa-lock"></i> Pay Now</button>
                </div>
              </div>

              <!-- SUCCESS screen -->
              <div class="pm-success" id="pmSuccess">
                <div class="pm-success-icon"><i class="fas fa-check"></i></div>
                <h3>Payment Successful!</h3>
                <p>Your shipment has been booked and payment confirmed on the blockchain.</p>
                <div class="txid" id="pmTxId">TX: Generating...</div>
                <button class="btn btn-success" id="pmDone" style="margin-top:1rem;">Done</button>
              </div>
            </div>
          </div>`;
        document.body.appendChild(pmOverlay);

        // State
        let pmState = { step:1, method:'btc', amount:1000, service:'ocean' };

        function pmSetStep(n) {
            pmState.step = n;
            [1,2,3].forEach(i => {
                document.getElementById('pmStep'+i).style.display = i===n ? 'block' : 'none';
                const s = document.getElementById('pms'+i);
                s.className = 'pm-step' + (i < n ? ' done' : i===n ? ' active' : '');
                const l = document.getElementById('pml'+i);
                l.className = i===n ? 'cur' : '';
            });
        }

        // Open modal
        function openEnhancedPayModal(name, icon, isCrypto) {
            document.getElementById('pmTitle').innerHTML = '<i class="'+icon+'"></i> '+name+' Payment';
            pmState.method = isCrypto ? name.toLowerCase().replace(' ','') : 'card';
            // pre-select tile
            document.querySelectorAll('.crypto-tile').forEach(t => t.classList.remove('sel'));
            const found = document.querySelector('.crypto-tile[data-method="'+pmState.method+'"]');
            if (found) found.classList.add('sel');
            pmSetStep(1);
            document.getElementById('pmSuccess').style.display = 'none';
            pmOverlay.classList.add('open');
        }

        // Close
        document.getElementById('pmClose').addEventListener('click', () => pmOverlay.classList.remove('open'));
        pmOverlay.addEventListener('click', e => { if(e.target===pmOverlay) pmOverlay.classList.remove('open'); });
        document.getElementById('pmDone').addEventListener('click', () => pmOverlay.classList.remove('open'));

        // Amount chips
        document.getElementById('amountChips').addEventListener('click', e => {
            const chip = e.target.closest('.amount-chip');
            if (!chip) return;
            document.querySelectorAll('.amount-chip').forEach(c => c.classList.remove('sel'));
            chip.classList.add('sel');
            const val = chip.dataset.val;
            document.getElementById('customAmtField').style.display = val==='custom' ? 'block' : 'none';
            if (val !== 'custom') pmState.amount = parseInt(val);
        });

        // Crypto tiles
        document.getElementById('pmCryptoGrid').addEventListener('click', e => {
            const tile = e.target.closest('.crypto-tile');
            if (!tile) return;
            document.querySelectorAll('.crypto-tile').forEach(t => t.classList.remove('sel'));
            tile.classList.add('sel');
            pmState.method = tile.dataset.method;
            const isCard = pmState.method === 'card';
            document.getElementById('pmWalletField').style.display = isCard ? 'none' : 'block';
            document.getElementById('pmCardFields').style.display  = isCard ? 'block' : 'none';
        });

        // Step 1 → 2
        document.getElementById('pmNext1').addEventListener('click', () => {
            const svc = document.getElementById('pmService').value;
            const wt  = parseInt(document.getElementById('pmWeight').value) || 1000;
            const sel = document.querySelector('.amount-chip.sel');
            if (sel && sel.dataset.val !== 'custom') {
                pmState.amount = parseInt(sel.dataset.val);
            } else {
                const ca = parseFloat(document.getElementById('pmCustomAmt').value);
                pmState.amount = ca > 0 ? ca : 1000;
            }
            pmState.service = svc;
            pmState.weight  = wt;
            pmSetStep(2);
        });

        // Step 2 → 3
        document.getElementById('pmNext2').addEventListener('click', () => {
            let ok = true;
            if (pmState.method === 'card') {
                const fields = [
                    ['pmCardName','pmCardNameGroup'],['pmCardNum','pmCardNumGroup'],
                    ['pmExp','pmExpGroup'],['pmCvv','pmCvvGroup'],['pmAddr','pmAddrGroup']
                ];
                fields.forEach(([id, grp]) => {
                    const el = document.getElementById(id);
                    const g  = document.getElementById(grp);
                    if (!el.value.trim()) { g.classList.add('err'); ok=false; }
                    else g.classList.remove('err');
                });
            } else {
                const wa = document.getElementById('pmWallet');
                const wg = document.getElementById('pmWalletGroup');
                if (!wa.value.trim()) { wg.classList.add('err'); ok=false; }
                else wg.classList.remove('err');
            }
            if (!ok) return;
            const svcNames = {ocean:'Ocean Freight',air:'Express Air',road:'Road Logistics',rail:'Rail Freight',cold:'Cold Chain'};
            const discount = pmState.method==='card' ? 0 : Math.round(pmState.amount*0.15);
            const total    = pmState.amount - discount;
            document.getElementById('pmSummary').innerHTML = `
              <div class="pay-summary-row"><span>Service</span><span>${svcNames[pmState.service]||pmState.service}</span></div>
              <div class="pay-summary-row"><span>Amount</span><span>$${pmState.amount.toLocaleString()}</span></div>
              <div class="pay-summary-row"><span>Crypto Discount (15%)</span><span style="color:#10b981;">-$${discount.toLocaleString()}</span></div>
              <div class="pay-summary-row"><span>Total</span><span>$${total.toLocaleString()}</span></div>
              <div class="pay-summary-row"><span>Payment Method</span><span>${pmState.method.toUpperCase()}</span></div>`;
            pmSetStep(3);
        });

        // Back buttons
        document.getElementById('pmBack2').addEventListener('click', () => pmSetStep(1));
        document.getElementById('pmBack3').addEventListener('click', () => pmSetStep(2));

        // Confirm payment
        document.getElementById('pmConfirm').addEventListener('click', () => {
            const btn = document.getElementById('pmConfirm');
            btn.innerHTML = '<div class="loading"></div> Processing...';
            btn.disabled = true;
            // POST to Flask
            fetch('/api/payment', {
                method:'POST', headers:{'Content-Type':'application/json'},
                body: JSON.stringify({ service: pmState.service, amount: pmState.amount, method: pmState.method })
            }).then(r=>r.json()).then(d => console.log('Payment:', d)).catch(()=>{});
            setTimeout(() => {
                ['pmStep3','pmStep2','pmStep1'].forEach(id => document.getElementById(id).style.display='none');
                [1,2,3].forEach(i => { document.getElementById('pms'+i).className='pm-step done'; });
                const tx = 'LC'+Math.random().toString(36).substr(2,9).toUpperCase()+'CHAIN';
                document.getElementById('pmTxId').textContent = 'TX: ' + tx;
                document.getElementById('pmSuccess').style.display = 'block';
                btn.innerHTML = '<i class="fas fa-lock"></i> Pay Now';
                btn.disabled = false;
            }, 2000);
        });

        // Override the old openPaymentModal calls to use the new modal
        function openPaymentModal(name, icon) {
            openEnhancedPayModal(name, icon, true);
        }
        function openTraditionalPaymentModal() {
            openEnhancedPayModal('Card', 'fas fa-credit-card', false);
            // pre-select card tile
            setTimeout(() => {
                document.querySelectorAll('.crypto-tile').forEach(t => t.classList.remove('sel'));
                const cardTile = document.querySelector('.crypto-tile[data-method="card"]');
                if (cardTile) { cardTile.classList.add('sel'); pmState.method='card'; }
                document.getElementById('pmWalletField').style.display = 'none';
                document.getElementById('pmCardFields').style.display  = 'block';
            }, 50);
        }

        // Card number auto-format
        document.getElementById('pmCardNum').addEventListener('input', function() {
            let v = this.value.replace(/\D/g,'').substr(0,16);
            this.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
        });
        document.getElementById('pmExp').addEventListener('input', function() {
            let v = this.value.replace(/\D/g,'').substr(0,4);
            if (v.length > 2) v = v.substr(0,2)+'/'+v.substr(2);
            this.value = v;
        });
