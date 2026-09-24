# TwoHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFive } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: TwoHundredAndNinetyFive = {
  domain: "wonderful-lamp.info",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `domain`             | *string*             | :heavy_check_mark:   | N/A                  |
| `projectId`          | *string*             | :heavy_check_mark:   | N/A                  |
| `projectName`        | *string*             | :heavy_check_mark:   | N/A                  |
| `redirect`           | *string*             | :heavy_minus_sign:   | N/A                  |
| `redirectStatusCode` | *number*             | :heavy_minus_sign:   | N/A                  |