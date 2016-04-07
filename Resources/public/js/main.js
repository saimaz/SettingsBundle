/*
 * This file is part of the ONGR package.
 *
 * (c) NFQ Technologies UAB <info@nfq.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$(document).ready(function(){

    $('#addSettingProfiles').multiselect();
    $('#duplicateSettingProfiles').multiselect();

    $('.boolean').on('click', function(){
        // ----- implement ajax request to change the setting
        if(!$(this).hasClass('btn-primary')) {
            $(this).toggleClass('btn-primary');
            $(this).siblings().toggleClass('btn-primary');
        }
    });

    $('.setting-type').on('click', function(){
        if(!$(this).hasClass('btn-primary')) {
            $(this).toggleClass('btn-primary');
            $(this).siblings().removeClass('btn-primary');
            var $relElement = $('.'+$(this).attr('rel'));
            $relElement.toggleClass('hidden');
            $relElement.siblings().addClass('hidden');
        }
    });

    $('.setting-type-boolean').on('click', function(){
        if(!$(this).hasClass('btn-primary')) {
            $(this).toggleClass('btn-primary');
            $(this).siblings('label').removeClass('btn-primary');
            if($(this).attr('rel') == 'true') {
                $(this).siblings('input').prop('checked', true);
            } else {
                $(this).siblings('input').prop('checked', false);
            }
        }
    });

    $('.settings-array-add').on('click', function(event){
        event.preventDefault();
        var key = parseInt($('#addSettingArray').attr('rel'))+1;
        $('#addSettingArray').attr('rel', key);
        var render = '<li>'
            +'<div class="input-group">'
            +'<input type="text" class="form-control" name="setting-array_'+key+'">'
            +'<span class="input-group-btn">'
            +'<button class="btn btn-danger" type="button" onclick="addArrayRemoveInput(this)"><i class="glyphicon glyphicon-remove"></i></button>'
            +'</span>'
            +'</div>'
            +'</li>';
        $('#addSettingArray').append(render);
    });
});

function addArrayRemoveInput(el){
    jQuery(el).parent().parent().parent().empty();
}