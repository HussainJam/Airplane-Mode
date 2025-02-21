# Copyright (c) 2025, Jamal and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class AirplaneTicket(Document):
	pass

# import frappe
# import random

# def before_insert(doc, method):
#     # Automatically assign a seat
#     doc.seat = assign_seat()

# def assign_seat():
#     # Generate a random integer between 1 and 100 (or whatever range you prefer)
#     random_integer = random.randint(1, 100)

#     # Generate a random capital alphabet from A to E
#     random_letter = random.choice(['A', 'B', 'C', 'D', 'E'])

#     # Combine them into the required format
#     return f"{random_integer}{random_letter}"

# def on_submit(doc, method):
#     # Set the status of the associated flight to 'Completed' when the ticket is submitted
#     flight_doc = frappe.get_doc('Airplane Flight', doc.flight)  # Assuming `flight` is the link field in Airplane Ticket
#     flight_doc.status = "Completed"
#     flight_doc.save()
