import { expect, test } from "bun:test";
import { parseRespString } from "../src/resp/deserialize";

test("parse resp string valid", () => {
  expect(parseRespString("+easy\r\n")).toBe("easy");
  expect(parseRespString("++''/;weasy\r\n")).toBe("+''/;weasy");
  expect(parseRespString("+med\rium\r\n")).toBe("med\rium");
  expect(parseRespString("+A large string of data\r\n")).toBe(
    "A large string of data"
  );
  expect(parseRespString("+emoji<👾>?\r\n")).toBe("emoji<👾>?");
});
