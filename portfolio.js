function opentab(tabname) {
    // var i, tabcontent, tablinks;
    var tablinks = document.getElementsByClassName(tab-links);
    var tabcontent = document.getElementsByClassName(tab-contents);
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
  }