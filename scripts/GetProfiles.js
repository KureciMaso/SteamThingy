var arr = ["Profil1", "Profil2", "Profil3"];
const GameProfilesSelect = document.getElementById("GameProfilesSelect");
const PFPSelect = document.getElementById("PFPLink");
const BGSelect = document.getElementById("BGLink");
const FormSubmit = document.getElementById("formSubmit");
const IsSolidCheckbox = document.getElementById("IsSolidCheckbox");
let FetchOutput = "";

/*arr.forEach(Profil => {
    var selection = document.createElement("option");
    selection.text = Profil;
    obj.appendChild(selection);
});*/

fetch('../JSON/Profiles.JSON')
    .then(response => response.json()) // Parse JSON
    .then(data => {
        let x = data.profiles;
        x.forEach(profil => {
            var selection = document.createElement("option");
            selection.text = profil.name;
            GameProfilesSelect.appendChild(selection);

            FormSubmit.addEventListener("click", () => {
                
                let selectedIndex = GameProfilesSelect.selectedIndex;
                const EditedHTML = window.open(x[selectedIndex].path, "_blank");
                EditedHTML.addEventListener("load", function(){
                        EditedHTML.document.querySelector(".profile_avatar_frame > img").remove();
                        EditedHTML.document.querySelector(".playerAvatarAutoSizeInner > img").src = PFPSelect.value;
                        if(IsSolidCheckbox.checked)
                            {
  
                            EditedHTML.document.querySelector(".profile_animated_background").remove();
                            EditedHTML.document.querySelector(".profile_golden_wrapper > div").style.backgroundImage = "url('" + BGSelect.value + "')";
                            }
                        else{
                                EditedHTML.document.querySelector(".profile_animated_background > video").querySelector("source[type='video/mp4']").src = BGSelect.value;
                                EditedHTML.document.querySelector(".profile_animated_background > video").querySelector("source[type='video/webm']").remove();
                                EditedHTML.document.querySelector(".profile_animated_background > video").load();

                                //https://cdn.fastly.steamstatic.com/steamcommunity/public/images/items/1173010/b8968e6d9fb04c2fe911923a39d6121afa75169f.webm
                                //.src = BGSelect.value;
                            }

                    });

            });


        });


    })




