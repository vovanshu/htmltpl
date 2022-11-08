$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['home', 'news', 'about', 'learn', 'contact'],
        sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C', '#f9C'],
        navigation: {
            'position': 'right',
            'tooltips': ['Головна', 'Новини', 'Про нас', 'Курси', 'Контакти']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });

});