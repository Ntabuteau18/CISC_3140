sqlite3 lab4.db

.headers ON
.mode csv

CREATE TABLE DataTable (
Timestamp DATETIME,
Email TEXT,
Name TEXT,
Year INT,
Make TEXT,
Model TEXT,
Car_ID INT,
Judge_ID TEXT,
Judge_Name TEXT,
Racer_Turbo INT,
Racer_Supercharged INT,
Racer_Performance INT,
Racer_Horsepower INT,
Car_Overall INT,
Engine_Modifications INT,
Engine_Performance INT,
Engine_Chrome INT,
Engine_Detailing INT,
Engine_Cleanliness INT,
Body_Frame_Undercarriage INT,
Body_Frame_Suspension INT,
Body_Frame_Chrome INT,
Body_Frame_Detailing INT,
Body_Frame_Cleanliness INT,
Mods_Paint INT,
Mods_Body INT,
Mods_Wrap INT,
Mods_Rims INT,
Mods_Interior INT,
Mods_Other INT,
Mods_ICE INT,
Mods_Aftermarket INT,
Mods_WIP INT,
Mods_Overall INT
);

.import lab4.1/data.csv DataTable


CREATE TABLE OwnerInfo(
    Car_ID INT PRIMARY KEY,
    Name TEXT,
    Email TEXT
);

INSERT INTO OwnerInfo (Car_ID, Name, Email) SELECT Car_ID, Name, Email
FROM DataTable WHERE 1;

CREATE TABLE CarInfo(
Car_ID INT PRIMARY KEY,
Year INT,
Make TEXT,
Model TEXT
);

INSERT INTO CarInfo (Car_ID, Year, Make, Model) 
SELECT Car_ID, Year, Make, Model
FROM DataTable WHERE 1;


