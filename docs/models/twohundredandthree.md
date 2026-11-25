# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/newenvvar.js";

let value: TwoHundredAndThree = {
  consumerProjectId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `consumerProjectId`   | *string*              | :heavy_check_mark:    | N/A                   |
| `consumerProjectName` | *string*              | :heavy_minus_sign:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_minus_sign:    | N/A                   |