def generate_receipt():
    items = []
    total_amount = 0

    print("Enter the items and their prices. Type 'done' when you are finished.")

    while True:
        item_name = input("Enter the name of the item (or 'done' to finish): ")
        if item_name.lower() == 'done':
            break
        item_price = float(input(f"Enter the price of {item_name} in Naira: "))
        items.append((item_name, item_price))
        total_amount += item_price

    print("\nReceipt:")
    print("=================================")
    for item_name, item_price in items:
        print(f"{item_name}: ₦{item_price:.2f}")
    print("=================================")
    print(f"Total Amount: ₦{total_amount:.2f}")

# Run the function to generate the receipt
generate_receipt()