# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: Eighteen = {
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