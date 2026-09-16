# RestoreRedirectsResponseBody

## Example Usage

```typescript
import { RestoreRedirectsResponseBody } from "@vercel/sdk/models/restoreredirectsop.js";

let value: RestoreRedirectsResponseBody = {
  failedToRestore: [
    "<value 1>",
    "<value 2>",
  ],
  restored: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  version: {
    createdBy: "<value>",
    id: "<id>",
    key: "<key>",
    lastModified: 2299.99,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `failedToRestore`                                                      | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `restored`                                                             | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | [models.RestoreRedirectsVersion](../models/restoreredirectsversion.md) | :heavy_check_mark:                                                     | N/A                                                                    |