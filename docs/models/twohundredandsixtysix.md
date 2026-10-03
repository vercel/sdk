# TwoHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySix } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "shortcut",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectName`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `widget`                             | [models.Widget](../models/widget.md) | :heavy_check_mark:                   | N/A                                  |