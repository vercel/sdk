# OneHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNine } from "@vercel/sdk/models/allowlistedreadystatereasoninternal.js";

let value: OneHundredAndNine = {
  count: 6865.5,
  documents: [
    {
      documentId: "<id>",
      fingerprint: "<value>",
      slug: "<value>",
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `count`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `documents`                                  | [models.Documents](../models/documents.md)[] | :heavy_check_mark:                           | N/A                                          |