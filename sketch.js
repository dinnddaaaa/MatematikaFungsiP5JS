let batas = 80;
let xSekarang = -batas;

function setup() {
  createCanvas(400, 300);
  frameRate(30);
}

function draw() {
  background(210);
  translate(width / 2, height / 2);
  scale(1, -1);

  // --- sumbu x ---
  stroke(0);
  line(-180, 0, 180, 0);
  fill(0);
  noStroke();
  triangle(180, 0, 170, -5, 170, 5);
  triangle(-180, 0, -170, -5, -170, 5);

  // --- sumbu y ---
  stroke(0);
  line(-50, -130, -50, 130);
  fill(0);
  noStroke();
  triangle(-50, 130, -55, 120, -45, 120);
  triangle(-50, -130, -55, -120, -45, -120);

  // --- teks koordinat ---
  push();
  scale(1, -1);
  fill(0);
  textSize(16);
  text("x", 185, -5);
  text("y", -63, -135);
  pop();

  // --- gambar fungsi kuadrat pelan-pelan ---
  noFill();
  stroke(100, 150, 255);
  beginShape();
  for (let x = -batas; x <= xSekarang; x++) {
    let y = 0.02 * x * x - 20;
    vertex(x, y);
  }
  endShape();

  // setelah fungsi selesai digambar, tampilkan titik-titik
  if (xSekarang >= batas) {
    // garis putus-putus sumbu simetri
    stroke(255, 100, 100);
    let startY = -20;
    let endY = 70;
    let dashLength = 5;
    let gap = 5;
    for (let y = startY; y < endY; y += dashLength + gap) {
      line(0, y, 0, y + dashLength);
    }

    // titik puncak
    fill(255, 0, 0);
    ellipse(0, -20, 6, 6);

    // titik potong sumbu x
    fill(0);
    ellipse(-32, 0, 6, 6);
    ellipse(32, 0, 6, 6);

    // titik potong sumbu y
    ellipse(0, -20, 6, 6);

    noLoop(); // berhenti animasi setelah selesai
  }

  // tambah titik baru tiap frame
  xSekarang += 2;
}

