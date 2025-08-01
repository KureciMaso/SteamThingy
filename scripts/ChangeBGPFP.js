function ChangePFP(EditedHTML)
{
if(PFPSelect.value)
            {
                EditedHTML.document.querySelector(".profile_avatar_frame > img").remove();
                EditedHTML.document.querySelector(".playerAvatarAutoSizeInner > img").src = PFPSelect.value;
                console.log(PFPSelect.value);
            }
        if(BGSelect.value)
            {
                if(IsSolidCheckbox.checked)
                            {
  
                            EditedHTML.document.querySelector("..no_header.profile_page.has_profile_background.full_width_background").remove();
                            EditedHTML.document.querySelector(".no_header.profile_page.has_profile_background.full_width_background > div").style.backgroundImage = "url('" + BGSelect.value + "')";
                            console.log(BGSelect.value)
                            }
                        else{
                                EditedHTML.document.querySelector(".profile_animated_background > video").querySelector("source[type='video/mp4']").src = BGSelect.value;
                                EditedHTML.document.querySelector(".profile_animated_background > video").querySelector("source[type='video/webm']").remove();
                                EditedHTML.document.querySelector(".profile_animated_background > video").load();

                                //https://cdn.fastly.steamstatic.com/steamcommunity/public/images/items/1173010/b8968e6d9fb04c2fe911923a39d6121afa75169f.webm
                                //.src = BGSelect.value;
                            }
            }
}

function ChangeBG(EditedHTML)
{

}







                        