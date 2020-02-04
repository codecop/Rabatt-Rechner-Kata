@echo Build the package for participants.

cd Java
rmdir /S /Q lib
rem see http://stackoverflow.com/questions/7908090/downloading-all-maven-dependencies-to-a-directory-not-in-repository
call mvn dependency:copy-dependencies -DoutputDirectory=lib -Dmdep.useRepositoryLayout=true
call mvn dependency:copy-dependencies -DoutputDirectory=lib -Dmdep.useRepositoryLayout=true -Dclassifier=sources
call mvn eclipse:clean
call mvn eclipse:eclipse
cd ..
call ant rewrite

cd JavaScript
call npm install
cd ..

call ant zip
rem call ant clean
