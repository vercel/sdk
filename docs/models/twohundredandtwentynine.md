# TwoHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyNine } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: TwoHundredAndTwentyNine = {
  projectId: "<id>",
  projectName: "<value>",
  widget: "observability-error-rate",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `projectId`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `projectName`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `widget`                             | [models.Widget](../models/widget.md) | :heavy_check_mark:                   | N/A                                  |