/**
 * Debug Menu Toggle - Ensures toggle works on all screens
 * This file adds additional event listeners to guarantee functionality
 */

(function () {
    'use strict';

    // Wait for DOM to be fully ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggle);
    } else {
        initToggle();
    }

    function initToggle() {
        // Find all toggle buttons
        const toggleButtons = document.querySelectorAll('.layout-menu-toggle, .menu-toggle-btn');

        toggleButtons.forEach((btn, index) => {
            // Add click handler with high priority
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                const isSmallScreen = window.innerWidth < 1200;

                if (isSmallScreen) {
                    const html = document.documentElement;
                    const wasExpanded = html.classList.contains('layout-menu-expanded');

                    if (wasExpanded) {
                        html.classList.remove('layout-menu-expanded');
                    } else {
                        html.classList.add('layout-menu-expanded');
                    }
                } else {
                    const html = document.documentElement;
                    const wasCollapsed = html.classList.contains('layout-menu-collapsed');

                    if (wasCollapsed) {
                        html.classList.remove('layout-menu-collapsed');
                    } else {
                        html.classList.add('layout-menu-collapsed');
                    }
                }
            }, true); // Use capture phase
        });
    }
})();
