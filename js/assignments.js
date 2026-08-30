const assignmentForm = document.getElementById("assignmentForm");
const assignmentList = document.getElementById("assignmentList");

assignmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("assignmentName").value;
    const module = document.getElementById("assignmentModule").value;
    const date = document.getElementById("assignmentDate").value;
    const priority = document.getElementById("assignmentPriority").value;

    const assignment = document.createElement("div");

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

    assignmentForm.reset();

    //Complete 

    const completeButton = assignement.querySelector(".complete-button");

    completeButton.addEventListener("click", function() {
        assignment.classList.toggle("completed");

    });

    //Delete 

    const deleteButton = assignment.querySelector(".delete-button");

    deleteButton.addEventListener("click", function(){
        assignement.remove();
    });
});