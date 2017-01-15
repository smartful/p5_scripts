function setup() {
  createCanvas(400, 400);
}

function draw() {

  var Walker = function(){
      this.x = width/2;
      this.y = height/2;
  };

  Walker.prototype.display = function(){
      var size = random(1,10);
      noStroke();
      fill(30*randomGaussian(0,1) + 90, 30*randomGaussian(0,1) + 130, 30*randomGaussian(0,1) + 200);
      ellipse(this.x,this.y,size,size);
  };

  Walker.prototype.walk = function(){
      var gaussianX = randomGaussian(0,1);
      var gaussianY = randomGaussian(0,1);
      var standardDeviation = 150;
      var meanX = width/2;
      var meanY = height/2;
      var X = standardDeviation*gaussianX + meanX;
      var Y = standardDeviation*gaussianY + meanY;

      this.x = X;
      this.y = Y;
  };
  
  var w = new Walker();
  draw = function() {
      w.walk();
      w.display();
  };
}
