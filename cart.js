var cartIcons = document.querySelectorAll(".product .Function .them a");

//Sự kiện click giỏ hàng ở sản phẩm
cartIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
        e.preventDefault();

        var productContainer = icon.closest(".product .product-bottom");

        var productName = productContainer.querySelector(".product-name").textContent;
        var productPrice = productContainer.querySelector(".product-price").textContent;

        //check getting info product
        console.log("Added");
        console.log(productName);
        console.log(productPrice);
    })
})

//Lấy thẻ bảng giỏ hàng và biểu tượng giỏ hàng
var cartTable = document.getElementById('cart-table');
var cartIcon = document.getElementById('cart-icon');

// Thêm sự kiện "click" cho biểu tượng giỏ hàng thanh toán
cartIcon.addEventListener('click', function (event) {
    // event.preventDefault();
    // window.open("cart.html");

    if (cartTable) {
        if (cartTable.style.display === 'none') {
            cartTable.style.display = 'block';
        } else {
            cartTable.style.display = 'none';
        }
    } else {
        console.error("cartTable is not defined or is null");
    }
});

// var tbody = document.querySelector('#cart')

// Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá

var tbody = document.querySelector('#cart-table tbody');
var totalPriceElement = document.querySelector('#total-price');

// Tạo một biến để lưu tổng giá
var totalPrice = 0;


var check = document.querySelector("#cart-table");

// check.addEventListener("click", function(e){
//     e.preventDefault();

//     alert("Checked!!");
// })

// Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
cartIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        event.preventDefault();


        var productContainer = icon.closest(".product .product-bottom");
        var productName = productContainer.querySelector('.product-name').innerText;
        var productPrice = parseFloat(productContainer.querySelector('.product-price').innerText.replace('đ', '').replace('.', ''));

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var existingProductRow = tbody.querySelector('tr[data-product-name="' + productName + '"]');
        if (existingProductRow) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm
            var quantityElement = existingProductRow.querySelector('.quantity');
            var quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào bảng giỏ hàng
            var newRow = document.createElement('tr');
            newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
            newRow.innerHTML = `
                <td>${productName}</td>
                <td class="quantity">1</td>
                <td>${productPrice}000đ</td>
            `;
            tbody.appendChild(newRow);
        }

        // Cập nhật tổng giá
        totalPrice += productPrice;
        totalPriceElement.textContent = 'TotalPrice ' + totalPrice + '000đ';
    });
}
)


// Lấy đối tượng button
var payButton = document.getElementById("pay-button");

// Gắn sự kiện click vào nút thanh toán
payButton.addEventListener("click", function() {
  // Lấy giá trị tổng giá
  var totalPriceElement = document.getElementById("total-price");
  var totalPrice = parseInt(totalPriceElement.innerText);

  // Thực hiện thanh toán
  // TODO: Thêm mã JavaScript để thực hiện thanh toán sản phẩm

  // Hiển thị thông báo thành công
  alert("Successfull!"); 
});




