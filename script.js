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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
        links: { github: "#", demo: "#" },
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
    cacheElements();
    initializeTheme();
    initializeNavigation();
    initializeMobileMenu();
    initializeCommandPalette();
    initializeContactLinks();
    initializeKeyboardShortcuts();
    loadPortfolio();
    loadBlog();
    handleRoute();
});

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
    if (!elements.mobileMenuToggle || !elements.sidebar) return;
    
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
    elements.sidebar.classList.add('open');
    elements.mobileMenuToggle.classList.add('active');
    elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    state.isMobileMenuOpen = true;
}

function closeMobileMenu() {
    elements.sidebar.classList.remove('open');
    elements.mobileMenuToggle.classList.remove('active');
    elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    state.isMobileMenuOpen = false;
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
}

function openCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    
    commandPalette.style.display = 'flex';
    commandInput.focus();
    state.isCommandPaletteOpen = true;
}

function closeCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    const commandResults = document.getElementById('command-results');
    
    commandPalette.style.display = 'none';
    commandInput.value = '';
    commandResults.innerHTML = '';
    state.isCommandPaletteOpen = false;
}

function searchContent(query) {
    const commandResults = document.getElementById('command-results');
    const results = [];
    
    // Search projects
    projects.forEach(project => {
        if (project.title.toLowerCase().includes(query) || 
            project.tags.some(tag => tag.toLowerCase().includes(query))) {
            results.push({
                type: 'project',
                title: project.title,
                meta: `Project • ${project.tags.join(', ')}`,
                action: () => {
                    navigateToSection('portfolio');
                    setTimeout(() => showProjectDetail(project.id), 100);
                }
            });
        }
    });
    
    // Search blog posts
    posts.forEach(post => {
        if (post.title.toLowerCase().includes(query) || 
            post.tags.some(tag => tag.toLowerCase().includes(query))) {
            results.push({
                type: 'post',
                title: post.title,
                meta: `Blog Post • ${post.readMinutes} min read`,
                action: () => {
                    navigateToSection('blog');
                    setTimeout(() => showBlogArticle(post.slug), 100);
                }
            });
        }
    });
    
    // Display results
    if (results.length > 0) {
        commandResults.innerHTML = results.map(result => `
            <div class="command-result" onclick="executeSearchResult(this)">
                <div class="command-result-title">${result.title}</div>
                <div class="command-result-meta">${result.meta}</div>
            </div>
        `).join('');
        
        // Store action for each result
        document.querySelectorAll('.command-result').forEach((el, index) => {
            el._action = results[index].action;
        });
    } else {
        commandResults.innerHTML = '<div class="command-result"><div class="command-result-title">No results found</div></div>';
    }
}

function executeSearchResult(element) {
    if (element._action) {
        element._action();
        closeCommandPalette();
    }
}

// Contact links
function initializeContactLinks() {
    elements.contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const text = this.dataset.copy;
            copyToClipboard(text);
        });
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied!');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Download Resume Function
function downloadResume() {
    // Create a simple PDF-like resume content
    const resumeContent = `
Amer Blboheath - Cybersecurity & IT Professional
==========================================

EXPERIENCE
----------

Senior Cybersecurity Analyst
TechCorp Security | 2022 - Present
• Reduced incident response time by 40% through automated threat detection
• Implemented SIEM solution covering 500+ endpoints across 3 data centers
• Led security awareness training for 200+ employees, reducing phishing click rates by 60%

Network Security Engineer
SecureNet Solutions | 2021 - 2022
• Deployed firewall rules reducing attack surface by 35%
• Configured VPN infrastructure supporting 150+ remote workers
• Conducted vulnerability assessments identifying 200+ security gaps

IT Support Specialist
StartupXYZ | 2020 - 2021
• Managed Active Directory for 50+ users across multiple domains
• Implemented backup solutions achieving 99.9% uptime
• Developed PowerShell scripts automating 80% of routine tasks

EDUCATION
---------

Bachelor of Science in Computer Science
University of Technology | 2016 - 2020

CERTIFICATIONS
--------------

• Security+ (CompTIA) - 2023
• CySA+ (CompTIA) - 2023
• CCNA (Cisco) - 2022
• CEH (EC-Council) - 2022
• AWS Security (Amazon) - 2024

SKILLS
------

Networking: TCP/IP, Firewalls, VPN
Security Tools: Nmap, Wireshark, Burp Suite
Scripting: Python, Bash, PowerShell
Cloud & OS: AWS, Linux, Windows Server

CONTACT
-------

Email: blboheath@outlook.com
GitHub: github.com/amerblb
LinkedIn: linkedin.com/in/amerblboheath
    `;
    
    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Amer_Blboheath_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showToast('Resume downloaded!');
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
    });
}

// Portfolio management
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-card" onclick="showProjectDetail('${project.id}')">
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
}

function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioDetail = document.getElementById('portfolio-detail');
    const portfolioDetailContent = document.getElementById('portfolio-detail-content');
    
    portfolioGrid.style.display = 'none';
    portfolioDetail.style.display = 'block';
    
    // Focus management and ESC to close
    document.addEventListener('keydown', escClosePortfolio, { once: true });
    
    portfolioDetailContent.innerHTML = `
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
            <a href="${project.links.github}" class="portfolio-link">GitHub</a>
            <a href="${project.links.demo}" class="portfolio-link">Demo</a>
        </div>
    `;
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
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = posts.map(post => `
        <div class="blog-card" onclick="showBlogArticle('${post.slug}')">
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
}

function showBlogArticle(slug) {
    const post = posts.find(p => p.slug === slug);
    if (!post) return;
    
    const blogList = document.getElementById('blog-list');
    const blogArticle = document.getElementById('blog-article');
    const blogArticleContent = document.getElementById('blog-article-content');
    
    blogList.style.display = 'none';
    blogArticle.style.display = 'block';
    
    // Focus management and ESC to close
    document.addEventListener('keydown', escCloseBlog, { once: true });
    
    blogArticleContent.innerHTML = `
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
