# DeleteSharedEnvVariableResponseBody

## Example Usage

```typescript
import { DeleteSharedEnvVariableResponseBody } from "@vercel/sdk/models/deletesharedenvvariableop.js";

let value: DeleteSharedEnvVariableResponseBody = {
  deleted: [
    "<value 1>",
  ],
  failed: [
    {
      error: {
        code: "<value>",
        message: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `deleted`                                                                            | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `failed`                                                                             | [models.DeleteSharedEnvVariableFailed](../models/deletesharedenvvariablefailed.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |