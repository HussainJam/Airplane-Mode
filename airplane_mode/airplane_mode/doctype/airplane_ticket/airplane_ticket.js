frappe.ui.form.on('Airplane Ticket', {
    refresh: function(frm) {
        // Apply color mapping for Status field
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
    }
});
