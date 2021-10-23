let game = {
    Fen: "",
    Playermove: "b2b3",
    Answer: "",
    Depth: "20"
}

const getMove = async () => {
    game.Playermove = document.getElementById("move").value
    load(true)
    const response = await fetch('http://127.0.0.1:8080/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
    response.json().then(value => {
        game = value;
        load(false);
        document.getElementById("answer").innerHTML = "Der Computer spielt: <br>" + game.Answer
    })
}

const load = (loading) => {
    if(loading) {
        document.getElementById("sendMove").classList.add("hidden");
        document.getElementById("loading").classList.remove("hidden");
        return;
    }
    document.getElementById("sendMove").classList.remove("hidden");
    document.getElementById("loading").classList.add("hidden");
}

document.getElementById ("sendMove").addEventListener("click", getMove, false);
