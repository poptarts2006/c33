class Snowflake {

constructor(){
    
//Making random places snowflakes
    let x = random(width);
    let y = random(0);
    
    this.pos = createVector(x,y);
    this.vel = createVector(0,5);
    this.gravity = createVector();
    this.r = random(2,18);
    
    
}

update(){
    this.gravity = gravity;
    this.vel.add(this.gravity);

    this.pos.add(this.vel);

//  // Wrapping Left and Right
//  if (this.pos.x < -this.r) {
//     this.pos.x = width + this.r;
//   }
//   if (this.pos.x > width + this.r) {
//     this.pos.x = -this.r;
//   }

//   this.angle += (this.dir * this.vel.mag()) / 200;


}

render(){
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x,this.pos.y);

}

}