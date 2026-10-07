function switchView(isCalendar) {
    if (!isCalendar) {
        window.location.href = "index.html";
    } else {
        window.location.href = "list.html";
    }
}