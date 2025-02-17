frappe.listview_settings['Airplane Ticket'] = {
    add_fields: ["status"],
    get_indicator: function(doc) {
        let status_colors = {
            "Booked": "gray",
            "Checked-In": "purple",
            "Boarded": "green"
        };
        return [__(doc.status), status_colors[doc.status] || "gray", "status,=," + doc.status];
    }
};
