const FormSubmit = document.getElementById("formSubmit");
const BodyClasses = ["flat_page", "profile_page", "has_profile_background", "GameProfileTheme", "responsive_page"]
const GameProfilesSelect = document.getElementById("GameProfilesSelect");
const ProfileLinkForm = document.getElementById("ProfileLink");
//let selectedIndex = ;

const PFPSelect = document.getElementById("PFPLink");
const BGSelect = document.getElementById("BGLink");
const IsSolidCheckbox = document.getElementById("IsSolidCheckbox");



fetch('../JSON/V2.JSON')
  .then(response => response.json())
  .then(data => {
    let ProfileData = data.profiles;

    FormSubmit.addEventListener("click", () => {
      if (ProfileLinkForm.value.indexOf("https://steamcommunity.com/") === 0) {
        fetch(
          "https://thingproxy-col6.onrender.com/fetch/" + ProfileLinkForm.value
        )
          .then((res) => res.text())
          .then((html) => {
            const EditedHTML = window.open("", "_blank");

            if (!EditedHTML) {
              alert("Popup was blocked. Please allow popups for this site.");
              return;
            }

            const interval = setInterval(() => {
              
              if (!EditedHTML || EditedHTML.closed) {
                clearInterval(interval);
                console.warn("Popup was closed or unavailable.");
                return;
              }

              try {

                if (EditedHTML.document.readyState === "complete") {
                  clearInterval(interval);

                  const wrapper = EditedHTML.document.createElement("div");
                  wrapper.innerHTML = html;
                  EditedHTML.document.body.innerHTML = "";
                  EditedHTML.document.body.appendChild(wrapper);



//ADD CLASSES TO THE BODY
                  const body = EditedHTML.document.querySelector("body");
                  body.className = "";
                  
                  BodyClasses.forEach((cls, index) => {
                    
                    if(ProfileData[GameProfilesSelect.selectedIndex].custom_customisation && index == 3)
                      {
                        //console.log("added a different body class");
                        //console.log(ProfileData[GameProfilesSelect.selectedIndex].custom_body_name);
                        body.classList.add(ProfileData[GameProfilesSelect.selectedIndex].custom_body_name);
                      }
                      else{body.classList.add(cls);}
                    
                  });



                  const styleEl = EditedHTML.document.createElement("style");
                  styleEl.textContent = ProfileData[GameProfilesSelect.selectedIndex].style;
                  EditedHTML.document.head.appendChild(styleEl);


                  if (ProfileData[GameProfilesSelect.selectedIndex].custom_customisation) {
                    console.log("Cusotm customisation found")
                    const customised_css = EditedHTML.document.createElement("link");
                    customised_css.rel = "stylesheet";
                    customised_css.type = "text/css";
                    //customised_css.innerText = 
                    customised_css.href = "styles/custom_styles/" + x[GameProfilesSelect.selectedIndex].customised_css;; 
                    console.log(customised_css);
                    EditedHTML.document.head.appendChild(customised_css);


                  }






                }} catch (error) { console.log(error); console.log("Waiting to load") };

                // console.log(x[selectedIndex].style);
              }, 100);
          });

      }
      else {
        alert("Invalid page")
      }


    });



  })

//<body class="flat_page profile_page has_profile_background GameProfileTheme responsive_page">
