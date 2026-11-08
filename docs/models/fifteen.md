# Fifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifteen } from "@vercel/sdk/models/userevent.js";

let value: Fifteen = {
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