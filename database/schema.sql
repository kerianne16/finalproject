DROP DATABASE IF EXISTS bombshell_db;
CREATE DATABASE bombshell_db;
USE bombshell_db;

CREATE TABLE techs
(
    id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
  techName VARCHAR
    (225) NOT NULL,
  techLocation VARCHAR
    (225) NOT NULL,
  techContactPhone VARCHAR
    (15) NOT NULL,
  techContactEmail VARCHAR
    (225) NOT NULL,
  PRIMARY KEY
    (id)
);

    INSERT INTO techs
        (techName, techLocation,
        techContactPhone, techContactEmail)
    values
        ('Rose Zinno', 'Cranston', '2521565455', 'rosezinno@gmail.com');

    SELECT *
    FROM artists;
 