document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const button = document.createElement("button");
    button.textContent = "Cargar Pokémon";
    document.body.appendChild(button);
    
    button.addEventListener("click", async () => {
        title.textContent = "Cargando...";
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/1"); // Bulbasaur por defecto
            const data = await response.json();
            title.textContent = `¡Atrápalos ya! ${data.name.toUpperCase()}`;
        } catch (error) {
            title.textContent = "Error al cargar Pokémon";
        }
    });
});