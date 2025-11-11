// Function to update navigation menu
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Navigation items configuration
    const navItems = [
        { title: 'Home', url: 'index.html' },
        { title: 'About', url: 'about.html' },
        { title: 'Courses', url: 'courses.html' },
        { title: 'Trainers', url: 'trainers.html' },
        { title: 'Events', url: 'events.html' },
        { title: 'Contact', url: 'contact.html' }
    ];

    // Create navigation menu
    const navMenu = document.querySelector('nav#navmenu ul');
    if (navMenu) {
        // Clear existing menu items
        navMenu.innerHTML = '';
        
        // Add navigation items
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            
            // Add active class to current page
            if (currentPage === item.url || 
                (currentPage === '' && item.url === 'index.html')) {
                a.classList.add('active');
            }
            
            li.appendChild(a);
            navMenu.appendChild(li);
        });
    }

    // Add login/signup buttons
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.innerHTML = `
            <a href="login.html" class="btn-login me-2">Login</a>
            <a href="register.html" class="btn-getstarted">Sign Up</a>
        `;
    }
});
