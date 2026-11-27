# Nineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Nineteen } from "@vercel/sdk/models/userevent.js";

let value: Nineteen = {
  boardId: "<id>",
  operationId: "<id>",
  visibility: "team",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `boardId`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `operationId`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `visibility`                                 | [models.Visibility](../models/visibility.md) | :heavy_check_mark:                           | N/A                                          |