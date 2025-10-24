# UpdateSharedEnvVariableResponseBody

## Example Usage

```typescript
import { UpdateSharedEnvVariableResponseBody } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: UpdateSharedEnvVariableResponseBody = {
  updated: [],
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
| `updated`                                                                            | [models.Updated](../models/updated.md)[]                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `failed`                                                                             | [models.UpdateSharedEnvVariableFailed](../models/updatesharedenvvariablefailed.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |