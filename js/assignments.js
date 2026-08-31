const assignmentForm = document.getElementById("assignmentForm");
const assignmentList = document.getElementById("assignmentList");

const totalAssignments = document.getElementById("totalAssignments");
const upcomingAssignments = document.getElementById("upcomingAssignments");
const completedAssignments = document.getElementById("completedAssignments");

assignmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("assignmentName").value;
    const module = document.getElementById("assignmentModule").value;
    const date = document.getElementById("assignmentDate").value;
    const priority = document.getElementById("assignmentPriority").value;

    const assignment = document.createElement("div");
    assignment.dataset.dueDate = date;

    assignment.classList.add("assignment-card");

    assignment.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Module:</strong> ${module}</p>
        <p><strong>Due:</strong> ${date}</p>
        <p><strong>Priority:</strong> ${priority}</p>

        <div class="assignement-actions">
        <button class="complete-button">✓ Complete</button>
        <button class="edit-button">✏️ Edit</button>
        <button class="delete-button">🗑️ Delete</button>
        </div>
    `;

    assignmentList.appendChild(assignment);
    totalAssignments.textContent = assignmentList.children.length;
    updateUpcomingAssignments();

    assignmentForm.reset();

    //Complete 

    const completeButton = assignment.querySelector(".complete-button");

    completeButton.addEventListener("click", function() {
        assignment.classList.toggle("completed");

        if(assignment.classList.contains("completed")) {
            completedAssignments.textContent++;
        } else {
            completedAssignments.textContent--;
        } //so counter doesnt go 0 -> 1 -> 2, also lets you remove if you click complete again

    });

    //Delete 

    const deleteButton = assignment.querySelector(".delete-button");

    deleteButton.addEventListener("click", function(){
        assignment.remove();
    });
});

    function updateUpcomingAssignments() {
        let upcomingCount = 0;
        const assignments = assignmentList.children;

        for (let assignment of assignments) {
            const dueDate = new Date(assignment.dataset.dueDate);
            const today = new Date();
            const difference = dueDate - today;
            const daysUntilDue = difference / (1000 * 60 * 60 * 24);
         if (daysUntilDue >= 0 && daysUntilDue <=7) {
            upcomingCount++;
        }
        
        }
       upcomingAssignments.textContent = upcomingCount;
    }

    updateUpcomingAssignments();

