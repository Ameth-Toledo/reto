const dayStatus = {
    // FEBRERO
    '2026-02-16': null,  // Lunes 16 de febrero
    '2026-02-17': null,  // Martes 17 de febrero
    '2026-02-18': null,  // Miércoles 18 de febrero
    '2026-02-19': null,  // Jueves 19 de febrero
    '2026-02-20': null,  // Viernes 20 de febrero
    '2026-02-21': null,  // Sábado 21 de febrero
    '2026-02-22': null,  // Domingo 22 de febrero
    '2026-02-23': null,  // Lunes 23 de febrero
    '2026-02-24': null,  // Martes 24 de febrero
    '2026-02-25': null,  // Miércoles 25 de febrero
    '2026-02-26': null,  // Jueves 26 de febrero
    '2026-02-27': null,  // Viernes 27 de febrero
    '2026-02-28': null,  // Sábado 28 de febrero
    
    // MARZO
    '2026-03-01': null,  // Domingo 1 de marzo
    '2026-03-02': null,  // Lunes 2 de marzo
    '2026-03-03': null,  // Martes 3 de marzo
    '2026-03-04': null,  // Miércoles 4 de marzo
    '2026-03-05': null,  // Jueves 5 de marzo
    '2026-03-06': null,  // Viernes 6 de marzo
    '2026-03-07': null,  // Sábado 7 de marzo
    '2026-03-08': null,  // Domingo 8 de marzo
    '2026-03-09': null,  // Lunes 9 de marzo
    '2026-03-10': null,  // Martes 10 de marzo
    '2026-03-11': null,  // Miércoles 11 de marzo
    '2026-03-12': null,  // Jueves 12 de marzo
    '2026-03-13': null,  // Viernes 13 de marzo
    '2026-03-14': null,  // Sábado 14 de marzo
    '2026-03-15': null,  // Domingo 15 de marzo
    '2026-03-16': null,  // Lunes 16 de marzo
    '2026-03-17': null,  // Martes 17 de marzo
    '2026-03-18': null,  // Miércoles 18 de marzo
};

// Estructura del calendario
const calendarData = [
    {
        month: 'FEBRERO 2026',
        weeks: [
            {
                title: 'Semana 1',
                days: [
                    { date: '2026-02-16', label: 'Lunes 16 de febrero' },
                    { date: '2026-02-17', label: 'Martes 17 de febrero' },
                    { date: '2026-02-18', label: 'Miércoles 18 de febrero' },
                    { date: '2026-02-19', label: 'Jueves 19 de febrero' },
                    { date: '2026-02-20', label: 'Viernes 20 de febrero' },
                    { date: '2026-02-21', label: 'Sábado 21 de febrero' },
                    { date: '2026-02-22', label: 'Domingo 22 de febrero' }
                ]
            },
            {
                title: 'Semana 2',
                days: [
                    { date: '2026-02-23', label: 'Lunes 23 de febrero' },
                    { date: '2026-02-24', label: 'Martes 24 de febrero' },
                    { date: '2026-02-25', label: 'Miércoles 25 de febrero' },
                    { date: '2026-02-26', label: 'Jueves 26 de febrero' },
                    { date: '2026-02-27', label: 'Viernes 27 de febrero' },
                    { date: '2026-02-28', label: 'Sábado 28 de febrero' }
                ]
            }
        ]
    },
    {
        month: 'MARZO 2026',
        weeks: [
            {
                title: 'Semana 3',
                days: [
                    { date: '2026-03-01', label: 'Domingo 1 de marzo' },
                    { date: '2026-03-02', label: 'Lunes 2 de marzo' },
                    { date: '2026-03-03', label: 'Martes 3 de marzo' },
                    { date: '2026-03-04', label: 'Miércoles 4 de marzo' },
                    { date: '2026-03-05', label: 'Jueves 5 de marzo' },
                    { date: '2026-03-06', label: 'Viernes 6 de marzo' },
                    { date: '2026-03-07', label: 'Sábado 7 de marzo' }
                ]
            },
            {
                title: 'Semana 4',
                days: [
                    { date: '2026-03-08', label: 'Domingo 8 de marzo' },
                    { date: '2026-03-09', label: 'Lunes 9 de marzo' },
                    { date: '2026-03-10', label: 'Martes 10 de marzo' },
                    { date: '2026-03-11', label: 'Miércoles 11 de marzo' },
                    { date: '2026-03-12', label: 'Jueves 12 de marzo' },
                    { date: '2026-03-13', label: 'Viernes 13 de marzo' },
                    { date: '2026-03-14', label: 'Sábado 14 de marzo' }
                ]
            },
            {
                title: 'Semana 5',
                days: [
                    { date: '2026-03-15', label: 'Domingo 15 de marzo' },
                    { date: '2026-03-16', label: 'Lunes 16 de marzo' },
                    { date: '2026-03-17', label: 'Martes 17 de marzo' },
                    { date: '2026-03-18', label: 'Miércoles 18 de marzo' }
                ]
            }
        ]
    }
];

function getStatusHTML(status) {
    if (status === true) {
        return '<div class="day-status status-bien">😊 Bien</div>';
    } else if (status === false) {
        return '<div class="day-status status-mal">😢 Mal</div>';
    } else {
        return '<div class="day-status status-empty">-</div>';
    }
}

function renderCalendar() {
    const container = document.getElementById('calendar-container');
    let html = '';

    calendarData.forEach(monthData => {
        html += `<div class="month-section">`;
        html += `<div class="month-title">${monthData.month}</div>`;

        monthData.weeks.forEach(week => {
            html += `<div class="week">`;
            html += `<div class="week-title">${week.title}</div>`;

            week.days.forEach(day => {
                const status = dayStatus[day.date];
                html += `
                    <div class="day-item" data-date="${day.date}">
                        <input type="checkbox" id="${day.date}">
                        <label for="${day.date}">${day.label}</label>
                        ${getStatusHTML(status)}
                    </div>
                `;
            });

            html += `</div>`;
        });

        html += `</div>`;
    });

    container.innerHTML = html;

    // Agregar event listeners
    document.querySelectorAll('.day-item input[type="checkbox"]').forEach(checkbox => {
        const date = checkbox.id;
        const status = dayStatus[date];
        
        // Si el día tiene un estado (true o false), marcar el checkbox automáticamente
        if (status === true || status === false) {
            checkbox.checked = true;
            checkbox.closest('.day-item').classList.add('checked');
        } else {
            // Si no tiene estado, verificar si estaba guardado en localStorage
            const saved = localStorage.getItem(checkbox.id);
            if (saved === 'true') {
                checkbox.checked = true;
                checkbox.closest('.day-item').classList.add('checked');
            }
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(this.id, this.checked);
            if (this.checked) {
                this.closest('.day-item').classList.add('checked');
            } else {
                this.closest('.day-item').classList.remove('checked');
            }
            updateProgress();
        });
    });

    updateProgress();
}

function updateProgress() {
    const total = 31;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const percentage = Math.round((checked / total) * 100);
    
    // Contar bien y mal
    let bienCount = 0;
    let malCount = 0;
    Object.values(dayStatus).forEach(status => {
        if (status === true) bienCount++;
        if (status === false) malCount++;
    });
    
    const pendingCount = total - bienCount - malCount;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressFill').textContent = percentage + '%';
    document.getElementById('checkedCount').textContent = checked;
    document.getElementById('bienCount').textContent = bienCount;
    document.getElementById('malCount').textContent = malCount;
    document.getElementById('pendingCount').textContent = pendingCount;
}

// Inicializar al cargar
window.addEventListener('load', renderCalendar);