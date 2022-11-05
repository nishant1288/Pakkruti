var changeLanguageButton = document.getElementById("changeLanguage");
changeLanguageButton.addEventListener('click', function()
{
    var about = document.getElementById('about');
    var recipeChange = document.getElementById('recipe-change')
    var breakfast = document.getElementById('breakfast');
    var lunch = document.getElementById('lunch');
    var dinner = document.getElementById('dinner');
    var searchInputBox = document.getElementById('searchInputBox');
    var sidebarSpecial = document.getElementById('sidebar_today-special');
    var sidebarBreakfast = document.getElementById('sidebar_breakfast');
    var sidebarLunch = document.getElementById('sidebar_lunch');
    var sidebarDinner = document.getElementById('sidebar_dinner');
    var sidebarAbout = document.getElementById('sidebar_aboutUs');
    var h3Heading = document.getElementsByClassName('special-title');
    var viewAll = document.getElementsByClassName('view');
  
   
    if (about.innerHTML === "About Us" || changeLanguageButton.innerHTML === "भाषा" || recipeChange.innerHTML === "Recipe")
    {
       
       
        about.innerHTML = "आमच्याबद्दल";
        changeLanguageButton.innerHTML = "Language";
        recipeChange.innerHTML = "कृती";
        breakfast.innerHTML = "नाश्ता";
        lunch.innerHTML = "दुपारचे जेवण";
        dinner.innerHTML = "रात्रीचे जेवण";
        searchInputBox.placeholder = "येथे शोधा";
        sidebarSpecial.innerHTML = "आजचे खास";
        sidebarBreakfast.innerHTML = "नाश्ता";
        sidebarLunch.innerHTML = "दुपारचे जेवण";
        sidebarDinner.innerHTML = "रात्रीचे जेवण";
        sidebarAbout.innerHTML = "आमच्याबद्दल";
        h3Heading[0].innerHTML = "आजचे खास";
        h3Heading[1].innerHTML = "नाश्ता";
        h3Heading[2].innerHTML = "दुपारचे जेवण";
        h3Heading[3].innerHTML = "रात्रीचे जेवण";
        for (let eachViewItem of viewAll)
        {
            eachViewItem.innerHTML = "सर्व पहा <i class='fa-solid fa-arrow-right'></i>";
        }

       

    }

    else if (about.innerHTML === "आमच्याबद्दल" || changeLanguageButton.innerHTML === "Language" ||recipeChange.innerHTML === "कृती")
    {
        
     
        about.innerHTML = "About Us";
        changeLanguageButton.innerHTML = "भाषा";
        recipeChange.innerHTML = "Recipe";
        breakfast.innerHTML = "Breakfast";
        lunch.innerHTML = "Lunch";
        dinner.innerHTML = "Dinner";
        searchInputBox.placeholder = "Search";
        sidebarSpecial.innerHTML = "Today's Special";
        sidebarBreakfast.innerHTML = "Breakfast";
        sidebarLunch.innerHTML = "Lunch";
        sidebarDinner.innerHTML = "Dinner";
        sidebarAbout.innerHTML = "About Us";
        h3Heading[0].innerHTML = "Today's Special";
        h3Heading[1].innerHTML = "Breakfast";
        h3Heading[2].innerHTML = "Lunch";
        h3Heading[3].innerHTML = "Dinner";
        for (let eachViewItem of viewAll)
        {
            eachViewItem.innerHTML = "View all <i class='fa-solid fa-arrow-right'></i>";
        }
        
    }    
    
})

var toggleButton = document.getElementById('hamburger');
toggleButton.addEventListener('click', function() {
    var sidebarMain = document.getElementById('sidebar_id');
    sidebarMain.className = "sidebar-main";
})

var crossButton = document.getElementById('cross-mark');
crossButton.addEventListener('click', function() {
    var sidebarMain = document.getElementById('sidebar_id');
    sidebarMain.className = "sidebar";
})

var specialDish = document.getElementsByClassName('special-dish')
for (let eachSpecialDish of specialDish)
{
    eachSpecialDish.addEventListener('click', function()
    {
        document.location.href="singledish.html";
    })
}

function navFunction()
{
    var getRecipe = document.getElementById('recipe').value;
    if (getRecipe === "breakfast" || getRecipe === "lunch" || getRecipe === "dinner")
    {
        document.location.href="allpages.html"
    }

    else if (getRecipe === "recipe")
    {
        document.location.href="main.html"
    }
}