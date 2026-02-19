# Source3

## Example Usage

```typescript
import { Source3 } from "@vercel/sdk/models/createprojectcheckop.js";

let value: Source3 = {
  kind: "<value>",
  externalCheckName: "<value>",
  provider: "github",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `kind`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `externalCheckName`                                  | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `provider`                                           | [models.SourceProvider](../models/sourceprovider.md) | :heavy_check_mark:                                   | N/A                                                  |