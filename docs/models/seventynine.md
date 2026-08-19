# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/eighteen.js";

let value: SeventyNine = {
  count: 3193.54,
  documents: [],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `count`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `documents`                                  | [models.Documents](../models/documents.md)[] | :heavy_check_mark:                           | N/A                                          |