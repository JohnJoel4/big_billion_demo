from flask import Flask, render_template
import os

# Initialize the Flask application
app = Flask(__name__)

# Define the route for your main page
@app.route('/')
def home():
    """Serves the main index.html page."""
    # render_template looks for files in the 'templates' folder
    return render_template('index.html')

# Health check endpoint for Azure
@app.route('/health')
def health():
    """Health check endpoint for Azure monitoring."""
    return {'status': 'healthy'}, 200

# This block allows you to run the app directly using "python app.py"
if __name__ == '__main__':
    # Get port from environment variable or default to 5000
    port = int(os.environ.get('PORT', 5000))
    # Use debug=False for production
    debug = os.environ.get('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)