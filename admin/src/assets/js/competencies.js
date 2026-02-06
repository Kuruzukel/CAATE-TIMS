// Competencies Page JavaScript

let currentCourseCard = null;

/**
 * Extract competencies from a card's HTML
 * @param {HTMLElement} card - The course card element
 * @returns {Object} Object containing basic, common, and core competencies
 */
function extractCompetenciesFromCard(card) {
    const competencies = {
        basic: [],
        common: [],
        core: []
    };

    const cardText = card.querySelector('.card-text');
    if (!cardText) return competencies;

    // Get all sections in the card
    const sections = cardText.querySelectorAll('div');

    sections.forEach(section => {
        const strong = section.querySelector('strong');
        if (!strong) return;

        const sectionTitle = strong.textContent.trim();
        const items = section.querySelectorAll('ul li');
        const itemsArray = Array.from(items).map(item => item.textContent.trim());

        if (sectionTitle.includes('Basic Competencies')) {
            competencies.basic = itemsArray;
        } else if (sectionTitle.includes('Common Competencies')) {
            competencies.common = itemsArray;
        } else if (sectionTitle.includes('Core Competencies')) {
            competencies.core = itemsArray;
        }
    });

    return competencies;
}

/**
 * Populate modal with course data
 * @param {HTMLElement} button - The edit button clicked
 */
function populateEditModal(button) {
    // Get the course card and extract competencies
    currentCourseCard = button.closest('.card');
    const competencies = extractCompetenciesFromCard(currentCourseCard);

    // Populate competencies textareas
    document.getElementById('editBasicCompetencies').value = competencies.basic.join('\n');
    document.getElementById('editCommonCompetencies').value = competencies.common.join('\n');
    document.getElementById('editCoreCompetencies').value = competencies.core.join('\n');
}

/**
 * Create competency HTML section
 * @param {string} title - Section title (Basic, Common, Core)
 * @param {Array} items - Array of competency items
 * @returns {string} HTML string for the competency section
 */
function createCompetencySection(title, items) {
    if (!items || items.length === 0) {
        return '';
    }

    const listItems = items
        .filter(item => item.trim() !== '')
        .map(item => `<li>${item.trim()}</li>`)
        .join('');

    if (!listItems) return '';

    return `
        <div class="mb-2">
            <strong class="text-primary">${title}:</strong>
            <ul class="small mb-2" style="padding-left: 1.25rem;">
                ${listItems}
            </ul>
        </div>
    `;
}

/**
 * Update course card with new competencies
 */
function updateCourseCard() {
    if (!currentCourseCard) return;

    const basicCompetencies = document.getElementById('editBasicCompetencies').value
        .split('\n')
        .filter(item => item.trim() !== '');
    const commonCompetencies = document.getElementById('editCommonCompetencies').value
        .split('\n')
        .filter(item => item.trim() !== '');
    const coreCompetencies = document.getElementById('editCoreCompetencies').value
        .split('\n')
        .filter(item => item.trim() !== '');

    // Build the new competencies HTML
    let competenciesHTML = '';
    competenciesHTML += createCompetencySection('Basic Competencies', basicCompetencies);
    competenciesHTML += createCompetencySection('Common Competencies', commonCompetencies);
    competenciesHTML += createCompetencySection('Core Competencies', coreCompetencies);

    // Update the card's competencies section
    const cardText = currentCourseCard.querySelector('.card-text');
    if (cardText) {
        cardText.innerHTML = competenciesHTML;
    }
}

/**
 * Initialize event listeners
 */
document.addEventListener('DOMContentLoaded', function () {
    // Handle edit button clicks
    document.querySelectorAll('.edit-course-btn').forEach(button => {
        button.addEventListener('click', function () {
            populateEditModal(this);
        });
    });

    // Handle save button click
    const saveCourseBtn = document.getElementById('saveCourseBtn');
    if (saveCourseBtn) {
        saveCourseBtn.addEventListener('click', function () {
            const form = document.getElementById('editCourseForm');
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                updateCourseCard();
                // Close the modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('editCourseModal'));
                if (modal) {
                    modal.hide();
                }
                // Show success message
                showSuccessMessage('Course competencies updated successfully!');
            }
        });
    }
});

/**
 * Show success message
 * @param {string} message - Message to display
 */
function showSuccessMessage(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    const container = document.querySelector('.container-xxl');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}
