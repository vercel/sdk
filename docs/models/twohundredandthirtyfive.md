# TwoHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFive } from "@vercel/sdk/models/onehundredandeightythree.js";

let value: TwoHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  domain: "that-singing.name",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |