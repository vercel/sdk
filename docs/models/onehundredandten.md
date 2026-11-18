# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/usereventpayload72action.js";

let value: OneHundredAndTen = {
  count: 1249.58,
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