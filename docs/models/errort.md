# ErrorT

Error details.

## Example Usage

```typescript
import { ErrorT } from "@vercel/sdk/models/connecterror.js";

let value: ErrorT = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `code`                              | *string*                            | :heavy_check_mark:                  | Stable machine-readable error code. |
| `message`                           | *string*                            | :heavy_check_mark:                  | Human-readable error message.       |
| `additionalProperties`              | Record<string, *any*>               | :heavy_minus_sign:                  | N/A                                 |