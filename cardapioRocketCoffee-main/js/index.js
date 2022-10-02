document.getElementById("form").addEventListener("submit", function(e) {
e.preventDefault();
const {name,description,type,price}= e.target
adicionar(name.value,description.value,type.value,price.value)
limpar()

})

function limpar(){
  document.getElementById("nome").value=""
  document.getElementById("textarea").value=""
  document.getElementById("preco").value=""
}
function adicionar(name,description,type,price) {
  let ul = document.getElementById(type);
  let li = document.createElement("li");
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let strong = document.createElement("strong");
  h3.innerHTML = name;
  p.innerHTML = description;
  strong.innerHTML = 'R$ '+ price;
  strong.className = "price";
  div.className = "details";

  div.append(h3);
  div.append(p);

  li.appendChild(div);
  li.appendChild(strong);
  ul.appendChild(li);
}