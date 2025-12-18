# EditRedirectResponseBody

## Example Usage

```typescript
import { EditRedirectResponseBody } from "@vercel/sdk/models/editredirectop.js";

let value: EditRedirectResponseBody = {
  alias: "<value>",
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 6409.16,
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `alias`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | [models.EditRedirectVersion](../models/editredirectversion.md) | :heavy_check_mark:                                             | N/A                                                            |