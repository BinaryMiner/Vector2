"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __importDefault(require("./Vector2"));
describe(`Vector2`, () => {
    it(`should normalize correctly`, () => {
        expect(new Vector2_1.default(10, 10).normalize().magnitude()).toBeCloseTo(1);
    });
});
