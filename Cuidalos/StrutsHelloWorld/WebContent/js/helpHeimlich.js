var width = 1064;
 var height = 600;
 
 
 var stage = new Konva.Stage({
     container: 'container',
     width: width,
     height: height
   });
 
 
 var layer = new Konva.Layer();
 stage.add(layer);

 
 
 
 var buttonNextImg = new Konva.Image({
	 image: imageObj1,
	 x: stage.getWidth() / 2.1,
     y: stage.getHeight() / 1.18,
     width: 75,
     height: 75,
     opacity: 0.5,
     draggable: false
 });
 

 
 layer.add(buttonNextImg);
 
 
 
 
 
 var imageObj1 = new Image();
 imageObj1.onload = function() {
	 buttonNextImg.image(imageObj1); 
     layer.draw();
 };
 imageObj1.src = 'images/boton_next.png';
 imageObj1.id = 'next';
 

 
 
 buttonNextImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
   });
 
 
 buttonNextImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
     window.location = ("secuence_heimlich.jsp");
          



   });
 

 
 
 buttonNextImg.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
 });
 buttonNextImg.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.5);
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
 });
 
 var background = new Konva.Layer();
 
 function drawBackground(backgroun, text) {
     var context = background.getContext();
     context.setAttr('font', '50pt Calibri');
     context.setAttr('textAlign', 'center');
     context.setAttr('fillStyle', 'white');
     context.fillText(text, background.getStage().getWidth() / 2, 70);
 }
 stage.add(background);
 
 drawBackground(background, 'Maniobra de Heimlich');
 
 
 var messageLayer = new Konva.Layer();
 
 var text = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 100,
     fontFamily: 'Calibri',
     fontSize: 25,
     text: '',
     fill: 'white',
 });
 function writeMessage(message) {
     text.setText(message);
     text.align('center');
     messageLayer.draw();
 }
 
 writeMessage('La maniobra de Heimlich se utiliza cuando una persona presenta ahogamiento súbito por causas de atragantamiento, generalmente por comida o por ingestión de un cuerpo extraño. El trozo de comida (por ejemplo), se queda atascado entre la bifurcación del esófago y tráquea presionando la epiglotis e impidiendo la respiración.');
 messageLayer.add(text);
 stage.add(messageLayer);
 
 
 var messageLayer2 = new Konva.Layer();
 
 var text2 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 210,
     fontFamily: 'Calibri',
     fontSize: 25,
     text: '',
     fill: 'white',
 });
 function writeMessage2(message2) {
     text2.setText(message2);
     text2.align('center');
     messageLayer2.draw();
 }
 
 writeMessage2('Para poder realizar la maniobra, primero hay que asegurarse de que la víctima presenta síntomas de atragantamiento. Una vez comprobado, podemos dejar a la víctima sentada o ponerla de pie. Nosotros, nos pondremos siempre de pie y por detrás de la víctima, abrazándola con los dos brazos. Colocamos un puño de uno de los brazos a la altura del abdomen de la víctima, y con la otra mano agarramos la muñeca del brazo contrario. Realizamos entonces presiones intensas como si diéramos un abrazo, incluso la fuerza ejercida, podríamos levantar a la víctima. Repetir este proceso hasta que el objeto causante del atragantamiento sea expulsado por la boca.');
 messageLayer2.add(text2);
 stage.add(messageLayer2);
 
 var messageLayer3 = new Konva.Layer();
 
 var text3 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 400,
     fontFamily: 'Calibri',
     fontSize: 25,
     text: '',
     fill: 'white',
 });
 function writeMessage3(message3) {
     text3.setText(message3);
     text3.align('center');
     messageLayer3.draw();
 }
 
 writeMessage3('Si quieres ver un ejemplo, puedes acceder al siguiente link:');
 messageLayer3.add(text3);
 stage.add(messageLayer3);
 
 
 
 
 var buttonLinkImg = new Konva.Image({
	 image: imageObj2,
	 x: stage.getWidth() / 5.169,
     y: stage.getHeight() / 1.38,
     width: 651,
     height: 42,
     draggable: false
 });
 

 
 layer.add(buttonLinkImg);
 
 
 
 
 
 var imageObj2 = new Image();
 imageObj2.onload = function() {
	 buttonLinkImg.image(imageObj2); 
     layer.draw();
 };
 imageObj2.src = 'images/link_heimlich.png';

 
 
 
 buttonLinkImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
   });
 
 
 buttonLinkImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
     
     window.open("https://www.youtube.com/watch?v=hYEpPWTVBKE");
          
   });
 

 buttonLinkImg.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
 });
 buttonLinkImg.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     layer.draw();
 });
 
 
 /*
 
var messageLayer4 = new Konva.Layer();
 
 var text4 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 440,
     fontFamily: 'Calibri',
     fontSize: 30,
     text: '',
     fill: 'white',
 });
 function writeMessage4(message4) {
     text4.setText(message4);
     text4.align('center');
     messageLayer4.draw();
 }
 

 writeMessage4("https://www.youtube.com/watch?v=hYEpPWTVBKE");

 messageLayer4.add(text4);
 stage.add(messageLayer4);
 
 */
 
 
 
 
 
 
 
 