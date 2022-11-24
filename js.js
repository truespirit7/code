var link = $('.item');
        console.log(window.location.href);
        console.log(link);
        link.each(function(elem) {
            console.log($( this ).attr('href'));
            console.log(window.location.pathname);
            if($( this ).attr('href') == window.location.pathname){
                $( this ).removeClass('item');
                $( this ).addClass('item active');
        }
        });