# TwoHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyEight } from "@vercel/sdk/models/onehundredandninetyfour.js";

let value: TwoHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "observability-edge-requests",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectName`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `widget`                             | [models.Widget](../models/widget.md) | :heavy_check_mark:                   | N/A                                  |