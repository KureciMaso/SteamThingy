fetch('https://raw.githubusercontent.com/KureciMaso/SteamThingy/refs/heads/main/JSON/V2.JSON')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        let x = data.profiles;
        x.forEach(profil => {
            var selection = document.createElement("option");
            selection.text = profil.name;
            GameProfilesSelect.appendChild(selection);})})
