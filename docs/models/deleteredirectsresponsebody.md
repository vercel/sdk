# DeleteRedirectsResponseBody

## Example Usage

```typescript
import { DeleteRedirectsResponseBody } from "@vercel/sdk/models/deleteredirectsop.js";

let value: DeleteRedirectsResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 3408.11,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `alias`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | [models.DeleteRedirectsVersion](../models/deleteredirectsversion.md) | :heavy_check_mark:                                                   | N/A                                                                  |