let ModoAtual = localStorage.getItem("TemaSite") || "dark";
let btTema = document.getElementById("temaBt");
function definirTema() {
  if (ModoAtual == "light") {
    btTema.querySelector("img").src = "ModoClaro.png";
  } else {
    btTema.querySelector("img").src = "ModoDark.png";
  }
  document.querySelector("html").setAttribute("data-theme", ModoAtual);
}
function Trocar() {
  if (ModoAtual == "light") {
    ModoAtual = "dark";
  } else {
    ModoAtual = "light";
  }
  localStorage.setItem("TemaSite", ModoAtual);
  definirTema();
}
btTema.addEventListener("click",()=>{
    Trocar()
})
definirTema();
