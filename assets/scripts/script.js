function showMore(section) {
    const moreContent = document.getElementById(`${section}-more`);
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
