import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
        <div class="list_item" tabindex="0">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="Gambar Restoran ${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : ${data['rating']}
                </p>
                <h3 class="list_item_title"><a href="#">${data['name']}</a></h3>
                <div class="list_item_desc" tabindex="0">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#list-food').innerHTML = dataList;  
});


document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("nav-list-block");
});
