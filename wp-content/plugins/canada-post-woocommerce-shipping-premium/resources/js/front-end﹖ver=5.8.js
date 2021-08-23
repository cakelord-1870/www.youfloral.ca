jQuery(document).ready( function(){
	/**
	 * Handle Show Hide of Deliver to PO Office
	 */
	check_for_po_display_eligibility();
	jQuery("form.checkout").change(function(){
		check_for_po_display_eligibility();
	})

	function check_for_po_display_eligibility(){
		let eligible_shipping_methods = ["wf_shipping_canada_post:DOM.XP", "wf_shipping_canada_post:DOM.EP"]
		let selected_shipping_method = jQuery("input[class='shipping_method']:checked").val();
		if( jQuery.inArray( selected_shipping_method, eligible_shipping_methods) != -1 ) {
			show_hide_deliver_to_po_option_checkout();
		}
		else{
			show_hide_deliver_to_po_option_checkout(false);
		}
	}

	function show_hide_deliver_to_po_option_checkout( show = true ){
		if( show )
			jQuery("#ph_canada_post_deliver_to_po_field").show()
		else
			jQuery("#ph_canada_post_deliver_to_po_field").hide()
	}
	/** End of Show Hide option of Deliver to PO. */
})