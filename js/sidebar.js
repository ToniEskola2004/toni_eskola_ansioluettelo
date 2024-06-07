
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform =  "translate(-250px)";
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform =  "translate(250px)";
  }