# **REACT**

React es una librería Javascript focalizada en el desarrollo de interfaces de usuario, este nos permite organizar nuestra aplicación en torno a componentes, esto hace que nuestro código sea muy ordenado, mantenible y por sobre todas las cosas: reutilizable.por ese motivo React para EMI es un excelente aliado porque puedes desarrollar todo tipo de aplicaciones web, SPA (Single Page Application). Esto se logra mediante el complejo ecosistema de módulos y herramientas que se han ido creando para obtener todo el potencial de esta librería y nos permite un desarrollo flexible. Cuenta además con un muy amplio respaldo en su usabilidad, debido a que cuenta con Facebook como su principal impulsor, pero además nombres como BBC, Airbnb, Netflix, Dropbox y un largo etcétera hacen uso intensivo de ReactJS.

Por lo tanto, el escogido fue React porque representa una base sólida sobre la cual se puede construir casi cualquier cosa con Javascript. Además facilita mucho el desarrollo, ya que nos ofrece muchas cosas ya listas, en las que no se necesita invertir mucho tiempo de trabajo.

## **Características**

- Promueve la construcción de interfaces modulares.
- Favorece la reutilización de componentes.
- Se pueden usar las características modernas de JavaScript.
- Velocidad de renderizado.
- El flujo de datos es unidireccional (Componentes padres e hijos).
- Tiene una gran comunidad de desarrolladores.

## **Interoperabilidad**

React provee válvulas de escape para trabajar con modelos mutables, y también trabaja con otras bibliotecas de interfaz de usuario. Puedes envolver una interfaz de usuario imperativa en un componente declarativo, y viceversa. Estos temas son cruciales para la adopción gradual.

## **Objetivo de React**

El objetivo principal de React es minimizar los errores que ocurren cuando los desarrolladores construyen interfaces de usuario. Esto lo hace mediante el uso de componentes, piezas de código lógicas y auto-contenidas que describen una parte de la interfaz del usuario. Estos componentes se pueden juntar para crear una interfaz de usuario completa, y React abstrae la mayor parte del trabajo de renderizado, permitiéndote enfocarse en el diseño de la interfaz. Por lo tanto, sirve para desarrollar aplicaciones web de una manera más ordenada y con menos código que si usas Javascript puro o librerías como jQuery centradas en la manipulación del DOM. Permite que las vistas se asocien con los datos, de modo que si cambian los datos, también cambian las vistas.

Por otra parte, al desarrollar en base a componentes reutilizables, permite que puedas usar el desarrollo de un proyecto en otro.Hay componentes desde simples botones, sliders, tooltips, etc. Gracias a que los componentes son capaces de trabajar de manera independiente y que pueden encapsular funcionalidades, puede conllevar a muchas interacciones diferentes entre los mismos componentes.

## **Arquitectura**

![Arquitectura.](media/arquitectura.png "Arquitectura")

La característica clave de la arquitectura de React es la composición de componentes. Los componentes desarrollados deben trabajar en conjunto. Por ejemplo, debería ser posible introducir algún estado local en un componente sin cambiar ninguno de los componentes que lo usen. Igualmente, debería ser posible añadir código de inicialización y destrucción a cualquier componente cuando sea necesario.

Los componentes son a menudo descritos como “solo funciones”, pero desde otro punto de vista necesitan ser más que eso para ser útiles. En React, los componentes describen cualquier comportamiento componible, y esto incluye el renderizado, el ciclo de vida y el estado. Algunas bibliotecas externas como Relay aumentan los componentes con otras responsabilidades tales como describir las dependencias de datos. 

Incluso cuando los componentes son descritos como funciones, al usar React no se llaman directamente. Cada componente retorna una descripción de lo que necesita ser renderizado, y dicha descripción puede incluir componentes escritos por el usuario como <LikeButton> y componentes específicos de la plataforma como <div>. Corresponde a React “desenrollar” <LikeButton> en algún momento en el futuro y aplicar recursivamente los cambios al árbol de interfaz de usuario de acuerdo a los resultados de renderizar los componentes.

Esta es una distinción sutil pero poderosa. Dado que no llamas la función del componente, pero dejas que React la llame, esto significa que React tiene el poder de retrasar esta llamada si es necesario. En su implementación actual React recorre el árbol recursivamente y llama a las funciones de renderizado del árbol completamente actualizado en un único tick. Sin embargo, en el futuro podría empezar a retrasar algunas actualizaciones para evitar la eliminación de cuadros.

React no es una biblioteca genérica de procesamiento de datos. Es una biblioteca para construir interfaces de usuario. Creemos que está posicionada de forma única en una aplicación para conocer cuales computaciones son relevantes inmediatamente y cuáles no. Si algo se encuentra fuera de la pantalla, podemos retrasar cualquier lógica relacionada. Si los datos están llegando más rápido que la tasa de cuadros por segundos, podemos fusionar y agrupar por lotes las actualizaciones. Podemos priorizar el trabajo proveniente de las interacciones del usuario (tales como las animaciones causadas por presionar un botón) por encima del trabajo en segundo plano menos importante (tal como renderizar nuevo contenido descargado recientemente de la red) para evitar la pérdida de cuadros.

Todo esto se logra a través de la arquitectura de react, además de todo lo anterior, uno de los objetivos clave para React es que la cantidad del código de usuario que se ejecute antes de regresar a React sea mínimo. Esto asegura que React retenga la capacidad de planificar y dividir el trabajo en trozos de acuerdo a lo que conoce acerca de la interfaz de usuario.

## **Caracteristicas**

- Composición de componentes.
- Desarrollo Declarativo Vs Imperativo.
- Flujo de datos unidireccional.
- Performance gracias al DOM Virtual.
- Isomorfismo.
- Elementos y JSX.
- Componentes con y sin estado.
- Ciclo de vida de los componentes.
- Ideal para aplicaciones de alta demanda
- Permite el desarrollo de aplicaciones móviles

## **Programacion por capas**

Un ejemplo básico de la programación por capas consiste en separar la capa de datos de la capa de presentación al usuario. La ventaja principal de este estilo es que el desarrollo se puede llevar a cabo en varios niveles y, en caso de que sobrevenga algún cambio, sólo se ataca al nivel requerido sin tener que revisar entre código mezclado.

La capa de presentación es la que ve el usuario (también se la denomina "capa de usuario"), presenta el sistema al usuario, le comunica la información y captura la información del usuario en un mínimo proceso (realiza un filtrado previo para comprobar que no hay errores de formato). Así que, teniendo en cuenta todo lo anterior, todas las capas se colocan de forma horizontal, de tal forma que cada capa solo puede comunicarse con la capa que está inmediatamente por debajo, por lo que, si una capa quiere comunicarse con otras que están mucho más abajo, tendrán que hacerlo mediante la capa que está inmediatamente por debajo. Por ejemplo, si la capa de presentación requiere consultar la base de datos, tendrá que solicitar la información a la capa de negocio, la cual, a su vez, la solicitará a la capa de persistencia, la que a su vez, la consultará a la base de datos, finalmente, la respuesta retornará en el sentido inverso hasta llegar la capa de presentación.

## **Programacion orientada a componentes**

![Componentes.](media/componentes.png "Componentes")

A continuación presentarán los modelos, conceptos y mecanismos fundamentales sobre los que se apoya actualmente el desarrollo de la aplicación EMI en el proyecto de Business Accelerator. En primer lugar, las arquitecturas software y los marcos de trabajo intentan ofrecer soluciones de diseño desde el punto de vista estructural de las aplicaciones, y de las relaciones entre sus componentes. A otro nivel se encuentra la programación orientada a componentes, un paradigma que propugna la construcción de componentes reutilizables en entornos abiertos y distribuidos. Basados en ellos, los modelos y plataformas de componentes proporcionan los mecanismos adecuados para tratar la complejidad de los problemas que aparecen en los sistemas abiertos y distribuidos. Finalmente, se describen algunas dificultades que se encontraron a lo largo de la planificación para construir el EMI desde cero, y los retos a los que se pretende alcanzar. 

En este proyecto se utiliza la programación orientada a componentes, la cual es una extensión natural de la programación orientada a objetos (POO) en los sistemas de aplicación abiertos, que tiene como propósito contrarrestar las limitaciones de esta, como la falta de una unidad concreta de composición independiente en las aplicaciones, y la definición de interfaces a bajo nivel, que dificultan la reutilización comercial de objetos.

Una definición más simple puede ser: Un componente es un objeto escrito de acuerdo a unas especificaciones. No importa qué especificación sea ésta, siempre y cuando el objeto se adhiera a la especificación. Solo cumpliendo correctamente con esa especificación es que el objeto se convierte en componente y adquiere características como reusabilidad.

Cuando se necesita el acceso a un componente o cuando este debe ser compartido entre distintas redes, se recurre a procesos como la serialización para entregar el componente a su destino. La capacidad de ser reutilizado (reusability), es una característica importante de los componentes de software de alta calidad. Un componente debe ser diseñado e implementado de tal forma que pueda ser reutilizado en muchos programas diferentes.

Para que un componente sea reutilizable, se requiere gran atención y énfasis en su diseño. Para esto, el componente debe estar:

- Completamente documentado.
- Probado intensivamente:
- Debe ser robusto, comprobando la validez de las entradas.
- Debe ser capaz de pasar mensajes de error apropiados.
- Diseñado pensando en que será usado de maneras imprevistas.

## **Arquitecturas Software y Marcos de Trabajo**

El disponer de componentes software no es suficiente para desarrollar aplicaciones. Un aspecto crítico a la hora de construir sistemas complejos es el diseño de la estructura del sistema. Entendemos por Arquitectura Software la representación de alto nivel de la estructura de un sistema o aplicación, que describe las partes que la integran, las interacciones entre ellas, los patrones que supervisan su composición, y las restricciones a la hora de aplicar esos patrones.

En general, dicha representación se va a realizar en términos de una colección de componentes y de las interacciones que tienen lugar entre ellos. De esta forma aparecen las arquitecturas basadas en componentes y conectores: los primeros se dedican a labores computacionales, mientras que los conectores encapsulan los patrones de sincronización y coordinación entre los componentes. Este tipo de arquitecturas son completamente modulares y favorecen la reutilización de todos sus elementos, incluyendo los que definen las distintas relaciones entre ellos.

Una arquitectura software viene determinada por las diferentes instancias de cada tipo de componentes y conectores que la componen, y por una serie de enlaces (bindings) específicos que definen la unión de todas ellas formando una estructura. A esta estructura se le da el nombre de configuración, y suele considerarse insertada en una jerarquía, pues toda entidad de software independientemente de su granularidad, dispone de una estructura que puede ser descrita mediante una arquitectura software.

Cuando lo que interesa no es obtener una configuración concreta, sino extraer los patrones genéricos que definen a una familia de sistemas, se habla de estilos arquitectónicos. La definición de estilos tiene una gran importancia desde el punto de vista de la reutilización, y es un aspecto fundamental en la arquitectura del software.

En general, la arquitectura software nace como una herramienta de alto nivel para cubrir distintos objetivos, entre los que destacamos:

- Comprender y manejar la estructura de las aplicaciones complejas.
- Reutilizar dicha estructura (o partes de ella) para resolver problemas similares.
- Planificar la evolución de la aplicación, identificando sus partes mutables e inmutables, así como los costes de los posibles cambios.
- Analizar la corrección de la aplicación, y su grado de cumplimiento respecto a los requisitos iniciales (prestaciones o fiabilidad).
- Permitir el estudio de alguna propiedad específica del dominio.

## **Patrones de diseño**

Los patrones de diseño son una parte fundamental del desarrollo, ya que brindan soluciones típicas a problemas comúnmente recurrentes en el diseño. En lugar de proporcionar piezas específicas de software, los patrones de diseño son simplemente conceptos que se pueden usar para manejar temas recurrentes de manera optimizada.

Debido a React, los patrones de diseño se han modificado, optimizado y se han creado nuevos para proporcionar valor en el ecosistema de desarrollo web. Por ejemplo, react tiene una nueva función llamada Hooks, que juega un papel muy importante en el diseño de este proyecto y puede reemplazar muchos patrones de diseño tradicionales.

## **Ciclo de vida de un componente**

El ciclo de vida es una serie de estados por los cuales pasa todo componente a lo largo de su existencia. Esos estados tienen correspondencia en diversos métodos, que se pueden implementar para realizar acciones cuando se van produciendo.

En React es fundamental el ciclo de vida, porque hay determinadas acciones que debemos necesariamente realizar en el momento correcto de ese ciclo. Ese es el motivo por el que hay que tener conciencia sobre cuáles son las distintas etapas por las que pasa la ejecución de un componente React. Esto es algo específico de los componentes con estado, ya que los componentes sin estado tienen apenas un método que se usará para renderizar el componente y React no controlará su ciclo de vida a través de los métodos existentes. Montaje, actualización y desmontaje.

![Ciclo de vida de un componente.](media/Lifecycle-component.png "Ciclo de vida de un componente")

Cada componente tiene varios “métodos de ciclo de vida” que puedes sobrescribir para ejecutar código en momentos particulares del proceso.  En la lista de abajo, se presentarán los métodos de ciclo de vida comúnmente usados (en negrilla). El resto de ellos existen para casos de uso relativamente raros.

- Montaje

Estos métodos se llaman cuando se crea una instancia de un componente y se inserta en el DOM:

    -constructor()

El método constructor se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferentes, por ejemplo la instancia de una clase (un parser, un validador, etc.).

    -static getDerivedStateFromProps()
    -render()
En este momento de la fase de montaje se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente. Esta función debe ser pura (no puede tener efectos secundarios) y no debe modificar nunca el estado del componente.

    componentDidMount()

Este último método de la fase de montaje se ejecuta una vez el componente se renderiza en el navegador (este no se ejecuta al renderizar en el servidor) y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).
También es el mejor lugar para realizar peticiones HTTP o suscribirse a diferentes fuentes de datos (un Store o un WebSocket) y al recibir una respuesta, actualizar el estado. Cambiar el estado en este método causa que se vuelva a renderizar el componente.

- Actualización

Esa fase puede ocurrir múltiples veces (o incluso ninguna), sucede cuando algún dato del componente (ya sea una propiedad, un estado o el contexto) se modifica y por lo tanto requiere que la UI se vuelva a generar para representar ese cambio de datos. Estos métodos se llaman en el siguiente orden cuando un componente se vuelve a renderizar:

    static getDerivedStateFromProps()
    shouldComponentUpdate()

Este método se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState). Acá es posible validar que estos datos sean diferentes de los anteriores y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.

    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

Esta última parte de la actualización de un componente ocurre justo después de que se renderiza en el DOM nuestro componente. Al igual que con componentDidMount() acá es posible interactuar con el DOM y cualquier API de los navegadores.

- Desmontaje

Esta última fase consiste en un solo método que se ejecuta antes de que un componente se elimine (desmonte) de la UI de la aplicación.

    componentWillUnmount()

Este método de la fase de desmontado nos permite realizar cualquier tipo de limpieza antes de remover el componente.

Acá es posible dejar de escuchar eventos de window, document o el DOM, desuscribirse de un WebSocket o Store o cancelar peticiones HTTP que hayan quedado pendientes.

Es importante hacer esta limpieza ya que si alguna petición pendiente se completa luego del desmontado, va a tratar de actualizar el estado y va a dar un error (y hasta un posible problema de memoria) ya que el componente no existe más.

- Manejo de errores

Estos métodos se invocan cuando hay un error durante la renderización, en un método en el ciclo de vida o en el constructor de cualquier componente hijo.

    static getDerivedStateFromError()
    componentDidCatch()  

Estas son básicamente todas las fases del ciclo de vida con sus métodos y que hacen. Esa funcionalidad es una de las que hacen más poderoso a nuestros componentes de React ya que nos permite tener un control total sobre qué ocurre en nuestra aplicación en todo momento.

## **Composición de componentes** 

La composición es el acto de combinar partes o elementos para formar un todo. Los componentes son los “building blocks” básicos de la interfaz de usuario en las aplicaciones React, al igual que las funciones puras son los componentes básicos de la composición de funciones.

React Composition es un patrón de desarrollo basado en el modelo de componentes original de React en el que construimos componentes a partir de otros componentes utilizando accesorios definidos explícitos o los accesorios secundarios implícitos. En términos de refactorización, la composición de React es un patrón que se puede usar para dividir un componente complejo en componentes más pequeños y luego componer esos componentes más pequeños para estructurar y completar su aplicación.

Los componentes pueden hacer referencia a otros componentes en su salida. Esto nos permite usar la misma abstracción de componentes para cualquier nivel de detalle. Un botón, un formulario, un cuadro de diálogo, una pantalla: en las aplicaciones React, todo eso se expresa comúnmente como componentes.

## **Características**

- Realiza una composición en un tiempo posterior al de la compilación del componente, puede ser durante su enlazado, carga o ejecución, y por alguien ajeno a su desarrollo, es decir, que sólo conoce al componente por su interfaz o contrato, sin necesidad de conocer detalles de implementación, ni la forma en que fue creado.

- Tiene un mecanismo de comunicación por el que se pueden propagar las situaciones que ocurren en un sistema de forma asíncrona. Emitidos para avisar a los componentes de su entorno de cambios en su estado.

- Reutilización: posibilidad de utilizar un componente software en contextos distintos a aquellos para los que fue diseñado (reutilizar no significa usar más de una vez).

- Se pueden añadir especificaciones a la interfaz de un componente y que establece las condiciones de uso e implementación que ligan a los clientes y proveedores del componente. 

- Polimorfismo: posibilidad de que un mismo componente se muestre de diferentes formas, dependiendo del contexto; o bien la capacidad de distintos componentes de mostrar un mismo comportamiento en un contexto dado. 

Para finalizar, el código de un componente se puede dividir en dos partes. En primer lugar, los métodos y datos internos. Un componente puede implementar funciones que utiliza "para su cuenta personal" y que no son accesibles desde el exterior. Estos se conocen como métodos "privados". Entonces, el componente para poder ser utilizado debe proporcionar un medio de comunicación con los programas del cliente. Por lo tanto, ciertas funciones son accesibles desde el exterior y están asignadas para ser llamadas por estos programas. Lo cual se refiere a métodos "públicos" o "interfaz".


