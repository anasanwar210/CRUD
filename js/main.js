var inputN = document.getElementById("p_Name"),
    inputP = document.getElementById("p_Price"),
    inputC = document.getElementById("p_Cat"),
    inputD = document.getElementById("p_Desc");

var myStore = [];

if ( localStorage.getItem("myStoreStorge") == null){
  myStore = [];
}
else{
  myStore = JSON.parse(localStorage.getItem("myStoreStorge"));
  displayProduct()
}


// function test(){
//   if (Number(document.getElementById("p_Price").value) == true){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }



function addProduct(){
    if(inputN.value != "" && inputP.value != "" && inputC.value != "" && inputD.value != ""){
      value_one = document.getElementById("p_Name").value;
      value_two = document.getElementById("p_Price").value;
      value_three = document.getElementById("p_Cat").value;
      value_four = document.getElementById("p_Desc").value;
    
      product = {name : value_one , price : value_two , Category : value_three  , Description : value_four}
    
      myStore.unshift(product);
    
      displayProduct()
  
      localStorage.setItem("myStoreStorge" , JSON.stringify(myStore));
    
      clearData()
    }else{
      alert("Sorry...");
    }
}

function clearData(){
  inputN = document.getElementById("p_Name").value = "";
  inputP = document.getElementById("p_Price").value = "";
  inputC = document.getElementById("p_Cat").value = "";
  inputD = document.getElementById("p_Desc").value = "";
}


function displayProduct(){
  var cartona = ``;
  for( i = 0 ; i < myStore.length ; i++){
    cartona += `<tr>
              <td class="bg-warning font-weight-bold" style="width: 1%">${i+1}</td>
              <td>${myStore[i].name }</td>
              <td>${myStore[i].Category }</td>
              <td>${myStore[i].Description }</td>
              <td>${myStore[i].price }</td>
              <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
              <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            </tr>`
  }

  document.getElementById("tBody").innerHTML = cartona;
}


function deleteProduct(Delete){
  myStore.splice(Delete , 1);

  localStorage.setItem("myStoreStorge" , JSON.stringify(myStore));

  displayProduct()
}

function updateProduct(Update){
  inputN = document.getElementById("p_Name").value = myStore[Update].name;
  inputP = document.getElementById("p_Price").value = myStore[Update].price;
  inputC = document.getElementById("p_Cat").value = myStore[Update].Category;
  inputD = document.getElementById("p_Desc").value = myStore[Update].Description;
  
  myStore.splice(Update , 1);
  
  localStorage.setItem("myStoreStorge" , JSON.stringify(myStore));

  displayProduct()
}


function searchProduct(Product = ``){
  var cartona = ``;

  for( var i = 0 ; i < myStore.length ; i++){

    if(myStore[i].name.toLowerCase().includes(Product.toLowerCase())){
      cartona += 
      `<tr>
        <td class="bg-warning font-weight-bold" style="width: 1%">${i+1}</td>
        <td>${myStore[i].name }</td>
        <td>${myStore[i].Category }</td>
        <td>${myStore[i].Description }</td>
        <td>${myStore[i].price }</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
      </tr>`
    }else if(myStore[i].Category.toLowerCase().includes(Product.toLowerCase())){
      cartona += 
      `<tr>
        <td class="bg-warning font-weight-bold" style="width: 1%">${i+1}</td>
        <td>${myStore[i].name }</td>
        <td>${myStore[i].Category }</td>
        <td>${myStore[i].Description }</td>
        <td>${myStore[i].price }</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
      </tr>`
    }
  }
    document.getElementById("tBody").innerHTML = cartona;
}


searchProduct()



































