# Eleven

The payload of the event, if requested.

## Example Usage

```typescript
import { Eleven } from "@vercel/sdk/models/via3.js";

let value: Eleven = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "private",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `boardId`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `operationId`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `visibility`                                 | [models.Visibility](../models/visibility.md) | :heavy_check_mark:                           | N/A                                          |