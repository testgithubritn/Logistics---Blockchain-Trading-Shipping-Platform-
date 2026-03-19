from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# ---------------------------------------------------------------------------
# In-memory stores (replace with a real database in production)
# ---------------------------------------------------------------------------
users = {}          # { email: { name, password, company } }
contacts = []       # list of contact submissions
demos = []          # list of demo requests
shipments = {}      # mock tracking data

# Seed some mock tracking data
mock_tracking = {
    "LC123456": {
        "id": "LC123456",
        "status": "In Transit",
        "origin": "Shanghai, China",
        "destination": "Los Angeles, USA",
        "eta": "2026-03-25",
        "current_location": "Pacific Ocean",
        "progress": 60
    },
    "LC789012": {
        "id": "LC789012",
        "status": "Delivered",
        "origin": "Rotterdam, Netherlands",
        "destination": "Mumbai, India",
        "eta": "2026-03-15",
        "current_location": "Mumbai Port",
        "progress": 100
    }
}

# ---------------------------------------------------------------------------
# Page Routes
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    """Serve the main LogiChain OS page."""
    return render_template("index.html")


# ---------------------------------------------------------------------------
# API Routes
# ---------------------------------------------------------------------------

@app.route("/api/login", methods=["POST"])
def api_login():
    """Handle user login."""
    data = request.get_json()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"success": False, "message": "Email and password are required."}), 400

    user = users.get(email)
    if user and user["password"] == password:
        return jsonify({"success": True, "message": f"Welcome back, {user['name']}!"})

    # For demo: accept any credentials if user doesn't exist yet
    return jsonify({"success": True, "message": "Login successful (demo mode)."})


@app.route("/api/signup", methods=["POST"])
def api_signup():
    """Handle new user registration."""
    data = request.get_json()
    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")
    company = data.get("company", "").strip()

    if not name or not email or not password:
        return jsonify({"success": False, "message": "Name, email and password are required."}), 400

    if email in users:
        return jsonify({"success": False, "message": "An account with this email already exists."}), 409

    users[email] = {"name": name, "password": password, "company": company}
    print(f"[SIGNUP] New user registered: {name} <{email}> | Company: {company}")
    return jsonify({"success": True, "message": f"Account created for {name}. Welcome to LogiChain OS!"})


@app.route("/api/track", methods=["POST"])
def api_track():
    """Handle shipment tracking requests."""
    data = request.get_json()
    tracking_id = data.get("tracking_id", "").strip().upper()

    if not tracking_id:
        return jsonify({"success": False, "message": "Tracking ID is required."}), 400

    print(f"[TRACK] Shipment lookup: {tracking_id}")

    # Check mock data first
    if tracking_id in mock_tracking:
        return jsonify({"success": True, "data": mock_tracking[tracking_id]})

    # Return a generic in-transit response for any other ID
    return jsonify({
        "success": True,
        "data": {
            "id": tracking_id,
            "status": "Processing",
            "origin": "Pending",
            "destination": "Pending",
            "eta": "TBD",
            "current_location": "Warehouse",
            "progress": 10
        }
    })


@app.route("/api/contact", methods=["POST"])
def api_contact():
    """Handle contact/sales enquiry form."""
    data = request.get_json()
    required = ["name", "email", "phone", "company", "message"]
    for field in required:
        if not data.get(field, "").strip():
            return jsonify({"success": False, "message": f"'{field}' is required."}), 400

    entry = {
        "name": data["name"].strip(),
        "email": data["email"].strip(),
        "phone": data["phone"].strip(),
        "company": data["company"].strip(),
        "message": data["message"].strip()
    }
    contacts.append(entry)
    print(f"[CONTACT] New enquiry from {entry['name']} <{entry['email']}> @ {entry['company']}")
    return jsonify({"success": True, "message": "Thank you! Our sales team will be in touch shortly."})


@app.route("/api/demo", methods=["POST"])
def api_demo():
    """Handle demo scheduling form."""
    data = request.get_json()
    required = ["name", "email", "phone", "date", "time", "company"]
    for field in required:
        if not data.get(field, "").strip():
            return jsonify({"success": False, "message": f"'{field}' is required."}), 400

    entry = {
        "name": data["name"].strip(),
        "email": data["email"].strip(),
        "phone": data["phone"].strip(),
        "date": data["date"].strip(),
        "time": data["time"].strip(),
        "company": data["company"].strip()
    }
    demos.append(entry)
    print(f"[DEMO] Scheduled for {entry['name']} on {entry['date']} at {entry['time']}")
    return jsonify({
        "success": True,
        "message": f"Demo scheduled for {entry['date']} at {entry['time']}. Confirmation sent to {entry['email']}."
    })


@app.route("/api/payment", methods=["POST"])
def api_payment():
    """Handle payment submissions."""
    import uuid, datetime
    data = request.get_json()
    service = data.get("service", "ocean")
    amount  = float(data.get("amount", 0))
    method  = data.get("method", "btc")

    if amount <= 0:
        return jsonify({"success": False, "message": "Invalid amount."}), 400

    discount = 0 if method == "card" else round(amount * 0.15, 2)
    total    = amount - discount
    tx_id    = "LC" + uuid.uuid4().hex[:9].upper() + "CHAIN"

    print(f"[PAYMENT] {method.upper()} | {service} | ${amount} → ${total} | TX:{tx_id}")
    return jsonify({
        "success": True,
        "tx_id": tx_id,
        "amount": amount,
        "discount": discount,
        "total": total,
        "method": method,
        "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
    })


@app.route("/api/convert", methods=["POST"])
def api_convert():
    """Handle crypto currency conversion."""
    data = request.get_json()
    usd_amount = data.get("usd_amount", 0)
    crypto = data.get("crypto", "BTC").upper()

    # Mock live rates
    rates = {
        "BTC": 0.000023, "ETH": 0.00032, "LTC": 0.0098,
        "ADA": 1.25, "USDC": 1.00, "DOT": 0.12,
        "XRP": 2.15, "DOGE": 15.8, "SOL": 0.035, "MATIC": 1.85
    }

    if crypto not in rates:
        return jsonify({"success": False, "message": "Unsupported cryptocurrency."}), 400

    try:
        usd_amount = float(usd_amount)
    except (TypeError, ValueError):
        return jsonify({"success": False, "message": "Invalid amount."}), 400

    converted = round(usd_amount * rates[crypto], 8)
    return jsonify({
        "success": True,
        "usd": usd_amount,
        "crypto": crypto,
        "converted": converted,
        "rate": rates[crypto]
    })


# ---------------------------------------------------------------------------
# Run
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True, port=5000)
