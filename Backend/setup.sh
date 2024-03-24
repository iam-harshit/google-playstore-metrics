# Setup file to upload data to MongoDB 
mongo google-playstore-metrics --eval "db.dropDatabase()" 
mongoimport -d google-playstore-metrics -c metrics --file data/export_google_playstore_metrics.json