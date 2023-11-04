
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#colorForm").addEventListener('submit', function(event) {
        event.preventDefault(); //prevent the page from refreshing
        const colorInput = document.querySelector("#colorInput").value;
        document.querySelector("#hello").style.color = colorInput;
    });
});