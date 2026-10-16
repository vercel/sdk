# GetConditionalBypassResponseBodyResult

## Example Usage

```typescript
import { GetConditionalBypassResponseBodyResult } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassResponseBodyResult = {
  conditions: [
    {
      op: "re",
      type: "raw_path",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conditions`                                                           | [models.ResponseBodyConditions](../models/responsebodyconditions.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |