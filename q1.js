function Circle(r) {
    this.radius = r;
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2)
    }
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    }
}
const x = new Circle(4.44);
console.log(x.getArea());
console.log(x.perimeter());