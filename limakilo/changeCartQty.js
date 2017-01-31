var changeCartQty = function(camid, mode, min) {
    min = typeof(min !== undefined) ? min : 1;
    $.ajax({
        method: 'GET',
        url: '/api/cart/'+camid+'/'+mode,
    }).done(function(data) {
        qty = $('#cart-product'+camid+' .product-qty').text();
        (mode == 'add') ? qty++ : qty-- ;
        $('#cart-product'+camid+' .product-qty').text(qty);
        getMinimumPurchase(true);
        if( $('#checkout-product'+camid).length > 0) {
            $('#checkout-product'+camid+' .product-qty').text(qty);
            price = numeral().unformat($('#checkout-product'+camid+' #product-price').text());
            $('#checkout-product'+camid+' #product-subtotal').text(numeral(price * qty).format('0,000'));
        }
        if( $('#checkout-cartinfo').length > 0) {
            diskon = (data['data'].newDiskon != null) ? data['data'].newDiskon : 0;
            $('#cartinfo-total').text(numeral(data['data'].newTotal).format('0,000'));
            $('#total-payment').text(numeral(data['data'].newTotal + 15000 - diskon).format('0,000'));
        }
        if($('.card-image').length > 0) {
            $('#card-image'+camid+" .counter span").text(qty);
            if(qty > $('#card-image'+camid).attr("data-minVal")) {
                $('#card-image'+camid+" .card-adder .adder-minus").css('display', 'block');
            } else {
                $('#card-image'+camid+" .card-adder .adder-minus").css('display', 'none');
            }
        }
    }).fail(function(xhr, status, error){
        addProduct(camid, min);
    });
}