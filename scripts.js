let isListView = false;

function switchView(isCalendar) {
    if (!isCalendar) {
        window.location.href = "index.html";
    } else {
        window.location.href = "list.html";
    }
    isListView = !isCalendar;
}

function editLepidEvent(eventId) {
    window.location.href = "edit.html?eventId=" + eventId;
}

function createLepidEvent() {
    window.location.href = "create.html";
}

function closeLepidEvent() {
    if (isListView) {
        window.location.href = "list.html";
    } else {
        window.location.href = "index.html";
    }
}