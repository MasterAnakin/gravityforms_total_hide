//add this to gf HTML block
<script type="text/javascript">
    gform.addFilter( 'gform_product_total', function(total, formId){
        //only apply logic to form ID
        if(formId != 4)
            return total;
        if(total == 0)
 jQuery("#field_4_7").hide();
            return total;
    } );</script>
