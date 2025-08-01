const PriceSpan = document.getElementById("price");

fetch('https://raw.githubusercontent.com/KureciMaso/SteamThingy/refs/heads/main/JSON/V2.JSON')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        let ProfileData = data.profiles;
        GameProfilesSelect.addEventListener('change', (e) => {
            PriceSpan.innerHTML = ProfileData[GameProfilesSelect.selectedIndex].price;
        });

       })
