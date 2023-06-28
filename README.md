# Kontaktide infosüsteemi tarkvara

See infosüsteem koosneb Java backendist, React frontendist ja PostgreSQL andmebaasist

## Eeldused

Enne rakenduse käivitamist veenduge, et teil oleksid järgmised tarkvarad installitud:

- Java Development Kit (JDK 17)
- Node.js (frontendi arendamiseks)
- Eelistatud veebibrauser
- PostgreSQL (Andmebaasi haldamiseks)

## Andmebaasi seadistus

1. Veendu et PostgreSQL on installitud ja töötab
2. Loo rakenduse jaoks uus andmebaas
3. Impordi andmebaasi mudel kasutades faili: database-structure.sql

## Backend seadistus

1. Ava terminal või command prompt
2. Liigu kausta kus asub JAR fail ("smit_kodune\backend\target\smit_kodune-0.0.1-SNAPSHOT.jar")
3. Käivita backend, käivitades käsu: java -jar smit_kodune-0.0.1-SNAPSHOT.jar

## Frontend seadistus

1. Ava terminal või command prompt
2. Liigu kausta kus asub frontend rakendus ("smit_kodune\frontend")
3. Paigalda vajalikud dependencies, käivitades käsu: npm install
4. Käivita frontend kasutades käsku: npx serve build
- See käivitab veebiserveri ja annab teile URL-i, mille kaudu pääsete frontendi
5. Ava veebibrauser ja minge rakendusele antud URL-i kaudu

## Lisaseadistamine

1. Muuda vajadusel andmebaasi ühenduse sätteid ("smit_kodune\backend\target\application.properties")
- username, password, port

## Ressursid

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

