# Actividad 1 - Desarrollo colaborativo

Yo en este caso utilizaria subversion ya que, con este, podemos dividir el proyecto en diferentes ramas, asi cada uno tendría su rama para trabajar en sus funcionalidades, pero tendrian otra con el codigo fuente sobre el que trabajar. 
Para hacerlo, tendrían que seguir los siguientes pasos:
1. Registrarse en SourceForge y crearse un repositorio
2. Instalar subversion
> sudo apt install subversion
3. Conectarse al repositorio (cada  vez que quieran entrar)
> svn checkout --username=usuario Repositorio Directorio 
4. Añadir carpetas
> mkdir trunk branches tags  

> svn add trunk branches tags  

5. Añadir contenido al proyecto
> svn add trunk/fichero -> Añadir a la rama principal  

> svn add branches/*rama*/fichero -> Añadir el fichero a otra rama

> svn ci -m "*Mensaje*" -> Subir los cambios al repositorio

6. Actualizar antes de trabajar en el repositorio
> svn up -> Para tener la última version del repositorio