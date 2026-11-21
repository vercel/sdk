# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/usereventpayload260next.js";

let value: ThreeHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "online",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectName`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `widget`                             | [models.Widget](../models/widget.md) | :heavy_check_mark:                   | N/A                                  |