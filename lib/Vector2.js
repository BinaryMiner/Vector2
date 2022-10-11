"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x = 0, y = 0) {
        this._length = 0;
        this._ux = 0;
        this._uy = 0;
        this.isDirty = false;
        this.x = x;
        this.y = y;
        this.isDirty = true;
    }
    get length() {
        if (this.isDirty) {
            this.recalc();
        }
        return this._length;
    }
    get ux() {
        if (this.isDirty) {
            this.recalc();
        }
        return this._ux;
    }
    get uy() {
        if (this.isDirty) {
            this.recalc();
        }
        return this._ux;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy({ x, y }) {
        return this.set(x, y);
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        this.isDirty = true;
        return this;
    }
    equals({ x, y }) {
        return this.x === x && this.y === y;
    }
    magnitude() {
        return this.length;
    }
    normalize() {
        return this.set(this.ux, this.uy);
    }
    add({ x, y }) {
        return this.set(this.x + x, this.y + y);
    }
    subtract({ x, y }) {
        return this.set(this.x - x, this.y - y);
    }
    multiply({ x, y }) {
        return this.set(this.x * x, this.y * y);
    }
    divide({ x, y }) {
        return this.set(this.x / x, this.y / y);
    }
    dot({ x, y }) {
        return this.x * x + this.y * y;
    }
    cross({ x, y }) {
        return this.x * y - this.y * x;
    }
    lerp({ x, y }, t = 0) {
        this.x += t * (x - this.x);
        this.y += t * (y - this.y);
        return this;
    }
    scale(x, y = x) {
        return this.set(this.x * x, this.y * y);
    }
    negate() {
        return this.scale(-1);
    }
    distance({ x, y }) {
        const dx = x - this.x;
        const dy = y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    normal() {
        return new Vector2(-this.uy, this.ux);
    }
    recalc() {
        if (this.isDirty) {
            const lengthSquared = this.x * this.x + this.y * this.y;
            this._length = Math.sqrt(lengthSquared);
            this._ux = this._length ? this.x / this._length : 0;
            this._uy = this._length ? this.y / this._length : 0;
            this.isDirty = false;
        }
        return this;
    }
    angle() {
        return Math.atan2(-this.y, this.x);
    }
    rotate(relativeRadians) {
        var cos = Math.cos(relativeRadians);
        var sin = Math.sin(relativeRadians);
        return this.set(cos * this.x - sin * this.y, sin * this.x + cos * this.y);
    }
    project(src) {
        var scalar = this.dot(src) / src.dot(src);
        return this.copy(src).scale(scalar);
    }
}
exports.default = Vector2;
