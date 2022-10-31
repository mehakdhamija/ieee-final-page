function resetAll() {
    var all_containers = document.getElementsByClassName("container");
    for(var i = 0; i < all_containers.length; i++){
        var container = all_containers[i] ;
        container.style.display = "block";
    }  
}


function pagination2022() {
    resetAll();
    var containers_to_hide_when_2022 = document.getElementsByClassName("hide-when-2022");
    for(var i = 0; i < containers_to_hide_when_2022.length; i++){
        var container = containers_to_hide_when_2022[i] ;
        if (container.style.display === "none") {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
    }  
}

function pagination2020() {
    resetAll();
    var containers_to_hide_when_2020 = document.getElementsByClassName("hide-when-2020");
    for(var i = 0; i < containers_to_hide_when_2020.length; i++){
        var container = containers_to_hide_when_2020[i] ;
        if (container.style.display === "none") {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
    }
    
  }

  function pagination2019() {
    resetAll();
    var containers_to_hide_when_2019 = document.getElementsByClassName("hide-when-2019");
    for(var i = 0; i < containers_to_hide_when_2019.length; i++){
        var container = containers_to_hide_when_2019[i] ;
        if (container.style.display === "none") {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
    }
    
  }


  function pagination2018() {
    resetAll();
    var containers_to_hide_when_2018 = document.getElementsByClassName("hide-when-2018");
    for(var i = 0; i < containers_to_hide_when_2018.length; i++){
        var container = containers_to_hide_when_2018[i] ;
        if (container.style.display === "none") {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
    }
    
  }

