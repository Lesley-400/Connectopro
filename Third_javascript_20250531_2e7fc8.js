document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Job listings data
    const jobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp Inc.",
            location: "San Francisco, CA",
            type: "Full-time"
        },
        {
            title: "UX Designer",
            company: "Creative Solutions",
            location: "Remote",
            type: "Contract"
        },
        {
            title: "Data Scientist",
            company: "Analytics Pro",
            location: "New York, NY",
            type: "Full-time"
        },
        {
            title: "Product Manager",
            company: "Innovate Co.",
            location: "Austin, TX",
            type: "Full-time"
        },
        {
            title: "Backend Engineer",
            company: "DevSystems",
            location: "Chicago, IL",
            type: "Part-time"
        },
        {
            title: "Marketing Specialist",
            company: "Growth Marketing",
            location: "Remote",
            type: "Full-time"
        },
        {
            title: "DevOps Engineer",
            company: "CloudTech",
            location: "Seattle, WA",
            type: "Full-time"
        },
        {
            title: "Content Writer",
            company: "Wordsmith Media",
            location: "Remote",
            type: "Freelance"
        }
    ];

    // Display jobs
    const jobsContainer = document.getElementById('jobs-container');
    
    function displayJobs(jobsToDisplay) {
        jobsContainer.innerHTML = '';
        
        jobsToDisplay.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            
            jobCard.innerHTML = `
                <div class="job-content">
                    <h3 class="job-title">${job.title}</h3>
                    <p class="job-company">${job.company}</p>
                    <p class="job-location">${job.location}</p>
                    <span class="job-type">${job.type}</span>
                </div>
            `;
            
            jobsContainer.appendChild(jobCard);
        });
    }
    
    displayJobs(jobs);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            displayJobs(jobs);
            return;
        }
        
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm) || 
            job.company.toLowerCase().includes(searchTerm)
        );
        
        displayJobs(filteredJobs);
    }
    
    searchBtn.addEventListener('click', filterJobs);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterJobs();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
});
