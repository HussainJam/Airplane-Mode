import frappe
from frappe.model.document import Document

class FlightPassenger(Document):
    def before_save(self):
        # Ensure Full Name is automatically set before saving
        self.full_name = f"{self.first_name} {self.last_name}".strip()

        # If last name is missing, it still works
        if not self.last_name:
            self.full_name = self.first_name
