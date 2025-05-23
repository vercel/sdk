# RequestBody2

move-in

## Example Usage

```typescript
import { RequestBody2 } from "@vercel/sdk/models/postdomainsop.js";

let value: RequestBody2 = {
  name: "example.com",
  method: "transfer-in",
  token: "fdhfr820ad#@FAdlj$$",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The domain name you want to add.                                          | example.com                                                               |
| `method`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The domain operation to perform. It can be either `add` or `transfer-in`. | transfer-in                                                               |
| `token`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | The move-in token from Move Requested email.                              | fdhfr820ad#@FAdlj$$                                                       |