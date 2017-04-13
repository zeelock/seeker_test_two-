
var b = [];
function setup() {

  createCanvas (windowWidth,windowHeight);
for(i = 0 ; i < 10; i++){
  b[i] =  new track();
}


}
function draw() {
  
translate(width*0.5 , height*0.5);
background(255 , 10);


for(i =0 ; i < b.length ; i++){

b[i].move();
b[i].show();
//b[i].end();


for( j = 0 ; j < b.length ; j++ ){

if ( i != j){

b[i].tracks(b[i].pos,b[j].pos);

   }
  }
 }
}

var track = function(){
  
  this.goto = createVector(width*0.5 , height*0.5);
  
  this.pos = createVector(random(-width*0.5,width*0.5),random(-height*0.5 , height*0.5));
  
   
    this.v = p5.Vector.random2D();
    this.acc = createVector();
  
  
   
   this.show = function(){
     
    
     
    ellipse(this.pos.x,this.pos.y, 5 );
     
     
   };
  this.move = function(){
    
    
    this.goto.add(this.v);
    
    this.pos.add(this.v);
    this.v.add(this.acc);
    this.acc.mult(0);
    
    
  };
  this.end = function(){
    
    
    if(this.pos.x < 0 || this.pos.x > width){
      
      this.v.x = this.v.x * -1;
      
    }
    
    if(this.pos.y < 0 || this.pos.y > height){
      
      this.v.y = this.v.y * -1;
      
    }
    
    
  };
  this.tracks = function(thiss , other){
    
  d = this.goto.dist(this.pos);
  
    
  var desier =this.goto.sub(this.pos);
   var steer = desier.sub(this.v);
  
    b[i].v.setMag(3);
     steer.setMag(1);

   if(d < random(random(width))){

    this.acc.sub(steer);
    
   }else{
     
    this.acc.add(steer);
     
   }
   if(d < 5){

    this.pos =createVector(random(-width*0.5,width*0.5),random(-height*0.5 , height*0.5));
    
   }
   
  
 // this is the were the balls will see each other.
    
   var dis = b[i].pos.dist(b[j].pos);
   
   
   if(dis < 50){
   line(b[i].pos.x ,b[i].pos.y , b[j].pos.x ,b[j].pos.y);
   
   }
   
   if(d< random(550)){
     
     
   line(b[i].pos.x ,b[i].pos.y , 0 ,0);
     
     
   }
  
  };
  
  
  
};