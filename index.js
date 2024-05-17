document.addEventListener('DOMContentLoaded', function() { 
    // ACÁ YA ESTA LISTO EL DOM 

    obtenerProducto();
 });


 async function obtenerProducto(){
    const url = 'https://fakestoreapi.com/products';
    try {
        
        const Producto = await fetch(url); 
        const ProductoJSON = await Producto.json();
        console.log(ProductoJSON);
        recorreEInsertasProducto(ProductoJSON);

    } 
    catch (error) { 
        //crearError();
        console.log(error)
    }
};

function recorreEInsertasProducto(Producto){
    const cardProducto = document.getElementById('cardProducto');
    Producto.forEach(Productos => {
        const card = crearCardProducto(Productos);
        cardProducto.appendChild(card);
    });

};
    
    function crearCardProducto(Productos) {
        const divCol = document.createElement('div');
        divCol.classList.add('col-', 'col-sm-12','col-md-6','col-lg-4','col-xl-3','col-xxl-3','mb-3');
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        const img = document.createElement('img');
        img.setAttribute('src', Productos.image);
        img.classList.add('card-img-top');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = Productos.title;
        const h3 = document.createElement('h3');
        h3.classList.add('card-text');
        h3.textContent = Productos.price;
        const h6 = document.createElement('h6');
        h6.classList.add('card-text');
        //h6.textContent = 'Descripcion';
        const p = document.createElement('p');
        p.classList.add('card-text');
       // p.textContent = Productos.description;
        
        const a = document.createElement('a');
        a.setAttribute('href', 'fin_compra.html');
        a.classList.add('btn', 'btn-warning');
        a.textContent = 'Comprar';

        divCol.appendChild(divCard);
        divCard.appendChild(img);
        divCard.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(h3);
        cardBody.appendChild(h6);
        cardBody.appendChild(p);
        cardBody.appendChild(a);

        return divCol;
    }
    
    function crearError() {
        const divError = document.createElement('div');
        const cardProducto = document.getElementById('cardProducto');
        divError.textContent = '!!!Esta pagina no se encuentra disponible,😔😔😔 intenta mas tarde!!!';
        cardProducto.appendChild(divError);
        
    };
   


