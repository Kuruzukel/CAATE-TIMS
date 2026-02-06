document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,

        // Sample appointment events
        events: [
            {
                title: 'Anna Cruz - Consultation',
                start: '2026-02-10T10:00:00',
                end: '2026-02-10T11:00:00',
                backgroundColor: '#3691bf',
                borderColor: '#3691bf',
                extendedProps: {
                    trainee: 'Anna Cruz',
                    email: 'anna.cruz@email.com',
                    course: 'Beauty Care (Skin Care) NC II',
                    type: 'Consultation',
                    status: 'Confirmed'
                }
            },
            {
                title: 'John Reyes - Assessment',
                start: '2026-02-12T14:00:00',
                end: '2026-02-12T15:30:00',
                backgroundColor: '#f59e0b',
                borderColor: '#f59e0b',
                extendedProps: {
                    trainee: 'John Reyes',
                    email: 'john.reyes@email.com',
                    course: 'Trainers Methodology Level I',
                    type: 'Assessment',
                    status: 'Pending'
                }
            },
            {
                title: 'Maria Santos - Interview',
                start: '2026-02-15T09:00:00',
                end: '2026-02-15T10:00:00',
                backgroundColor: '#10b981',
                borderColor: '#10b981',
                extendedProps: {
                    trainee: 'Maria Santos',
                    email: 'maria.santos@email.com',
                    course: 'Eyelash & Eyebrow Services Level III',
                    type: 'Interview',
                    status: 'Confirmed'
                }
            },
            {
                title: 'Carlos Mendoza - Orientation',
                start: '2026-02-18T13:00:00',
                end: '2026-02-18T14:30:00',
                backgroundColor: '#8b5cf6',
                borderColor: '#8b5cf6',
                extendedProps: {
                    trainee: 'Carlos Mendoza',
                    email: 'carlos.mendoza@email.com',
                    course: 'Aesthetic Services Level III',
                    type: 'Orientation',
                    status: 'Confirmed'
                }
            }
        ],

        // Event click handler
        eventClick: function (info) {
            var event = info.event;
            var props = event.extendedProps;

            // Build modal content
            var modalBody = `
                <div class="mb-3">
                    <strong>Trainee:</strong> ${props.trainee}
                </div>
                <div class="mb-3">
                    <strong>Email:</strong> ${props.email}
                </div>
                <div class="mb-3">
                    <strong>Course:</strong> ${props.course}
                </div>
                <div class="mb-3">
                    <strong>Type:</strong> ${props.type}
                </div>
                <div class="mb-3">
                    <strong>Date & Time:</strong> ${event.start.toLocaleString()}
                </div>
                <div class="mb-3">
                    <strong>Status:</strong> <span class="badge bg-${props.status === 'Confirmed' ? 'success' : 'warning'}">${props.status}</span>
                </div>
            `;

            document.getElementById('appointmentModalTitle').textContent = event.title;
            document.getElementById('appointmentModalBody').innerHTML = modalBody;

            var modal = new bootstrap.Modal(document.getElementById('appointmentModal'));
            modal.show();
        },

        // Date click handler
        dateClick: function (info) {
            console.log('Clicked on: ' + info.dateStr);
        }
    });

    calendar.render();
});
