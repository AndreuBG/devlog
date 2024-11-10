# Espacio de nombres
>Revisa el fitxer AndroidManifest.xml i intenta identificar algun espai de noms.  
  
Los espacios de nombre de este archivo se definen con `` <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.example.myapp">`` en el apartado de ``xmlns:android=``. Utiliza ese enlace para definir los espacios de nombre.

Las etiquetas ``<uses-permision>``, ``<application>``, ``<activity>``, ``<action>``, ``<category>`` utilizan espacios de nombre:  
- ``android:name`` para establecer una clase  
- ``android:allowBackup`` para decir si permite las copias de seguridad  
- ``android:icon`` cual es el icono  
- ``android:label`` define el nombre de la app en el icono  
- ``android:roundIcon`` establece el icono pero redondeado  
- ``android:supportsRtl`` para ver si soporta rtl  
- ``android:theme`` para establecer el tema  