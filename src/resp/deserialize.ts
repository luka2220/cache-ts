enum Token {
  String = "+",
  Error = "-",
  Integer = ":",
  BulkString = "$",
  Array = "*",
}

// Unmarshall's the RESP message
export default function deserialize(data: string) {
  let counter = 0;
  while (counter <= data.length) {
    switch (data[counter]) {
      case Token.String:
      case Token.Error:
      case Token.Integer:
      case Token.BulkString:
      case Token.Array:
      default:
      // Do some error handling
    }
  }
}

export function parseRespString(data: string): string {
  return "";
}

export function parseRespError(data: string): string {
  return "";
}

export function parseRespInteger(data: string): string {
  return "";
}

export function parseRespBulkString(data: string): string {
  return "";
}

export function parseRespArray(data: string): string {
  return "";
}
