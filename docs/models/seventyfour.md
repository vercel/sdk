# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/payloadresources.js";

let value: SeventyFour = {
  count: 9674.14,
  documents: [
    {
      slug: "<value>",
      documentId: "<id>",
      title: "<value>",
      fingerprint: "<value>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `count`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `documents`                                  | [models.Documents](../models/documents.md)[] | :heavy_check_mark:                           | N/A                                          |