async function register() {
    await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            bio: bio.value
        })
    });
    alert("Registered");
}

async function post() {
    await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id: user_id.value,
            content: content.value
        })
    });
    alert("Posted");
}

async function loadFeed() {
    const res = await fetch("/api/feed");
    const data = await res.json();
    feed.innerHTML = data.map(
        p => `<p><b>${p.author}</b>: ${p.content}</p>`
    ).join("");
}
