import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
from joblib import dump, load
from flask import Flask, request, jsonify
import os
import json
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from flask_cors import CORS




def evaluate_model(model, X_test, y_test, label):
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    report = classification_report(y_test, y_pred)
    print(f"Label: {label}")
    print(f"Accuracy: {accuracy}")
    print(f"Classification Report:\n{report}")
    print()
    return y_pred

def categorise_transaction(model, encoder, person, date, time, company, amount):
    date = pd.to_datetime(date).value
    time = pd.to_timedelta(time).value
    if company in encoder.classes_:
        company = encoder.transform([company])[0]
    else:
        company = 0  
    features = [[person, date, time, company, amount]]
    prediction = model.predict(features)[0]
    return prediction

data = pd.read_csv("learning_data.tsv", sep="\t")

data['date'] = pd.to_datetime(data['date']).astype('int64')
data['time'] = pd.to_timedelta(data['time']).astype('int64')

columns_to_encode = ['company', 'category', 'subcategory', 'wantorneed', 'index', 'suggestion']
encoders = {}
for column in columns_to_encode:
    encoder = LabelEncoder()
    data[column] = encoder.fit_transform(data[column])
    encoders[column] = encoder


X = data[['person', 'date', 'time', 'company', 'amount']]
y = data[['category', 'subcategory', 'wantorneed', 'index', 'suggestion']]


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


models = {}
for label in y.columns:
    model_file = f"{label}_model.joblib"
    if os.path.exists(model_file):
        model = load(model_file)
    else:
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train[label])
        dump(model, model_file)
    models[label] = model
    #evaluate_model(model, X_test, y_test[label], label)

#####################################################################################################
app1 = Flask(__name__)
cors = CORS(app1)

@app1.route('/', methods=['POST'])
def respond():
    data = request.form.getlist('message')
    response = []
    thedata = request.json['message']
 
    for i in range(0, len(thedata)):

        try:
            person = int(thedata[i][0])
            date = str(thedata[i][1])
            time = str(thedata[i][2])
            company = str(thedata[i][3])
            amount = int(thedata[i][4])

            my_list = []

            for label in y.columns:
                prediction = categorise_transaction(models[label], encoders['company'], person, date, time, company, amount)
                decoded_prediction = encoders[label].inverse_transform([prediction])[0]
                my_list.append(decoded_prediction)

            thelist = []
            thelist.append(person)
            thelist.append(date)
            thelist.append(time)
            thelist.append(my_list[0])
            thelist.append(my_list[1])
            thelist.append(company)
            thelist.append(amount)
            thelist.append(my_list[2])
            thelist.append(my_list[3])
            thelist.append(my_list[4])

            response.append(thelist)
        except:
            response.append("error")


    transactions = response

    columns = ['person', 'date', 'time', 'category', 'subcategory', 'company', 'amount', 'wantorneed', 'index', 'suggestion']
    data = pd.DataFrame(transactions, columns=columns)


    data['date'] = pd.to_datetime(data['date'])
    data['amount'] = -data['amount']
    data = data.groupby(['date', 'category', 'subcategory', 'wantorneed'])['amount'].sum().reset_index()

    monthly_data = data.groupby(['category', 'subcategory', 'wantorneed', pd.Grouper(key='date', freq='M')]).sum().reset_index()


    def arima_forecast(subcat_data):
        if len(subcat_data) <= 2:
            return np.mean(subcat_data['amount'])

        subcat_data = subcat_data.set_index('date')
        model = ARIMA(subcat_data['amount'], order=(1, 1, 1))
        model_fit = model.fit()
        forecast = model_fit.forecast(steps=1)
        return np.array(forecast)[0]

    avg_spend_per_month = []

    for category in monthly_data['category'].unique():
        for subcategory in monthly_data['subcategory'].unique():
            for wantorneed in monthly_data['wantorneed'].unique():
                subcat_data = monthly_data[(monthly_data['category'] == category) &
                                (monthly_data['subcategory'] == subcategory) &
                                (monthly_data['wantorneed'] == wantorneed)]
                if not subcat_data.empty:
                    forecast = arima_forecast(subcat_data)
                    #avg_spend_per_month[(category, subcategory, wantorneed)] = forecast
                    avg_spend_per_month.append([category,subcategory,wantorneed,forecast])


    combined = []

    for i in range (len(response)):
        for j in range(len(response[i])):
            if isinstance(response[i][j], (int, float)) and np.isnan(response[i][j]):
                response[i][j] = "null"

    combined = [response,avg_spend_per_month]	
    combined_headers = {"Access-Control-Allow-Origin" : "*"}




    return jsonify(combined), 200, combined_headers
#####################################################################################################

@app1.route('/miscategorisation', methods=['POST'])
def report():
   data2 = request.form.get('message')

   file_path = "Wrong_categorisation"

   if not os.path.isfile(file_path):
      with open(file_path, "a") as f:
         f.write(data2 + "\n")
         f.close()

   with open(file_path, "a") as f:
      f.write(data2 + "\n")
      f.close()

   return "Wrong Label Report Accepted"

######################################################################################################

if __name__ == '__main__':
    app1.run(host='0.0.0.0',port=5000)
##############################################################################
