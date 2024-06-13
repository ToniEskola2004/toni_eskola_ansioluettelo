const sidebar = document.querySelector('.sidebar');

function showSidebar() {
  sidebar.style.display = "flex";
  setTimeout(() => {
    sidebar.style.transform = "translate(-250px)";
  }, 10);

}
function hideSidebar() {
  sidebar.style.transform = "translate(250px)";
  sidebar.addEventListener('transitionend', () => {
    sidebar.style.display = "none";
  }, { once: true });
}