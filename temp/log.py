import requests

base_url = "http://localhost:5000"

def test_add_food_item():
    url = f"{base_url}/api/food/add"
    form_data = {
        "name": "Orange Juice",
        "description": "Freshly squeezed orange juice",
        "price": 50,
        "category": "Beverages",
    }
    files = {"image": ("orange_juice.jpg", open("orange_juice.jpg", "rb"), "image/jpeg")}
    response = requests.post(url, data=form_data, files=files)
    return response.json()

def main():
    response = test_add_food_item()
    print(response)

if __name__ == "__main__":
    main()
