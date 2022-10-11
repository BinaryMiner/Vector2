interface IVector2 {
    x: number;
    y: number;
}
declare class Vector2 {
    x: number;
    y: number;
    _length: number;
    _ux: number;
    _uy: number;
    private isDirty;
    constructor(x?: number, y?: number);
    get length(): number;
    get ux(): number;
    get uy(): number;
    clone(): Vector2;
    copy({ x, y }: IVector2): Vector2;
    set(x: number, y: number): Vector2;
    equals({ x, y }: IVector2): boolean;
    magnitude(): number;
    normalize(): Vector2;
    add({ x, y }: IVector2): Vector2;
    subtract({ x, y }: IVector2): Vector2;
    multiply({ x, y }: IVector2): Vector2;
    divide({ x, y }: IVector2): Vector2;
    dot({ x, y }: IVector2): number;
    cross({ x, y }: IVector2): number;
    lerp({ x, y }: IVector2, t?: number): Vector2;
    scale(x: number, y?: number): Vector2;
    negate(): Vector2;
    distance({ x, y }: IVector2): number;
    normal(): Vector2;
    recalc(): Vector2;
    angle(): number;
    rotate(relativeRadians: number): Vector2;
    project(src: Vector2): Vector2;
}
export default Vector2;
