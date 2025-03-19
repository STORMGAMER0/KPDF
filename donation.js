// document.addEventListener("DOMContentLoaded", function () {
//     const foodForm = document.querySelector(".food");
//     const moneyForm = document.querySelector(".money");
//     const donateButtons = document.querySelectorAll("button");
  
//     donateButtons.forEach(button => {
//       button.addEventListener("click", function (event) {
//         event.preventDefault(); 
       
//         if (foodForm.classList.contains("active")) {
//           foodForm.classList.remove("active");
//           moneyForm.classList.add("active");
//         } else {
//           moneyForm.classList.remove("active");
//           foodForm.classList.add("active");
//         }
//       });
//     });
  

//     foodForm.classList.add("active");
//   });
  
document.addEventListener("DOMContentLoaded", function () {
    const foodForm = document.querySelector(".food");
    const moneyForm = document.querySelector(".money");
    const switchButtons = document.querySelectorAll(".button-p + button"); // Targets only "click here" buttons

    switchButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default button behavior

            // Toggle form visibility with animation
            if (foodForm.classList.contains("active")) {
                foodForm.classList.remove("active");
                moneyForm.classList.add("active");
            } else {
                moneyForm.classList.remove("active");
                foodForm.classList.add("active");
            }
        });
    });

    // Ensure the food form is visible by default
    foodForm.classList.add("active");
});


  document.addEventListener("DOMContentLoaded", function () {
    const foodBanksByCountry = {
        algeria: ["Algeria Food Relief", "Hope for Algeria", "Feeding Algeria", "Algerian Food Network", "Charity Meals Algeria"],
        angola: ["Angola Food Assistance", "Feeding Hope Angola", "Community Meals Angola", "Hope Relief Angola", "Angolan Food Bank"],
        benin: ["Benin Food Aid", "Benin Hunger Relief", "Community Kitchens Benin", "Hope Meals Benin", "Feeding the Needy Benin"],
        botswana: ["Botswana Hunger Relief", "Food Aid Botswana", "Community Food Botswana", "Hope for Botswana", "Botswana Feeding Initiative"],
        burkinafaso: ["Burkina Faso Food Aid", "Feeding Hope Burkina", "Food for Burkina Faso", "Hunger Relief Burkina", "Burkina Food Support"],
        burundi: ["Burundi Food Assistance", "Feeding Burundi Initiative", "Hope Meals Burundi", "Community Food Burundi", "Hunger Relief Burundi"],
        capeverde: ["Cape Verde Food Bank", "Feeding Hope Cape Verde", "Community Meals Cape Verde", "Hunger Relief Cape Verde", "Cape Verde Charity Meals"],
        cameroon: ["Cameroon Food Aid", "Feeding Cameroon Initiative", "Hope Meals Cameroon", "Community Food Cameroon", "Hunger Relief Cameroon"],
        centralafricanrepublic: ["CAR Food Assistance", "Feeding Hope CAR", "Community Meals CAR", "Hunger Relief CAR", "Central African Charity Meals"],
        chad: ["Chad Food Bank", "Feeding Chad Initiative", "Hope Meals Chad", "Community Food Chad", "Hunger Relief Chad"],
        comoros: ["Comoros Food Assistance", "Feeding Hope Comoros", "Community Meals Comoros", "Hunger Relief Comoros", "Comoros Charity Meals"],
        congo: ["Congo Food Aid", "Feeding Congo Initiative", "Hope Meals Congo", "Community Food Congo", "Hunger Relief Congo"],
        djibouti: ["Djibouti Food Bank", "Feeding Djibouti Initiative", "Hope Meals Djibouti", "Community Food Djibouti", "Hunger Relief Djibouti"],
        drc: ["DRC Food Assistance", "Feeding Hope DRC", "Community Meals DRC", "Hunger Relief DRC", "Congo Charity Meals"],
        nigeria: ["Lagos Food Bank", "Abuja Food Bank", "Kano Relief Center", "Port Harcourt Hunger Aid", "Ibadan Food Pantry"],
        ghana: ["Accra Food Bank", "Kumasi Hunger Relief", "Tamale Food Aid", "Takoradi Community Kitchen", "Cape Coast Charity Meals"],
        kenya: ["Nairobi Hunger Relief", "Mombasa Food Bank", "Kisumu Meal Center", "Nakuru Community Pantry", "Eldoret Food Support"],
        southafrica: ["Cape Town Food Bank", "Johannesburg Hunger Relief", "Durban Meal Distribution", "Pretoria Food Pantry", "Soweto Aid Center"],
        egypt: ["Cairo Charity Kitchen", "Alexandria Food Aid", "Giza Community Meals", "Luxor Hunger Support", "Aswan Food Relief"],
        equatorialguinea: ["Equatorial Guinea Food Aid", "Feeding Equatorial Guinea", "Hope Meals Equatorial Guinea", "Community Food Equatorial Guinea", "Hunger Relief Equatorial Guinea"],
        eritrea: ["Eritrea Food Assistance", "Feeding Hope Eritrea", "Community Meals Eritrea", "Hunger Relief Eritrea", "Eritrea Charity Meals"],
        eswatini: ["Eswatini Food Bank", "Feeding Eswatini Initiative", "Hope Meals Eswatini", "Community Food Eswatini", "Hunger Relief Eswatini"],
        ethiopia: ["Ethiopia Food Bank", "Feeding Ethiopia Initiative", "Hope Meals Ethiopia", "Community Food Ethiopia", "Hunger Relief Ethiopia"],
        gabon: ["Gabon Food Assistance", "Feeding Hope Gabon", "Community Meals Gabon", "Hunger Relief Gabon", "Gabon Charity Meals"],
        gambia: ["Gambia Food Aid", "Feeding Gambia Initiative", "Hope Meals Gambia", "Community Food Gambia", "Hunger Relief Gambia"],
        guinea: ["Guinea Food Bank", "Feeding Guinea Initiative", "Hope Meals Guinea", "Community Food Guinea", "Hunger Relief Guinea"],
        guineabissau: ["Guinea-Bissau Food Assistance", "Feeding Hope Guinea-Bissau", "Community Meals Guinea-Bissau", "Hunger Relief Guinea-Bissau", "Guinea-Bissau Charity Meals"],
        ivorycoast: ["Ivory Coast Food Aid", "Feeding Ivory Coast Initiative", "Hope Meals Ivory Coast", "Community Food Ivory Coast", "Hunger Relief Ivory Coast"],
        lesotho: ["Lesotho Food Bank", "Feeding Lesotho Initiative", "Hope Meals Lesotho", "Community Food Lesotho", "Hunger Relief Lesotho"],
        liberia: ["Liberia Food Assistance", "Feeding Hope Liberia", "Community Meals Liberia", "Hunger Relief Liberia", "Liberia Charity Meals"],
        morocco: ["Casablanca Food Relief", "Rabat Hunger Aid", "Marrakech Community Meals", "Fes Food Pantry", "Tangier Charity Kitchen"],
        mozambique: ["Maputo Food Aid", "Beira Hunger Relief", "Nampula Meal Support", "Tete Food Bank", "Chimoio Community Kitchen"],
        namibia: ["Windhoek Food Relief", "Swakopmund Meal Center", "Walvis Bay Hunger Aid", "Otjiwarongo Community Pantry", "Rundu Food Bank"],
        zambia: ["Lusaka Hunger Aid", "Ndola Food Bank", "Kitwe Meal Support", "Livingstone Charity Kitchen", "Chipata Community Pantry"],
        zimbabwe: ["Harare Food Bank", "Bulawayo Hunger Relief", "Gweru Meal Support", "Mutare Charity Kitchen", "Masvingo Community Pantry"],
        madagascar: ["Antananarivo Food Relief", "Toamasina Hunger Aid", "Antsirabe Community Kitchen", "Mahajanga Food Pantry", "Fianarantsoa Charity Meals"],
        malawi: ["Lilongwe Food Bank", "Blantyre Hunger Relief", "Mzuzu Meal Support", "Zomba Charity Kitchen", "Kasungu Community Pantry"],
        mauritania: ["Nouakchott Food Assistance", "Nouadhibou Hunger Aid", "Kaedi Community Meals", "Rosso Food Bank", "Atar Charity Relief"],
        mauritius: ["Port Louis Food Aid", "Curepipe Hunger Relief", "Beau Bassin-Rose Hill Meal Support", "Vacoas-Phoenix Food Pantry", "Quatre Bornes Community Kitchen"],
        seychelles: ["Victoria Food Bank", "Mahe Hunger Relief", "Praslin Meal Support", "La Digue Community Pantry", "Seychelles Charity Kitchen"],
        tanzania: ["Dar es Salaam Food Relief", "Mwanza Hunger Aid", "Arusha Community Kitchen", "Dodoma Food Pantry", "Mbeya Charity Meals"],
        tunisia: ["Tunis Food Bank", "Sfax Hunger Relief", "Sousse Meal Support", "Kairouan Community Pantry", "Gabes Charity Kitchen"],
        uganda: ["Kampala Food Aid", "Entebbe Hunger Relief", "Jinja Meal Support", "Gulu Food Pantry", "Mbarara Charity Kitchen"],
        rwanda: ["Kigali Food Bank", "Butare Hunger Relief", "Musanze Meal Support", "Gisenyi Food Pantry", "Ruhengeri Community Kitchen"],
        sudan: ["Khartoum Food Assistance", "Omdurman Hunger Aid", "Port Sudan Community Meals", "Nyala Food Bank", "El Obeid Charity Relief"],
        southsudan: ["Juba Food Bank", "Malakal Hunger Relief", "Wau Meal Support", "Bor Food Pantry", "Yambio Charity Kitchen"],
        somalia: ["Mogadishu Food Assistance", "Hargeisa Hunger Aid", "Kismayo Community Meals", "Bosaso Food Bank", "Baidoa Charity Relief"],
        libya: ["Tripoli Food Aid", "Benghazi Hunger Relief", "Misrata Meal Support", "Sabha Food Pantry", "Zawiya Charity Kitchen"]
    };

    const countrySelect = document.getElementById("country");
    const foodBankSelect = document.getElementById("food-bank");

    countrySelect.addEventListener("change", function () {
        const selectedCountry = this.value.toLowerCase().replace(/\s+/g, ""); // Normalize the selection

        foodBankSelect.innerHTML = '<option value="">Select a food bank</option>'; // Reset options

        if (selectedCountry in foodBanksByCountry) {
            foodBanksByCountry[selectedCountry].forEach(foodBank => {
                let option = document.createElement("option");
                option.value = foodBank;
                option.textContent = foodBank;
                foodBankSelect.appendChild(option);
            });
        }
    });
});
