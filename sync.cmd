SET TARGET=C:\TEMP

ECHO OFF
ECHO Syncing Files to "%TARGET%" - copy to template project after

IF NOT EXIST %TARGET%\ GOTO :Create
rmdir %TARGET% /s

:Create
mkdir %TARGET%

PAUSE

copy *.* %TARGET%\

xcopy /S /I /E "src" "%TARGET%\src" 
xcopy /S /I /E "lib" "%TARGET%\lib"


PAUSE