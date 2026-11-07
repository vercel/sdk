# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/rule.js";

let value: OneHundredAndTwo = {
  count: 3413.73,
  documents: [],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `count`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `documents`                                  | [models.Documents](../models/documents.md)[] | :heavy_check_mark:                           | N/A                                          |