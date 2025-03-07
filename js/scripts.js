// Sidebar Toggle

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false; 
    }
}

function navigateTo(page) {
    // Remove 'active' class from all sidebar items
    document.querySelectorAll('.sidebar-list-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the current page's sidebar item
    document.querySelector(`.sidebar-list-item[data-page="${page}"]`).classList.add('active');

    switch (page) {
        case 'overview':
            window.location.href = 'index.html';
            break;
        case 'training':
            window.location.href = 'training.html';
            break;
        case 'report':
            window.location.href = 'report.html';
            break;
        case 'user-data-requests':
            window.location.href = 'user-data-requests.html';
            break;
        default:
            window.location.href = 'index.html';
    }
}

// Update sidebar links to use the navigateTo function
document.querySelectorAll('.sidebar-list-item').forEach(item => {
    item.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        navigateTo(page);
    });
});

// Remove the navigateTo('overview') call from DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Initial setup if needed

    // Attach event listener to close button after DOM content is loaded
    document.querySelector('.notification .close-btn').addEventListener('click', function() {
        var notification = document.getElementById('notification');
        notification.style.display = 'none';
    });
    updateOverallCompletion(); // Initialize with 0% completion
});

function openModal(courseId) {
    document.getElementById(courseId).style.display = 'block';
}

function closeModal(courseId) {
    document.getElementById(courseId).style.display = 'none';
}

var quizzes = {
    course1: {
        questions: [
            {
                question: "What is GDPR?",
                answers: [
                    { text: "General Data Protection Regulation", correct: true },
                    { text: "Global Data Privacy Rules", correct: false },
                    { text: "General Data Privacy Regulation", correct: false },
                    { text: "Global Data Protection Rules", correct: false }
                ]
            },
            {
                question: "When did GDPR come into effect?",
                answers: [
                    { text: "May 25, 2018", correct: true },
                    { text: "January 1, 2020", correct: false },
                    { text: "December 31, 2019", correct: false },
                    { text: "July 4, 2018", correct: false }
                ]
            },
            {
                question: "Which of the following is a key principle of GDPR?",
                answers: [
                    { text: "Data Minimization", correct: true },
                    { text: "Data Maximization", correct: false },
                    { text: "Data Centralization", correct: false },
                    { text: "Data Monetization", correct: false }
                ]
            },
            {
                question: "Who does GDPR apply to?",
                answers: [
                    { text: "Organizations operating within the EU", correct: true },
                    { text: "Only EU citizens", correct: false },
                    { text: "Only organizations based in the EU", correct: false },
                    { text: "Only government organizations", correct: false }
                ]
            },
            {
                question: "What is the maximum fine for non-compliance with GDPR?",
                answers: [
                    { text: "€20 million or 4% of annual global turnover, whichever is higher", correct: true },
                    { text: "€10 million or 2% of annual global turnover, whichever is higher", correct: false },
                    { text: "€5 million or 1% of annual global turnover, whichever is higher", correct: false },
                    { text: "€50 million or 10% of annual global turnover, whichever is higher", correct: false }
                ]
            },
            {
                question: "What is a Data Protection Officer (DPO)?",
                answers: [
                    { text: "An individual responsible for overseeing data protection strategy and implementation", correct: true },
                    { text: "An individual responsible for managing IT infrastructure", correct: false },
                    { text: "An individual responsible for financial audits", correct: false },
                    { text: "An individual responsible for marketing campaigns", correct: false }
                ]
            },
            {
                question: "What is the right to be forgotten?",
                answers: [
                    { text: "The right to have personal data erased", correct: true },
                    { text: "The right to access personal data", correct: false },
                    { text: "The right to transfer personal data", correct: false },
                    { text: "The right to correct inaccurate data", correct: false }
                ]
            },
            {
                question: "What is the purpose of a Data Protection Impact Assessment (DPIA)?",
                answers: [
                    { text: "To identify and minimize data protection risks", correct: true },
                    { text: "To maximize data collection", correct: false },
                    { text: "To centralize data storage", correct: false },
                    { text: "To monetize personal data", correct: false }
                ]
            },
            {
                question: "What is the role of the European Data Protection Board (EDPB)?",
                answers: [
                    { text: "To ensure consistent application of GDPR across the EU", correct: true },
                    { text: "To manage financial audits", correct: false },
                    { text: "To oversee marketing campaigns", correct: false },
                    { text: "To manage IT infrastructure", correct: false }
                ]
            }
        ],
        currentQuestionIndex: 0,
        score: 0,
        completed: false
    },
    course2: {
        questions: [
            {
                question: "What is the principle of data minimization?",
                answers: [
                    { text: "Personal data must be adequate, relevant, and limited to what is necessary", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of accuracy?",
                answers: [
                    { text: "Personal data must be accurate and kept up to date", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of storage limitation?",
                answers: [
                    { text: "Personal data must be kept in a form which permits identification for no longer than is necessary", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of integrity and confidentiality?",
                answers: [
                    { text: "Personal data must be processed in a manner that ensures appropriate security", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of lawfulness, fairness, and transparency?",
                answers: [
                    { text: "Personal data must be processed lawfully, fairly, and transparently", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of purpose limitation?",
                answers: [
                    { text: "Personal data must be collected for specified, explicit, and legitimate purposes", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of data minimization?",
                answers: [
                    { text: "Personal data must be adequate, relevant, and limited to what is necessary", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of accuracy?",
                answers: [
                    { text: "Personal data must be accurate and kept up to date", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of storage limitation?",
                answers: [
                    { text: "Personal data must be kept in a form which permits identification for no longer than is necessary", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            }
        ],
        currentQuestionIndex: 0,
        score: 0,
        completed: false
    },
    course3: {
        questions: [
            {
                question: "What is the right to be forgotten?",
                answers: [
                    { text: "The right to have personal data erased", correct: true },
                    { text: "The right to access personal data", correct: false },
                    { text: "The right to transfer personal data", correct: false },
                    { text: "The right to correct inaccurate data", correct: false }
                ]
            },
            {
                question: "What is the right to data portability?",
                answers: [
                    { text: "The right to transfer personal data to another organization", correct: true },
                    { text: "The right to access personal data", correct: false },
                    { text: "The right to have personal data erased", correct: false },
                    { text: "The right to correct inaccurate data", correct: false }
                ]
            },
            {
                question: "What is the right to access?",
                answers: [
                    { text: "The right to obtain a copy of personal data", correct: true },
                    { text: "The right to transfer personal data", correct: false },
                    { text: "The right to have personal data erased", correct: false },
                    { text: "The right to correct inaccurate data", correct: false }
                ]
            },
            {
                question: "What is the principle of accountability?",
                answers: [
                    { text: "Organizations must be able to demonstrate compliance with GDPR", correct: true },
                    { text: "Organizations must centralize data storage", correct: false },
                    { text: "Organizations must maximize data collection", correct: false },
                    { text: "Organizations must monetize personal data", correct: false }
                ]
            },
            {
                question: "What is the principle of integrity and confidentiality?",
                answers: [
                    { text: "Personal data must be processed securely", correct: true },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of lawfulness, fairness, and transparency?",
                answers: [
                    { text: "Personal data must be processed lawfully, fairly, and transparently", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of purpose limitation?",
                answers: [
                    { text: "Personal data must be collected for specified, explicit, and legitimate purposes", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of data minimization?",
                answers: [
                    { text: "Personal data must be adequate, relevant, and limited to what is necessary", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            },
            {
                question: "What is the principle of accuracy?",
                answers: [
                    { text: "Personal data must be accurate and kept up to date", correct: true },
                    { text: "Personal data must be stored indefinitely", correct: false },
                    { text: "Personal data must be shared with third parties", correct: false },
                    { text: "Personal data must be monetized", correct: false }
                ]
            }
        ],
        currentQuestionIndex: 0,
        score: 0,
        completed: false
    }
};

function startQuiz(courseId) {
    var quiz = quizzes[courseId];
    quiz.currentQuestionIndex = 0;
    quiz.score = 0;
    document.getElementById(`start-container-${courseId}`).style.display = 'none';
    document.getElementById(`question-container-${courseId}`).style.display = 'block';
    showQuestion(courseId);
}

function restartQuiz(courseId) {
    var quiz = quizzes[courseId];
    quiz.currentQuestionIndex = 0;
    quiz.score = 0;
    document.getElementById(`result-${courseId}`).style.display = 'none';
    document.getElementById(`question-container-${courseId}`).style.display = 'block';
    showQuestion(courseId);
}

function submitAnswer(courseId, answerIndex) {
    var quiz = quizzes[courseId];
    if (quiz.questions[quiz.currentQuestionIndex].answers[answerIndex].correct) {
        quiz.score++;
    }
    quiz.currentQuestionIndex++;
    if (quiz.currentQuestionIndex < quiz.questions.length) {
        showQuestion(courseId);
    } else {
        showResult(courseId);
    }
    updateCompletionScore(courseId);
    updateOverallCompletion();
}

function showQuestion(courseId) {
    var quiz = quizzes[courseId];
    var questionElement = document.getElementById(`question-${courseId}`);
    var buttons = document.querySelectorAll(`#question-container-${courseId} button`);
    questionElement.textContent = quiz.questions[quiz.currentQuestionIndex].question;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'block';
        buttons[i].textContent = quiz.questions[quiz.currentQuestionIndex].answers[i].text;
    }
}

function showResult(courseId) {
    var quiz = quizzes[courseId];
    document.getElementById(`question-container-${courseId}`).style.display = 'none';
    var resultElement = document.getElementById(`result-${courseId}`);
    resultElement.style.display = 'block';
    var scorePercentage = Math.round((quiz.score / quiz.questions.length) * 100);
    var resultText = document.getElementById(`result-text-${courseId}`);
    resultText.innerHTML = `<p>Your score: ${scorePercentage}%</p>`;
    if (scorePercentage < 100) {
        resultText.innerHTML += `<p>You need to redo the training course.</p>`;
        document.getElementById(`restart-button-${courseId}`).style.display = 'block';
        resultElement.classList.add('red');
        resultElement.classList.remove('green');
    } else {
        resultText.innerHTML += `<p>Congratulations! You have completed the training.</p>`;
        document.getElementById(`restart-button-${courseId}`).style.display = 'none';
        resultElement.classList.add('green');
        resultElement.classList.remove('red');
        quiz.completed = true;
    }
    updateOverallCompletion();
}

function updateCompletionScore(courseId) {
    var quiz = quizzes[courseId];
    var completionScore = Math.round((quiz.currentQuestionIndex / quiz.questions.length) * 100);
    document.getElementById('completion-score').textContent = `Completion: ${completionScore}%`;
}

function updateOverallCompletion() {
    var totalCourses = Object.keys(quizzes).length;
    var completedCourses = Object.values(quizzes).filter(quiz => quiz.completed).length;
    var overallCompletion = Math.round((completedCourses / totalCourses) * 100);
    document.getElementById('overall-completion').textContent = `Overall Training Completion: ${overallCompletion}%`;
    renderOverallCompletionChart(overallCompletion);
}

function renderCharts() {
    var pieChartOptions = {
        series: [44, 55, 13, 43, 22],
        chart: {
            type: 'pie',
            height: 250
        },
        labels: ['High Risk', 'Medium Risk', 'Low Risk', 'Very High Risk', 'Very Low Risk'],
        colors: ['#FF4560', '#FEB019', '#00E396', '#775DD0', '#008FFB'],
        tooltip: {
            theme: 'light',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var barChartOptions = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690]
        }],
        chart: {
            type: 'bar',
            height: 250
        },
        colors: ['#008FFB'],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Phishing', 'Spoofing', 'Malware', 'Man-in-the-Middle', 'SQL Injection', 'Brute Force', 'DDOS']
        },
        tooltip: {
            theme: 'dark',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var lineChartOptions = {
        series: [{
            name: 'Incidents',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        chart: {
            type: 'line',
            height: 250
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        colors: ['#FFC107'], // Yellow
        tooltip: {
            theme: 'dark',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);
    pieChart.render();

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();

    var lineChart = new ApexCharts(document.querySelector("#line-chart"), lineChartOptions);
    lineChart.render();
}

function renderComplianceChart() {
    var complianceChartOptions = {
        series: [30, 40, 20, 10],
        chart: {
            type: 'donut',
            height: 250
        },
        labels: ['Incidents Reported', 'Training Completed', 'Data Requests Processed', 'Pending Actions'],
        colors: ['#FF4560', '#00E396', '#008FFB', '#FEB019'],
        tooltip: {
            theme: 'light',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var complianceChart = new ApexCharts(document.querySelector("#compliance-chart"), complianceChartOptions);
    complianceChart.render();
}

function renderTrainingProgressChart() {
    var trainingProgressChartOptions = {
        series: [75], // Example percentage
        chart: {
            type: 'radialBar',
            height: 250
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%'
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        fontSize: '22px',
                        color: '#000',
                        offsetY: 10
                    }
                }
            }
        },
        labels: ['Training Progress'],
        colors: ['#00E396'],
        tooltip: {
            theme: 'light',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var trainingProgressChart = new ApexCharts(document.querySelector("#training-progress-chart"), trainingProgressChartOptions);
    trainingProgressChart.render();
}

function renderOverallCompletionChart(overallCompletion) {
    var overallCompletionChartOptions = {
        series: [overallCompletion],
        chart: {
            type: 'radialBar',
            height: 250
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%'
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        fontSize: '22px',
                        color: '#000',
                        offsetY: 10
                    }
                }
            }
        },
        labels: ['Overall Completion'],
        colors: ['#00E396'],
        tooltip: {
            theme: 'light',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var overallCompletionChart = new ApexCharts(document.querySelector("#overall-completion-chart"), overallCompletionChartOptions);
    overallCompletionChart.render();
}

function initializeCountdowns() {
    const deadlines = [
        { id: 'countdown-dpia', date: '2025-06-15' },
        { id: 'countdown-policy-review', date: '2025-07-01' },
        { id: 'countdown-training-session', date: '2025-08-10' }
    ];

    deadlines.forEach(deadline => {
        const countdownElement = document.getElementById(deadline.id);
        const deadlineDate = new Date(deadline.date).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = deadlineDate - now;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "Expired";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            countdownElement.innerHTML = `${days} days`;
        }, 1000);
    });
}

function markAsComplete(id) {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
        alert(`Marked as complete: ${checkbox.nextElementSibling.innerText}`);
    }
}

function filterActivities() {
    const searchInput = document.getElementById('activity-search').value.toLowerCase();
    const activities = document.querySelectorAll('.activity-item');

    activities.forEach(activity => {
        const text = activity.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            activity.style.display = '';
        } else {
            activity.style.display = 'none';
        }
    });
}

function viewActivityDetails(activity) {
    alert(`Viewing details for: ${activity}`);
}

document.addEventListener('DOMContentLoaded', function () {
    // Initial setup if needed

    // Attach event listeners for form submissions
    document.getElementById('delete-data-form-submit').addEventListener('submit', function(event) {
        event.preventDefault();
        addLiveRequest('Delete Data', new FormData(this));
        this.reset();
        showNotification();
    });

    document.getElementById('access-data-form-submit').addEventListener('submit', function(event) {
        event.preventDefault();
        addLiveRequest('Access Data', new FormData(this));
        this.reset();
        showNotification();
    });

    document.getElementById('data-portability-form-submit').addEventListener('submit', function(event) {
        event.preventDefault();
        addLiveRequest('Data Portability', new FormData(this));
        this.reset();
        showNotification();
    });

    // Attach event listener to close button for notification
    document.querySelector('.notification .close-btn').addEventListener('click', function() {
        var notification = document.getElementById('notification');
        notification.style.display = 'none';
    });
});

document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
});

document.getElementById('data-request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
});

function addLiveRequest(type, formData) {
    const liveRequestsContainer = document.getElementById('live-requests-container');
    const requestItem = document.createElement('div');
    requestItem.classList.add('request-item');

    const timestamp = new Date().toLocaleString();
    requestItem.innerHTML = `
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${formData.get('name')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p class="timestamp"><strong>Submitted:</strong> ${timestamp}</p>
    `;

    liveRequestsContainer.prepend(requestItem);
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function showForm() {
    const selectedForm = document.getElementById('form-select').value;
    document.querySelectorAll('.request-form').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(selectedForm).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    renderIncidentStatisticsChart();
});

function renderIncidentStatisticsChart() {
    var options = {
        series: [10, 5, 7, 8, 6, 4], 
        chart: {
            type: 'pie',
            height: 250
        },
        labels: ['Malware', 'Phishing', 'Data Breach', 'Man-in-the-Middle', 'Spoofing', 'DDOS'],
        colors: ['#007BFF', '#FF4560', '#00E396', '#FEB019', '#775DD0', '#546E7A'],
        tooltip: {
            theme: 'dark',
            style: {
                fontSize: '12px',
                color: '#000'
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#incident-statistics-chart"), options);
    chart.render();
}
