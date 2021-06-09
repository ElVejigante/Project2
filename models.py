def create_classes(db):
    class Marvel(db.Model):
        __tablename__ = 'marvel_us_iitem'

        _id = db.Column(db.String, primary_key=True)
        TARGET = db.Column(db.String(200))
        REAL_NAME = db.Column(db.String(200))
        Zip_Code = db.Column(db.Integer)
        Latitude = db.Column(db.Float)
        Longitude = db.Column(db.Float)
        #birthplace = db.Column(db.String(200))
        #citizenship = db.Column(db.String(200))
        #lat = db.Column(db.Float)
        #lon = db.Column(db.Float)

        def __repr__(self):
            return '<Marvel %r>' % (self._id, self.TARGET, self.REAL_NAME, self.Latitude, self.Longitude, self.Zip_Code)
    return Marvel
