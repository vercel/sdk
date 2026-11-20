# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: ThreeHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "analytics-online",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectName`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `widget`                             | [models.Widget](../models/widget.md) | :heavy_check_mark:                   | N/A                                  |