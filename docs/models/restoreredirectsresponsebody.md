# RestoreRedirectsResponseBody

## Example Usage

```typescript
import { RestoreRedirectsResponseBody } from "@vercel/sdk/models/restoreredirectsop.js";

let value: RestoreRedirectsResponseBody = {
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 5646.84,
    createdBy: "<value>",
  },
  restored: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  failedToRestore: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `version`                                                              | [models.RestoreRedirectsVersion](../models/restoreredirectsversion.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `restored`                                                             | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `failedToRestore`                                                      | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |