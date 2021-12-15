let navbar = document.querySelector('.navbar');

//Função responsavel por abrir o menu clicando no botão
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active'); // abre o menu
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form'); 

//Função responsavel por abrir a barra de pesquisa do site
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active'); // abre a barra de pesquisa
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

//Função responsavel por abrir o carrinho de compras
document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active'); //abre a barra de compras do carrinho
  navbar.classList.remove('active')
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}















