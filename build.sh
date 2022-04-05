#!/bin/sh
echo Build the package for participants.

cd Java
rm -rf lib
# see http://stackoverflow.com/questions/7908090/downloading-all-maven-dependencies-to-a-directory-not-in-repository
mvn dependency:copy-dependencies -DoutputDirectory=lib -Dmdep.useRepositoryLayout=true
mvn dependency:copy-dependencies -DoutputDirectory=lib -Dmdep.useRepositoryLayout=true -Dclassifier=sources
mvn eclipse:clean
mvn eclipse:eclipse
cd ..
ant rewrite

cd JavaScript
npm install
cd ..

cd TypeScript
npm install
cd ..

ant zip
# ant clean
