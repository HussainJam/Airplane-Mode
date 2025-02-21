frappe.ui.form.on('Airplane Ticket', {
    refresh: function(frm) {
        let status_colors = {
            "Booked": "gray",
            "Checked-In": "purple",
            "Boarded": "green"
        };

        if (frm.doc.status) {
            let color = status_colors[frm.doc.status] || "gray";
            frm.set_df_property("status", "bold", 1);
            frm.set_df_property("status", "label", `<span style="color: ${color}; font-weight: bold;">Ticket Status</span>`);
        }

        calculate_total_amount(frm);
    },
    flight_price: function(frm) {
        calculate_total_amount(frm);
    },
    add_ons_add: function(frm) {
        calculate_total_amount(frm);
    },
    add_ons_remove: function(frm) {
        calculate_total_amount(frm);
    }
});

function calculate_total_amount(frm) {
    let total_amount = 0;
    
    let flight_price = frm.doc.flight_price || 0; // Use 0 if not set
    total_amount += flight_price;

    if (frm.doc.add_ons) {
        frm.doc.add_ons.forEach(function(add_on) {
            total_amount += add_on.amount || 0; // Use 0 if not set
        });
    }

    frm.set_value('total_amount', total_amount);
}

function remove_duplicate_add_ons(frm) {
    if (frm.doc.add_ons) {
        const unique_add_ons = {};
        
        frm.doc.add_ons.forEach((add_on) => {
            // Assuming `item` is the field that identifies the add-on type
            if (!unique_add_ons[add_on.item]) {
                unique_add_ons[add_on.item] = add_on; // Keep the first occurrence
            }
        });

        // Update the child table with unique add-ons
        frm.set_value('add_ons', Object.values(unique_add_ons));
    }
}