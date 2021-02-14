function addUser(){
    player1_name = document.getElementById("player1_name_input").nodeValue;
    player2_name = document.getElementById("player2_name_input")

    localStorage.setItem("player_1name", player1_name);
    localStorage.getItem("player2_name", player2_name);

    window.location = "game_page.html";
}