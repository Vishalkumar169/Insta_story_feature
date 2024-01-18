var arr = [
    {
        dp: "https://images.unsplash.com/photo-1705154807723-febfd54e0478?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1705073194847-f425940012c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1698332328531-a9c59ca60758?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1698331383094-603aa3df9a14?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1704183668713-8000b643c24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1703767802277-384db1bb263c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1704899510362-68003a25ecdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1704790274810-07c40c1130cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    },
];

var storiyan = document.querySelector("#storiyan")

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id = "${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
});