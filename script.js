const $content = document.getElementById("content");
const $script = document.getElementById("script");
const $next = document.getElementById("next");

const reader = {
    text: [],
    index: -1
};

function next() {
    reader.index++;
    if(reader.text.length === reader.index) {
        console.log(reader.text)
        return;
    }
    const p = document.createElement("p");
    p.innerText = reader.text[reader.index];
    $content.append(p);
    $content.scrollTo({
        left: 0,
        top: $content.scrollHeight,
        behavior: "smooth",
        
    });
}


$script.addEventListener("change", e => {
    const file = e.target.files[0];
    const fr = new FileReader();
    fr.readAsText(file);
    fr.addEventListener("loadend", e => {
        reader.text = e.target.result.split(/\r?\n/).filter(e => e !== "");
        reader.index = -1
    });
});

$next.addEventListener("click", e => {
    next();
});
