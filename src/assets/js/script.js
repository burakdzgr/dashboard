const routes = {
    '/dashboard': 'dashboard',
    '/search-job': 'search-job',
    '/applications': 'applications',
    '/message': 'message',
    '/statistics': 'statistics',
    '/news': 'news'
};

const currentPath = window.location.pathname;
const activeRoute = routes[currentPath];

if (activeRoute) {
    document.getElementById(activeRoute).classList.add('bg-purple-900');
}