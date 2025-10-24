// Sample data for projects and blog posts
const projects = [
    {
        id: "wifi-audit-lab",
        title: "Wi-Fi Audit Lab (Authorized)",
        summary: "Captured WPA handshakes in isolated lab, analyzed with Hashcat and custom wordlists.",
        tools: ["Kali", "Aircrack-ng", "Hashcat", "Wireshark"],
        role: "Pentester (lab)",
        outcomes: ["Improved detection rules", "Documented crack-resistance baselines"],
        tags: ["wireless", "pentest", "lab"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Need to understand Wi-Fi security vulnerabilities in controlled environment",
            approach: "Set up isolated lab with multiple AP configurations, captured handshakes using aircrack-ng suite",
            result: "Successfully cracked weak passwords, documented attack vectors and defensive measures",
            lessons: ["Weak passwords remain primary vulnerability", "WPA3 provides significant improvements"]
        }
    },
    {
        id: "network-monitoring-siem",
        title: "SIEM Implementation & Tuning",
        summary: "Deployed Splunk SIEM across enterprise network with custom correlation rules.",
        tools: ["Splunk", "Python", "Syslog", "ELK Stack"],
        role: "Security Engineer",
        outcomes: ["40% faster incident response", "500+ endpoints monitored"],
        tags: ["siem", "monitoring", "enterprise"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Manual log analysis was too slow for effective threat detection",
            approach: "Implemented Splunk SIEM with custom dashboards and correlation rules",
            result: "Automated threat detection reduced response time from hours to minutes",
            lessons: ["Proper log parsing is crucial", "False positive tuning requires ongoing effort"]
        }
    },
    {
        id: "web-app-pentest",
        title: "Web Application Security Assessment",
        summary: "Comprehensive security testing of internal web applications using OWASP methodology.",
        tools: ["Burp Suite", "OWASP ZAP", "Nmap", "SQLMap"],
        role: "Security Consultant",
        outcomes: ["15 critical vulnerabilities found", "Security training delivered"],
        tags: ["web-security", "owasp", "pentest"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Client needed comprehensive security assessment of web applications",
            approach: "Used OWASP testing methodology with automated and manual testing tools",
            result: "Identified and documented vulnerabilities with remediation recommendations",
            lessons: ["Manual testing catches what automation misses", "Developer education is key"]
        }
    },
    {
        id: "phishing-simulation",
        title: "Phishing Awareness Campaign",
        summary: "Designed and executed phishing simulation to improve employee security awareness.",
        tools: ["Gophish", "Python", "HTML/CSS", "Analytics"],
        role: "Security Awareness Lead",
        outcomes: ["60% reduction in click rates", "200+ employees trained"],
        tags: ["phishing", "awareness", "training"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "High phishing click rates indicated need for security awareness training",
            approach: "Created realistic phishing campaigns with educational follow-up",
            result: "Significant improvement in employee security awareness and behavior",
            lessons: ["Realistic simulations are most effective", "Positive reinforcement works better than punishment"]
        }
    },
    {
        id: "incident-response-playbook",
        title: "Incident Response Automation",
        summary: "Built automated incident response workflows using Python and security tools.",
        tools: ["Python", "Slack API", "VirusTotal API", "MISP"],
        role: "Incident Response Lead",
        outcomes: ["75% faster containment", "Automated evidence collection"],
        tags: ["incident-response", "automation", "python"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Manual incident response processes were too slow and error-prone",
            approach: "Developed automated workflows for common incident types",
            result: "Faster response times and more consistent evidence collection",
            lessons: ["Automation reduces human error", "Documentation is crucial for forensics"]
        }
    },
    {
        id: "cloud-security-assessment",
        title: "AWS Security Configuration Review",
        summary: "Comprehensive security assessment of AWS infrastructure and configurations.",
        tools: ["AWS CLI", "CloudTrail", "Config Rules", "Security Hub"],
        role: "Cloud Security Engineer",
        outcomes: ["Security posture improved", "Compliance gaps identified"],
        tags: ["aws", "cloud-security", "compliance"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Client needed to ensure AWS infrastructure met security best practices",
            approach: "Used AWS security tools and manual review to assess configurations",
            result: "Identified misconfigurations and provided remediation roadmap",
            lessons: ["Cloud security requires different mindset", "Automated compliance checking is essential"]
        }
    },
    {
        id: "malware-analysis-lab",
        title: "Malware Analysis Environment",
        summary: "Built isolated malware analysis lab with automated sandboxing and reporting.",
        tools: ["Cuckoo Sandbox", "YARA", "Volatility", "Python"],
        role: "Malware Analyst",
        outcomes: ["Automated analysis pipeline", "Threat intelligence feeds"],
        tags: ["malware", "analysis", "sandbox"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Manual malware analysis was time-consuming and risky",
            approach: "Set up automated sandbox environment with custom analysis scripts",
            result: "Faster malware analysis with detailed behavioral reports",
            lessons: ["Isolation is critical", "Automation enables scale"]
        }
    },
    {
        id: "network-segmentation",
        title: "Zero Trust Network Implementation",
        summary: "Designed and implemented zero trust network architecture for enterprise.",
        tools: ["Cisco ISE", "Fortinet", "Python", "Monitoring"],
        role: "Network Security Architect",
        outcomes: ["Micro-segmentation achieved", "Attack surface reduced"],
        tags: ["zero-trust", "network", "architecture"],
        links: { github: "https://github.com/amerblb", demo: "#" },
        details: {
            problem: "Traditional network security model was insufficient for modern threats",
            approach: "Implemented zero trust principles with micro-segmentation",
            result: "Improved security posture with better visibility and control",
            lessons: ["Zero trust requires cultural change", "Monitoring is essential for success"]
        }
    }
];

const posts = [
    {
        slug: "threat-model-home-lab",
        title: "Threat Modeling a Home-Lab: Practical Paths to Resilience",
        date: "2024-01-15",
        readMinutes: 9,
        tags: ["threat-modeling", "defense", "lab"],
        hero: { subtitle: "From VLANs to DNS hygiene" },
        body: [
            { type: "h2", content: "Context & Assumptions" },
            { type: "p", content: "Building a home lab for cybersecurity learning requires careful consideration of security implications. This article outlines a practical approach to threat modeling your lab environment, focusing on isolation, monitoring, and defense-in-depth principles." },
            { type: "blockquote", content: "The best defense is understanding your attack surface before adversaries do." },
            { type: "h2", content: "Network Segmentation Strategy" },
            { type: "p", content: "Proper network segmentation is the foundation of lab security. I recommend implementing at least three VLANs:" },
            { type: "list", ordered: true, items: ["Management VLAN (VLAN 10) - For administrative access", "Lab VLAN (VLAN 20) - For vulnerable systems and testing", "DMZ VLAN (VLAN 30) - For services exposed to internet"] },
            { type: "code", lang: "bash", content: "# VLAN configuration example\nvlan 10\n  name MANAGEMENT\nvlan 20\n  name LAB\nvlan 30\n  name DMZ" },
            { type: "h2", content: "Risk Assessment Matrix" },
            { type: "table", caption: "Risk Matrix", headers: ["Threat", "Likelihood", "Impact", "Risk Level"], rows: [["MITM Attack", "Medium", "High", "High"], ["Rogue AP", "Low", "Medium", "Medium"], ["Malware Spread", "High", "High", "Critical"], ["Data Exfiltration", "Low", "High", "Medium"]] },
            { type: "h2", content: "Defensive Controls" },
            { type: "list", ordered: false, items: ["Network segmentation with VLANs", "Firewall rules with least privilege", "DNS filtering (Pi-hole)", "Network monitoring (Zeek/Suricata)", "Regular vulnerability scanning", "Backup and recovery procedures"] },
            { type: "h3", content: "References" },
            { type: "refs", items: ["CIS Controls v8 §12", "NIST SP 800-53 rev5", "OWASP Threat Modeling Guide"] }
        ]
    },
    {
        slug: "siem-tuning-best-practices",
        title: "SIEM Tuning: Reducing Noise and Improving Signal",
        date: "2024-01-08",
        readMinutes: 12,
        tags: ["siem", "tuning", "analytics"],
        hero: { subtitle: "Making your SIEM work smarter, not harder" },
        body: [
            { type: "h2", content: "The SIEM Tuning Challenge" },
            { type: "p", content: "SIEM platforms are powerful tools, but without proper tuning, they can become sources of alert fatigue rather than security insights. This guide covers practical approaches to optimize your SIEM for maximum effectiveness." },
            { type: "h2", content: "Understanding Alert Fatigue" },
            { type: "p", content: "Alert fatigue occurs when security teams are overwhelmed by false positives and low-priority alerts. Studies show that analysts can miss up to 40% of critical alerts when dealing with high volumes of noise." },
            { type: "h2", content: "Tuning Methodology" },
            { type: "list", ordered: true, items: ["Baseline establishment - Understand normal traffic patterns", "Rule optimization - Adjust thresholds and conditions", "Correlation improvements - Link related events", "Context enrichment - Add business context to alerts", "Feedback loops - Learn from analyst decisions"] },
            { type: "code", lang: "python", content: "# Example correlation rule\nif (failed_logins > 5) and (source_ip in suspicious_countries):\n    severity = \"HIGH\"\n    auto_escalate = True" },
            { type: "h2", content: "Common Tuning Mistakes" },
            { type: "list", ordered: false, items: ["Setting thresholds too low", "Ignoring business context", "Not updating rules regularly", "Failing to test rule changes", "Over-relying on automated responses"] },
            { type: "h3", content: "References" },
            { type: "refs", items: ["SANS SIEM Implementation Guide", "NIST SP 800-137", "MITRE ATT&CK Framework"] }
        ]
    },
    {
        slug: "web-app-security-testing",
        title: "Web Application Security Testing: Beyond Automated Scanners",
        date: "2024-01-01",
        readMinutes: 15,
        tags: ["web-security", "testing", "owasp"],
        hero: { subtitle: "Manual testing techniques that catch what automation misses" },
        body: [
            { type: "h2", content: "The Limitations of Automated Testing" },
            { type: "p", content: "While automated security scanners are valuable tools, they miss many vulnerabilities that require human intuition and creativity to discover. This article explores manual testing techniques that complement automated tools." },
            { type: "h2", content: "OWASP Testing Methodology" },
            { type: "p", content: "The OWASP Testing Guide provides a comprehensive framework for web application security testing. Key phases include:" },
            { type: "list", ordered: true, items: ["Information gathering", "Configuration management testing", "Identity management testing", "Authentication testing", "Authorization testing", "Session management testing", "Input validation testing", "Error handling testing", "Cryptography testing", "Business logic testing"] },
            { type: "h2", content: "Manual Testing Techniques" },
            { type: "h3", content: "Business Logic Testing" },
            { type: "p", content: "Business logic flaws are often the most critical vulnerabilities, as they can bypass traditional security controls." },
            { type: "code", lang: "http", content: "POST /api/transfer HTTP/1.1\nContent-Type: application/json\n\n{\n  \"from_account\": \"user_account\",\n  \"to_account\": \"attacker_account\",\n  \"amount\": -1000000\n}" },
            { type: "h2", content: "Common Vulnerabilities Found" },
            { type: "table", caption: "Manual vs Automated Detection", headers: ["Vulnerability Type", "Automated Detection", "Manual Detection"], rows: [["SQL Injection", "High", "High"], ["XSS", "Medium", "High"], ["Business Logic", "Low", "High"], ["Authentication Bypass", "Low", "High"]] },
            { type: "h3", content: "References" },
            { type: "refs", items: ["OWASP Testing Guide v4", "Web Application Hacker's Handbook", "PortSwigger Web Security Academy"] }
        ]
    },
    {
        slug: "incident-response-playbook",
        title: "Building Effective Incident Response Playbooks",
        date: "2023-12-25",
        readMinutes: 11,
        tags: ["incident-response", "playbooks", "automation"],
        hero: { subtitle: "From chaos to coordinated response" },
        body: [
            { type: "h2", content: "The Importance of Playbooks" },
            { type: "p", content: "Incident response playbooks provide structured guidance for handling security incidents. Well-designed playbooks reduce response time, ensure consistency, and help teams maintain composure during high-stress situations." },
            { type: "h2", content: "Playbook Components" },
            { type: "list", ordered: false, items: ["Incident classification criteria", "Escalation procedures", "Communication templates", "Technical response steps", "Evidence collection procedures", "Recovery and lessons learned"] },
            { type: "h2", content: "Common Incident Types" },
            { type: "h3", content: "Malware Infection" },
            { type: "p", content: "Malware incidents require immediate containment to prevent spread." },
            { type: "list", ordered: true, items: ["Isolate affected systems", "Preserve evidence", "Identify infection vector", "Clean and restore systems", "Update security controls"] },
            { type: "h2", content: "Automation Opportunities" },
            { type: "p", content: "Many playbook steps can be automated to improve response speed and consistency." },
            { type: "code", lang: "python", content: "def isolate_system(hostname):\n    # Automated system isolation\n    firewall_rules = create_isolation_rules(hostname)\n    network_access = disable_network_access(hostname)\n    return {'status': 'isolated', 'rules': firewall_rules}" },
            { type: "h3", content: "References" },
            { type: "refs", items: ["NIST SP 800-61", "SANS Incident Response Plan", "CIS Controls v8"] }
        ]
    },
    {
        slug: "cloud-security-fundamentals",
        title: "Cloud Security Fundamentals: Shared Responsibility Model",
        date: "2023-12-18",
        readMinutes: 13,
        tags: ["cloud-security", "aws", "shared-responsibility"],
        hero: { subtitle: "Understanding what you're responsible for in the cloud" },
        body: [
            { type: "h2", content: "The Shared Responsibility Model" },
            { type: "p", content: "Cloud security is a shared responsibility between the cloud provider and the customer. Understanding this model is crucial for implementing effective cloud security controls." },
            { type: "h2", content: "Provider vs Customer Responsibilities" },
            { type: "table", caption: "AWS Shared Responsibility", headers: ["Security Area", "AWS Responsibility", "Customer Responsibility"], rows: [["Physical Infrastructure", "Data centers, hardware", "N/A"], ["Virtualization Layer", "Hypervisor, host OS", "N/A"], ["Guest OS", "N/A", "OS patches, configuration"], ["Application", "N/A", "Application security, data encryption"], ["Network", "Physical network", "VPC, security groups, NACLs"]] },
            { type: "h2", content: "Key Security Areas" },
            { type: "h3", content: "Identity and Access Management" },
            { type: "p", content: "Proper IAM configuration is critical for cloud security." },
            { type: "list", ordered: false, items: ["Principle of least privilege", "Multi-factor authentication", "Regular access reviews", "Service account management"] },
            { type: "h3", content: "Data Protection" },
            { type: "p", content: "Data encryption should be implemented at multiple layers." },
            { type: "code", lang: "bash", content: "# Enable S3 bucket encryption\naws s3api put-bucket-encryption \\\n  --bucket my-bucket \\\n  --server-side-encryption-configuration '{\n    \"Rules\": [{\n      \"ApplyServerSideEncryptionByDefault\": {\n        \"SSEAlgorithm\": \"AES256\"\n      }\n    }]\n  }'" },
            { type: "h2", content: "Compliance Considerations" },
            { type: "p", content: "Cloud environments must meet various compliance requirements depending on the industry and data types." },
            { type: "h3", content: "References" },
            { type: "refs", items: ["AWS Security Best Practices", "CIS AWS Foundations Benchmark", "NIST Cloud Computing Security"] }
        ]
    },
    {
        slug: "phishing-defense-strategies",
        title: "Advanced Phishing Defense: Beyond Email Filters",
        date: "2023-12-11",
        readMinutes: 10,
        tags: ["phishing", "defense", "awareness"],
        hero: { subtitle: "Multi-layered approaches to phishing protection" },
        body: [
            { type: "h2", content: "The Evolving Phishing Landscape" },
            { type: "p", content: "Phishing attacks continue to evolve, with attackers using increasingly sophisticated techniques. Traditional email filters alone are insufficient for comprehensive protection." },
            { type: "h2", content: "Defense in Depth Strategy" },
            { type: "list", ordered: false, items: ["Email security gateways", "Endpoint protection", "User awareness training", "DNS filtering", "Web content filtering", "Incident response procedures"] },
            { type: "h2", content: "Technical Controls" },
            { type: "h3", content: "Email Security" },
            { type: "p", content: "Modern email security solutions use multiple detection methods." },
            { type: "list", ordered: true, items: ["SPF, DKIM, DMARC implementation", "URL reputation checking", "Attachment sandboxing", "Behavioral analysis", "Machine learning detection"] },
            { type: "h2", content: "User Awareness Training" },
            { type: "p", content: "Human factors remain the weakest link in phishing defense. Effective training programs should include:" },
            { type: "list", ordered: false, items: ["Regular phishing simulations", "Interactive training modules", "Reporting mechanisms", "Positive reinforcement", "Role-specific training"] },
            { type: "code", lang: "python", content: "# Phishing simulation metrics\ntraining_metrics = {\n    'click_rate': 0.15,  # Target: <20%\n    'report_rate': 0.85,  # Target: >80%\n    'training_completion': 0.95  # Target: >90%\n}" },
            { type: "h2", content: "Incident Response" },
            { type: "p", content: "Quick response to phishing incidents can prevent further damage." },
            { type: "h3", content: "References" },
            { type: "refs", items: ["NIST SP 800-114", "CIS Controls v8", "Anti-Phishing Working Group"] }
        ]
    },
    {
        slug: "network-monitoring-zeek",
        title: "Network Monitoring with Zeek: From Packets to Intelligence",
        date: "2023-12-04",
        readMinutes: 14,
        tags: ["network-monitoring", "zeek", "nsm"],
        hero: { subtitle: "Transforming network traffic into actionable intelligence" },
        body: [
            { type: "h2", content: "Introduction to Zeek" },
            { type: "p", content: "Zeek (formerly Bro) is a powerful network security monitoring platform that provides deep visibility into network traffic. Unlike traditional IDS systems, Zeek focuses on protocol analysis and behavioral detection." },
            { type: "h2", content: "Zeek Architecture" },
            { type: "p", content: "Zeek uses a modular architecture with separate components for packet capture, protocol analysis, and policy enforcement." },
            { type: "list", ordered: false, items: ["Packet capture engine", "Protocol analyzers", "Policy scripts", "Logging framework", "Management interface"] },
            { type: "h2", content: "Key Features" },
            { type: "h3", content: "Protocol Analysis" },
            { type: "p", content: "Zeek understands over 30 network protocols and can extract application-layer data." },
            { type: "code", lang: "zeek", content: "# Custom Zeek script for HTTP analysis\nevent http_request(c: connection, method: string, original_URI: string, unescaped_URI: string, version: string) {\n    if (method == \"POST\" && \"/api/login\" in original_URI) {\n        Log::write(HTTP_LOG, [$ts=network_time(), $uid=c$uid, $id=c$id, $method=method, $uri=original_URI]);\n    }\n}" },
            { type: "h2", content: "Log Analysis" },
            { type: "p", content: "Zeek generates structured logs that can be easily analyzed and correlated." },
            { type: "table", caption: "Common Zeek Logs", headers: ["Log Type", "Purpose", "Key Fields"], rows: [["conn.log", "Connection tracking", "ts, uid, id, orig_h, resp_h"], ["http.log", "HTTP analysis", "ts, uid, id, method, host, uri"], ["dns.log", "DNS queries", "ts, uid, id, query, qtype, answers"], ["ssl.log", "TLS/SSL analysis", "ts, uid, id, server_name, cipher"]] },
            { type: "h2", content: "Integration with SIEM" },
            { type: "p", content: "Zeek logs can be integrated with SIEM platforms for comprehensive security monitoring." },
            { type: "h3", content: "References" },
            { type: "refs", items: ["Zeek Documentation", "Network Security Monitoring", "SANS FOR572"] }
        ]
    }
];

// Optimized application state
const state = {
    currentSection: 'home',
    isDarkMode: false,
    isCommandPaletteOpen: false,
    isMobileMenuOpen: false
};

// Cache DOM elements for better performance
const elements = {
    sidebar: null,
    mobileMenuToggle: null,
    commandPalette: null,
    commandInput: null,
    commandResults: null,
    themeToggle: null,
    navLinks: null,
    contactLinks: null
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentYear();
    cacheElements();
    initializeTheme();
    initializeNavigation();
    initializeMobileMenu();
    initializeCommandPalette();
    initializeContactLinks();
    initializeKeyboardShortcuts();
    initializeScrollProgress();
    initializeSkillAnimations();
    initializeServiceWorker();
    loadPortfolio();
    loadBlog();
    handleRoute();
});

// Update current year dynamically
function updateCurrentYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Scroll Progress Indicator
function initializeScrollProgress() {
    function updateScrollProgress() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollHeight) * 100;
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.transform = `scaleX(${scrollProgress / 100})`;
        }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
}

// Skill Bar Animations
function initializeSkillAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                if (!progressBar.classList.contains('animated')) {
                    progressBar.style.width = progressBar.dataset.width;
                    progressBar.classList.add('animated');
                }
            }
        });
    }, observerOptions);

    // Initialize skill bars
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const currentWidth = bar.style.width;
        bar.dataset.width = currentWidth;
        bar.style.width = '0';
        bar.style.transition = 'width 1.5s ease';
        skillObserver.observe(bar);
    });
}

// Service Worker Registration
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Cache frequently used DOM elements
function cacheElements() {
    elements.sidebar = document.querySelector('.sidebar');
    elements.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    elements.commandPalette = document.getElementById('command-palette');
    elements.commandInput = document.getElementById('command-input');
    elements.commandResults = document.getElementById('command-results');
    elements.themeToggle = document.querySelector('.theme-toggle');
    elements.navLinks = document.querySelectorAll('.nav-link');
    elements.contactLinks = document.querySelectorAll('.contact-link');
    
    // Add error handling for missing elements
    if (!elements.sidebar) console.warn('Sidebar element not found');
    if (!elements.mobileMenuToggle) console.warn('Mobile menu toggle not found');
    if (!elements.commandPalette) console.warn('Command palette not found');
}

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    
    elements.themeToggle?.addEventListener('click', toggleTheme);
}

function enableDarkMode() {
    document.body.classList.add('dark');
    state.isDarkMode = true;
    localStorage.setItem('theme', 'dark');
    updateThemeIcon();
}

function disableDarkMode() {
    document.body.classList.remove('dark');
    state.isDarkMode = false;
    localStorage.setItem('theme', 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (!themeIcon) return;
    
    themeIcon.innerHTML = state.isDarkMode ? 
        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' :
        '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
}

function toggleTheme() {
    state.isDarkMode ? disableDarkMode() : enableDarkMode();
}

// Mobile menu management
function initializeMobileMenu() {
    if (!elements.mobileMenuToggle || !elements.sidebar) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            elements.sidebar && 
            elements.mobileMenuToggle &&
            !elements.sidebar.contains(e.target) && 
            !elements.mobileMenuToggle.contains(e.target) &&
            state.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && state.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    state.isMobileMenuOpen ? closeMobileMenu() : openMobileMenu();
}

function openMobileMenu() {
    if (!elements.sidebar || !elements.mobileMenuToggle) return;
    
    elements.sidebar.classList.add('open');
    elements.mobileMenuToggle.classList.add('active');
    elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    state.isMobileMenuOpen = true;
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (!elements.sidebar || !elements.mobileMenuToggle) return;
    
    elements.sidebar.classList.remove('open');
    elements.mobileMenuToggle.classList.remove('active');
    elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    state.isMobileMenuOpen = false;
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Navigation
function initializeNavigation() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(link.dataset.section);
        });
    });
    
    window.addEventListener('hashchange', handleRoute);
}

function navigateToSection(section) {
    window.location.hash = section;
    updateActiveSection(section);
    state.currentSection = section;
}

function updateActiveSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    elements.navLinks.forEach(l => l.classList.remove('active'));
    
    document.getElementById(section)?.classList.add('active');
    document.querySelector(`[data-section="${section}"]`)?.classList.add('active');
}

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    navigateToSection(hash);
}

// Command palette
function initializeCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    const commandResults = document.getElementById('command-results');
    
    if (!commandPalette || !commandInput || !commandResults) {
        console.warn('Command palette elements not found');
        return;
    }
    
    // Open command palette
    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openCommandPalette();
        }
        
        if (e.key === 'Escape' && state.isCommandPaletteOpen) {
            closeCommandPalette();
        }
    });
    
    // Close on backdrop click
    commandPalette.addEventListener('click', function(e) {
        if (e.target === commandPalette) {
            closeCommandPalette();
        }
    });
    
    // Search functionality
    commandInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length > 0) {
            searchContent(query);
        } else {
            commandResults.innerHTML = '';
        }
    });
    
    // Keyboard navigation in command palette
    commandInput.addEventListener('keydown', function(e) {
        const results = document.querySelectorAll('.command-result');
        const currentIndex = Array.from(results).findIndex(el => el.classList.contains('selected'));
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = currentIndex < results.length - 1 ? currentIndex + 1 : 0;
            results.forEach(el => el.classList.remove('selected'));
            if (results[nextIndex]) {
                results[nextIndex].classList.add('selected');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : results.length - 1;
            results.forEach(el => el.classList.remove('selected'));
            if (results[prevIndex]) {
                results[prevIndex].classList.add('selected');
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const selectedResult = document.querySelector('.command-result.selected');
            if (selectedResult) {
                executeSearchResult(selectedResult);
            }
        }
    });
}

function openCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    
    if (!commandPalette || !commandInput) return;
    
    commandPalette.style.display = 'flex';
    commandInput.focus();
    state.isCommandPaletteOpen = true;
}

function closeCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    const commandResults = document.getElementById('command-results');
    
    if (!commandPalette || !commandInput) return;
    
    commandPalette.style.display = 'none';
    commandInput.value = '';
    if (commandResults) commandResults.innerHTML = '';
    state.isCommandPaletteOpen = false;
}

function searchContent(query) {
    const commandResults = document.getElementById('command-results');
    if (!commandResults) return;
    
    // Debounce search to improve performance
    clearTimeout(searchContent.debounceTimer);
    searchContent.debounceTimer = setTimeout(() => {
        performSearch(query, commandResults);
    }, 150);
}

function performSearch(query, commandResults) {
    const results = [];
    
    // Search projects with optimized filtering
    const projectResults = projects.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.summary.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query)) ||
        project.tools.some(tool => tool.toLowerCase().includes(query))
    );
    
    projectResults.forEach(project => {
        results.push({
            type: 'project',
            title: project.title,
            meta: `Project • ${project.tags.join(', ')}`,
            id: project.id
        });
    });
    
    // Search blog posts with optimized filtering
    const postResults = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    postResults.forEach(post => {
        results.push({
            type: 'post',
            title: post.title,
            meta: `Blog Post • ${post.readMinutes} min read`,
            slug: post.slug
        });
    });
    
    // Search sections
    const sections = [
        { id: 'home', title: 'Home', description: 'Main page with overview' },
        { id: 'resume', title: 'Resume', description: 'Work experience and education' },
        { id: 'portfolio', title: 'Portfolio', description: 'Projects and case studies' },
        { id: 'blog', title: 'Blog', description: 'Technical articles and insights' },
        { id: 'skills', title: 'Skills & Certifications', description: 'Technical skills and certifications' },
        { id: 'contact', title: 'Contact', description: 'Get in touch' }
    ];
    
    const sectionResults = sections.filter(section => 
        section.title.toLowerCase().includes(query) || 
        section.description.toLowerCase().includes(query)
    );
    
    sectionResults.forEach(section => {
        results.push({
            type: 'section',
            title: section.title,
            meta: `Section • ${section.description}`,
            id: section.id
        });
    });
    
    // Display results
    if (results.length > 0) {
        commandResults.innerHTML = results.slice(0, 10).map((result, index) => `
            <div class="command-result ${index === 0 ? 'selected' : ''}" 
                 data-type="${result.type}" 
                 data-id="${result.id || result.slug}"
                 onclick="executeSearchResult(this)"
                 role="option"
                 aria-selected="${index === 0}">
                <div class="result-content">
                    <span class="result-title">${result.title}</span>
                    <span class="result-meta">${result.meta}</span>
                </div>
                <span class="result-action">↵</span>
            </div>
        `).join('');
    } else {
        commandResults.innerHTML = '<div class="no-results">No results found</div>';
    }
}

function executeSearchResult(resultElement) {
    const resultData = resultElement.dataset;
    closeCommandPalette();
    
    if (resultData.type === 'project') {
        navigateToSection('portfolio');
        setTimeout(() => showProjectDetail(resultData.id), 100);
    } else if (resultData.type === 'post') {
        navigateToSection('blog');
        setTimeout(() => showBlogArticle(resultData.id), 100);
    } else if (resultData.type === 'section') {
        navigateToSection(resultData.id);
    }
}

// Contact links
function initializeContactLinks() {
    elements.contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for non-anchor elements
            if (this.tagName !== 'A') {
                e.preventDefault();
                const text = this.dataset.copy;
                if (text) {
                    copyToClipboard(text);
                }
            }
        });
    });
}

function copyToClipboard(text) {
    try {
        // Check if clipboard API is available
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copied!');
            }).catch((err) => {
                console.error('Failed to copy to clipboard:', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            // Fallback for older browsers or non-secure contexts
            fallbackCopyToClipboard(text);
        }
    } catch (error) {
        console.error('Error in copyToClipboard:', error);
        showToast('Copy failed - please copy manually', 'error');
    }
}

function fallbackCopyToClipboard(text) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied!');
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showToast('Copy failed - please copy manually', 'error');
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    // Clear any existing timeout
    if (showToast.timeoutId) {
        clearTimeout(showToast.timeoutId);
    }
    
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    showToast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Download Resume Function
function downloadResume() {
    // For now, create a proper formatted HTML that can be printed as PDF
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Amer Blboheath - Resume</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                h1 { color: #005F73; margin-bottom: 5px; }
                h2 { color: #005F73; border-bottom: 2px solid #005F73; margin: 20px 0 10px 0; }
                .contact-info { margin-bottom: 20px; }
                ul { margin: 10px 0; padding-left: 25px; }
                @media print { body { margin: 20px; } }
            </style>
        </head>
        <body>
            <h1>Amer Blboheath</h1>
            <div class="contact-info">437.484.4883 | Blboheath@outlook.com | Toronto, ON | linkedin.com/in/amerblboheath</div>
            
            <h2>IT HELPDESK ANALYST – HEALTHCARE TECHNOLOGY SPECIALIST</h2>
            
            <h2>Summary of Qualifications</h2>
            <p>Dynamic IT professional with 8+ years delivering exceptional technical support in enterprise environments, specializing in end-user support, onboarding/offboarding processes, and executive-level IT services. Proven expertise in Windows, MacOS, mobile device management, and ITSM platforms including ServiceNow. Passionate about leveraging technology to support healthcare transformation and helping organizations achieve operational excellence.</p>
            
            <h2>Technical Skills</h2>
            <ul>
                <li>Operating Systems: Windows 10/11, MacOS, Linux, iOS, Android</li>
                <li>Microsoft Ecosystem: Office 365, Exchange Online, SharePoint, OneDrive, Teams, Intune, Active Directory</li>
                <li>ITSM Platforms: ServiceNow, JIRA (ITIL-aligned processes)</li>
                <li>Networking: TCP/IP, DNS, DHCP, VPN, Firewall configuration</li>
                <li>Automation: PowerShell, Bash scripting, Python</li>
                <li>AV/Conferencing: Zoom, Microsoft Teams, Crestron, AirMedia</li>
                <li>MDM Solutions: Microsoft Intune, JAMF basics</li>
            </ul>
            
            <h2>Education & Certifications</h2>
            <p><strong>Google IT Support Professional Certificate</strong> | June 2024</p>
            <p><strong>Career Essentials in Generative AI</strong> | June 2024</p>
            <p><strong>Junior IT Analyst Program</strong> | NPower Canada | June 2024</p>
            <p><strong>Bachelor of Arts in International Business Management</strong> | Asia Pacific University | April 2014</p>
            
            <h2>Work Experience</h2>
            
            <h3>IT Support Specialist</h3>
            <p><strong>Accenture</strong> | November 2019 - November 2023</p>
            <ul>
                <li>Delivered comprehensive 1st and 2nd level technical support for 5,000+ enterprise users across Windows and MacOS environments, achieving 95% first-contact resolution rate</li>
                <li>Managed end-to-end onboarding and offboarding procedures, including Active Directory account creation, Office 365 provisioning, and mobile device configuration</li>
                <li>Implemented and maintained audio/video conferencing solutions (Teams, Zoom, Crestron) for executive meetings and corporate communications</li>
                <li>Documented technical procedures and created knowledge base articles, reducing repeat incidents by 30%</li>
                <li>Provided dedicated IT support for senior executives, prioritizing urgent requests and ensuring optimal system performance</li>
                <li>Collaborated with Infrastructure and Cybersecurity teams to escalate and resolve complex technical issues</li>
                <li>Performed system imaging, software deployments, and security updates across 500+ workstations</li>
            </ul>
            
            <h3>Technical Support Analyst</h3>
            <p><strong>Cognizant</strong> | October 2015 - October 2019</p>
            <ul>
                <li>Managed 300+ daily service requests through ServiceNow, maintaining SLAs and ITIL best practices</li>
                <li>Supported diverse hardware including workstations, tablets, mobile phones, printers, and peripheral devices</li>
                <li>Administered Office 365 user accounts and implemented MFA for enhanced security</li>
                <li>Configured and troubleshot multifunctional printers and IP phone systems</li>
                <li>Assisted with large-scale OS migrations and software rollouts, improving system efficiency by 20%</li>
                <li>Provided after-hours on-call support on rotating schedule, ensuring business continuity</li>
            </ul>
            
            <h3>Junior IT Systems Support</h3>
            <p><strong>Marcusevans Group</strong> | August 2014 - September 2015</p>
            <ul>
                <li>Supported IT infrastructure with 99.5% uptime for enterprise applications</li>
                <li>Created and managed user accounts in Active Directory for 5,000+ employees</li>
                <li>Performed routine security patches, OS updates, and system backups</li>
                <li>Documented IT processes and maintained technical documentation library</li>
            </ul>
            
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            </script>
        </body>
        </html>
    `);
    showToast('Opening resume for print/save as PDF', 'info');
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Cmd/Ctrl + 1-6 for navigation
        if ((e.metaKey || e.ctrlKey) && e.key >= '1' && e.key <= '6') {
            e.preventDefault();
            const sections = ['home', 'resume', 'portfolio', 'blog', 'skills', 'contact'];
            const sectionIndex = parseInt(e.key) - 1;
            if (sections[sectionIndex]) {
                navigateToSection(sections[sectionIndex]);
            }
        }
        
        // Escape key to close modals and go back
        if (e.key === 'Escape') {
            if (state.isCommandPaletteOpen) {
                closeCommandPalette();
            } else if (state.isMobileMenuOpen) {
                closeMobileMenu();
            } else {
                // Check if we're in a detail view and go back
                const portfolioDetail = document.getElementById('portfolio-detail');
                const blogArticle = document.getElementById('blog-article');
                
                if (portfolioDetail && portfolioDetail.style.display !== 'none') {
                    showPortfolioGrid();
                } else if (blogArticle && blogArticle.style.display !== 'none') {
                    showBlogList();
                }
            }
        }
        
        // Tab navigation improvements
        if (e.key === 'Tab') {
            // Ensure focus is visible
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Portfolio management
function loadPortfolio() {
    try {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (!portfolioGrid) {
            console.error('Portfolio grid element not found');
            return;
        }
        
        // Show loading state
        portfolioGrid.innerHTML = '<div class="loading-state">Loading portfolio...</div>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            portfolioGrid.innerHTML = projects.map((project, index) => `
                <div class="portfolio-card" 
                     onclick="showProjectDetail('${project.id}')" 
                     onkeypress="if(event.key==='Enter') showProjectDetail('${project.id}')"
                     tabindex="0"
                     role="article"
                     aria-label="${project.title}"
                     style="animation-delay: ${index * 0.1}s">
                    <h3>${project.title}</h3>
                    <p class="portfolio-summary">${project.summary}</p>
                    <div class="portfolio-tools">
                        ${project.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('')}
                    </div>
                    <div class="portfolio-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }, 100);
    } catch (error) {
        console.error('Error loading portfolio:', error);
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (portfolioGrid) {
            portfolioGrid.innerHTML = '<div class="error-state">Error loading portfolio. Please refresh the page.</div>';
        }
    }
}

function showProjectDetail(projectId) {
    try {
        const project = projects.find(p => p.id === projectId);
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }
    
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioDetail = document.getElementById('portfolio-detail');
    const portfolioDetailContent = document.getElementById('portfolio-detail-content');
    
    portfolioGrid.style.display = 'none';
    portfolioDetail.style.display = 'block';
    
    // Focus management and ESC to close
    document.addEventListener('keydown', escClosePortfolio, { once: true });
    
    portfolioDetailContent.innerHTML = `
        <button class="back-button" onclick="showPortfolioGrid()" aria-label="Back to portfolio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Portfolio
        </button>
        <h2>${project.title}</h2>
        <p><strong>Role:</strong> ${project.role}</p>
        <p><strong>Summary:</strong> ${project.summary}</p>
        
        <h3>Problem</h3>
        <p>${project.details.problem}</p>
        
        <h3>Approach</h3>
        <p>${project.details.approach}</p>
        
        <h3>Results</h3>
        <p>${project.details.result}</p>
        
        <h3>Key Outcomes</h3>
        <ul>
            ${project.outcomes.map(outcome => `<li>${outcome}</li>`).join('')}
        </ul>
        
        <h3>Tools Used</h3>
        <div class="portfolio-tools">
            ${project.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('')}
        </div>
        
        <h3>Lessons Learned</h3>
        <ul>
            ${project.details.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
        </ul>
        
        <div class="portfolio-links">
            ${project.links.github !== '#' ? 
                `<a href="${project.links.github}" class="portfolio-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                </a>` : ''}
            ${project.links.demo !== '#' ? 
                `<a href="${project.links.demo}" class="portfolio-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                    Live Demo
                </a>` : ''}
        </div>
    `;
    } catch (error) {
        console.error('Error showing project detail:', error);
        showToast('Error loading project details', 'error');
    }
}

function showPortfolioGrid() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioDetail = document.getElementById('portfolio-detail');
    
    portfolioGrid.style.display = 'grid';
    portfolioDetail.style.display = 'none';
    
    // Restore focus to portfolio section
    document.querySelector('[data-section="portfolio"]').focus?.();
}

function escClosePortfolio(e) {
    if (e.key === 'Escape') {
        showPortfolioGrid();
    }
}

// Blog management
function loadBlog() {
    try {
        const blogList = document.getElementById('blog-list');
        if (!blogList) {
            console.error('Blog list element not found');
            return;
        }
        
        // Show loading state
        blogList.innerHTML = '<div class="loading-state">Loading blog posts...</div>';
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            blogList.innerHTML = posts.map((post, index) => `
                <div class="blog-card" 
                     onclick="showBlogArticle('${post.slug}')" 
                     onkeypress="if(event.key==='Enter') showBlogArticle('${post.slug}')"
                     tabindex="0"
                     role="article"
                     aria-label="${post.title}"
                     style="animation-delay: ${index * 0.1}s">
                    <h3>${post.title}</h3>
                    <div class="blog-meta">
                        <span>${formatDate(post.date)}</span>
                        <span>${post.readMinutes} min read</span>
                    </div>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }, 100);
    } catch (error) {
        console.error('Error loading blog:', error);
        const blogList = document.getElementById('blog-list');
        if (blogList) {
            blogList.innerHTML = '<div class="error-state">Error loading blog posts. Please refresh the page.</div>';
        }
    }
}

function showBlogArticle(slug) {
    try {
        const post = posts.find(p => p.slug === slug);
        if (!post) {
            console.error('Blog post not found:', slug);
            return;
        }
    
    const blogList = document.getElementById('blog-list');
    const blogArticle = document.getElementById('blog-article');
    const blogArticleContent = document.getElementById('blog-article-content');
    
    blogList.style.display = 'none';
    blogArticle.style.display = 'block';
    
    // Focus management and ESC to close
    document.addEventListener('keydown', escCloseBlog, { once: true });
    
    blogArticleContent.innerHTML = `
        <button class="back-button" onclick="showBlogList()" aria-label="Back to blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Blog
        </button>
        <div class="article-header">
            <h1 class="article-title">${post.title}</h1>
            <div class="article-meta">
                <span>${formatDate(post.date)}</span>
                <span>${post.readMinutes} min read</span>
            </div>
            ${post.hero ? `<div class="article-hero">${post.hero.subtitle}</div>` : ''}
        </div>
        
        <div class="article-content">
            ${renderArticleBody(post.body)}
        </div>
    `;
    } catch (error) {
        console.error('Error showing blog article:', error);
        showToast('Error loading blog article', 'error');
    }
}

function showBlogList() {
    const blogList = document.getElementById('blog-list');
    const blogArticle = document.getElementById('blog-article');
    
    blogList.style.display = 'grid';
    blogArticle.style.display = 'none';
    
    // Restore focus to blog section
    document.querySelector('[data-section="blog"]').focus?.();
}

function escCloseBlog(e) {
    if (e.key === 'Escape') {
        showBlogList();
    }
}

function renderArticleBody(body) {
    return body.map(item => {
        switch (item.type) {
            case 'h2':
                return `<h2>${item.content}</h2>`;
            case 'h3':
                return `<h3>${item.content}</h3>`;
            case 'p':
                return `<p>${item.content}</p>`;
            case 'blockquote':
                return `<blockquote>${item.content}</blockquote>`;
            case 'code':
                return `<pre><code class="language-${item.lang || ''}">${item.content}</code></pre>`;
            case 'table':
                const headers = item.headers.map(h => `<th>${h}</th>`).join('');
                const rows = item.rows.map(row => 
                    `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
                ).join('');
                return `<table><caption>${item.caption}</caption><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
            case 'list':
                const listItems = item.items.map(li => `<li>${li}</li>`).join('');
                const tag = item.ordered ? 'ol' : 'ul';
                return `<${tag}>${listItems}</${tag}>`;
            case 'hr':
                return '<hr>';
            case 'refs':
                return `<h3>References</h3><ul>${item.items.map(ref => `<li>${ref}</li>`).join('')}</ul>`;
            default:
                return '';
        }
    }).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}
