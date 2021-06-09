#conda create -n marvel_iitem_env python=3.6
#source env/bin/activate

#pip install pandas
#pip install psycopg2-binary
#pip install flask
#pip install flask-sqlalchemy
#pip install Flask-Migrate
#pip install gunicorn

## To activate this environment, use
#$ conda activate marvel_iitem_env
## To deactivate an active environment, use
#$   conda deactivate


##python initdb.py
###########  initdb.py  ###############
##from marvel_iitem.app import db
###db.drop_all()
##db.create_all()
##########################


#########################################
import pandas as pd
import psycopg2
import os
import json
from flask_pymongo import PyMongo
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine

from flask import Flask, render_template, jsonify, request, redirect
from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from models import create_classes

#############################   Database Setup  #############################
#Not Sure this portion is needed#

## Create engine to hawaii.sqlite
engine = create_engine('postgresql://TEST:password@localhost:5432/Marvel_US_ITTEM')

## reflect an existing database into a new model
Base = automap_base()

## To reflect the returned tables 
Base.prepare(engine, reflect=True)

## View all of the classes that automap found
Base.classes.keys()

## Create session 
session = Session(bind=engine)




###############
# Flask Setup
###############


########################################################
app = Flask(__name__)
########################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://TEST:password@localhost:5432/Marvel_US_ITTEM'

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
#migrate = Migrate(app, db)

Marvel = create_classes(db)


### IF using a shell cmd ###
##$ export FLASK_APP=app.py
##$ flask run


########################################################
# create route that renders index.html template, 
# If index in template folder, replace app variable with: app = Flask(__name__, template_folder='templates')

#@app.route("/")
##def home():
#    return render_template("index.html")


@app.route("/")
def welcome():
    """List all available api routes tests."""
    return (
        f"Available Routes:<br/>"
        f"/TEST<br/>"
        f"/MarvelData<br/>"
        f"/MarvelRead<br/>"
        f"/MarvelDict<br/>"
        )
    
# ----------------------------------------- #

    
@app.route("/TEST")
def hello():
    return{"Testing":"Test"}

# ----------------------------------------- #

    
@app.route("/MarvelData")
def MarvelData():

    session = Session(engine)
    results = session.query(Marvel._id, Marvel.TARGET, Marvel.REAL_NAME, Marvel.Latitude, Marvel.Longitude, Marvel.Zip_Code).all()
    session.close()
    return jsonify(results)
    


# ----------------------------------------- #

@app.route('/MarvelRead', methods=['POST', 'GET'])
def MarvelRead():
    session = Session(engine)    
    ##  results = session.query(Marvel._id, Marvel.TARGET, Marvel.REAL_NAME, Marvel.Latitude, Marvel.Longitude, Marvel.Zip_Code).all()
    session.close()
    if request.method == 'GET':
        marvels = Marvel.query.all()
        results = [
            {
                "Hero": marvel.TARGET,
                "Real Name": marvel.REAL_NAME,
                "Zip Code": marvel.Zip_Code
            } for marvel in marvels]
    
        return jsonify({"count": len(results), "marvels": results})
    

# ----------------------------------------- #

@app.route('/MarvelDict')
def MarvelDict():
    session = Session(engine)    
    results = session.query(Marvel.TARGET, Marvel.REAL_NAME, Marvel.Latitude, Marvel.Longitude, Marvel.Zip_Code).all()
    session.close()
    # Create a dictionary from the row data and append to a list of all_passengers
    all_Heroes = []
    for TARGET, REAL_NAME, Latitude, Longitude, Zip_Code in results:
        Marvel_dict = {}
        Marvel_dict["Hero"] = TARGET
        Marvel_dict["Real Name"] = REAL_NAME
        Marvel_dict["Latitude"] = Latitude
        Marvel_dict["Longitude"] = Longitude
        Marvel_dict["Zip Code"] = Zip_Code
        all_Heroes.append(Marvel_dict)
    #Marvel._id, Marvel.TARGET, Marvel.REAL_NAME, Marvel.Latitude, Marvel.Longitude, Marvel.Zip_Code
    return jsonify(all_Heroes)
    #session.close()

####################################################
if __name__ == "__main__":
    app.run()
