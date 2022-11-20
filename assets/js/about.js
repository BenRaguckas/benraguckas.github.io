window.onload = () => {
    $(".language-item").click();
}

const showLanguage = (item_id) => {
    Array.from($(".language-section").children).forEach(el => {
        if (el.style.display !== "none") {
            el.style.display = "none";
        }
    });
    $("#" + item_id).style.display = "block";
}

const showTimeline = (item_id) => {
    let el = $("#" + item_id);
    if (el.style.maxHeight  === "0px")
        el.style.maxHeight = el.scrollHeight + "px";
    else
        el.style.maxHeight = "0px";
}