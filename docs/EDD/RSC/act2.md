# Actividad 2 - Control de versiones y modo iterativo

Yo crearía una rama para cada fase. Por ejemplo:

- branches
    - fase-1
    - fase-2
    - fase-3
    - fase-4
    - fase-5

Al realizar cada fase se haria una fusion del archivo de la rama principal con el de la fase actual.

> svn merge /repositorio/branches/fase-n /ruta/trunk  

> svn commit -m "Fusión de la fase-n a trunk"



