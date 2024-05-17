import argparse
import io
import os
from PIL import Image
import torch
from flask import Flask, render_template, request, jsonify
from keras.preprocessing import image
from keras.applications.imagenet_utils import preprocess_input
import numpy as np
from tensorflow.keras.models import load_model
from flask_cors import CORS
import base64
import traceback

app = Flask(__name__)
CORS(app)

# Define model as a global variable
model = None

def load_yolov5_model():
    global model
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
    model.eval()

@app.route("/", methods=["POST"])
def predict():
    try:
        if "file" not in request.files:
            return jsonify({"error": "No file provided"}), 400
            
        file = request.files["file"]
        if not file:
            return jsonify({"error": "File is empty"}), 400
            
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes))
        results = model(img)  # inference
        results.render()  # updates results.ims with boxes and labels
            
        # Save the image with detection labels
        labeled_image = results.ims[0]  # Get the first image with labels
        labeled_image_path = "static/images/screenshot.jpg"
        Image.fromarray(labeled_image).save(labeled_image_path, "JPEG")
        
        img2 = image.load_img(labeled_image_path, target_size=(224, 224))
        x = image.img_to_array(img2)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        model2 = load_model('model.h1')
        preds = model2.predict(x)
        result = preds[0][0]
        
        # Encode image with detection labels to base64
        with open(labeled_image_path, "rb") as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')

        # Format percentage to two decimal places
        damaged_percentage = "{:.4f}".format(preds[0][1] * 100)
        
        response = {
            "image": "data:image/jpeg;base64," + encoded_image,
            "damaged_percentage": damaged_percentage
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        traceback.print_exc()  # Print detailed error traceback
        return jsonify({"error": str(e)}), 500

@app.route('/bookappt')
def bookappt():
    return render_template('bookappt.html')

@app.route('/regform')
def regform():
    return render_template('regform.html')

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()

    load_yolov5_model()  # Load the model before starting the server

    app.run(host="0.0.0.0", port=args.port)
