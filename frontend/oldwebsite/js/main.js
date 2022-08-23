function showDnResume() {
    document.getElementById("dnResume").style.display = "block"

}

function showContacts() {
    document.getElementById("contacts").style.display = "block"

}

function showApply() {
    document.getElementById("jobs").style.display = "block"
}

function showUniversity() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("dashboard").style.visibility = "hidden";
    document.getElementById("university").style.display = "block";
    document.getElementById("university").style.visibility = "visible";
    document.getElementById("companies").style.display = "none";
    document.getElementById("companies").style.visibility = "hidden";
    document.getElementById("work").style.display = "none";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("idea").style.display = "none";
    document.getElementById("idea").style.visibility = "hidden";

}

function backToDashboard() {
    document.getElementById("university").style.display = "none";
    document.getElementById("university").style.visibility = "hidden";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("dashboard").style.visibility = "visible";
    document.getElementById("companies").style.display = "none";
    document.getElementById("companies").style.visibility = "hidden";
    document.getElementById("work").style.display = "none";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("idea").style.display = "none";
    document.getElementById("idea").style.visibility = "hidden";
}

function showCompanies() {
    document.getElementById("university").style.display = "none";
    document.getElementById("university").style.visibility = "hidden";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("dashboard").style.visibility = "hidden";
    document.getElementById("companies").style.display = "block";
    document.getElementById("companies").style.visibility = "visible";
    document.getElementById("work").style.display = "none";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("idea").style.display = "none";
    document.getElementById("idea").style.visibility = "hidden";
}

function showWork() {
    document.getElementById("university").style.display = "none";
    document.getElementById("university").style.visibility = "hidden";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("dashboard").style.visibility = "hidden";
    document.getElementById("companies").style.display = "none";
    document.getElementById("companies").style.visibility = "hidden";
    document.getElementById("work").style.display = "block";
    document.getElementById("work").style.visibility = "visible";
    document.getElementById("idea").style.display = "none";
    document.getElementById("idea").style.visibility = "hidden";
}

function showIdea() {
    document.getElementById("university").style.display = "none";
    document.getElementById("university").style.visibility = "hidden";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("dashboard").style.visibility = "hidden";
    document.getElementById("companies").style.display = "none";
    document.getElementById("companies").style.visibility = "hidden";
    document.getElementById("work").style.display = "none";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("idea").style.display = "block";
    document.getElementById("idea").style.visibility = "visible";
}