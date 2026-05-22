# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndThirty = {
  projectId: "<id>",
  projectName: "<value>",
  gitForkProtection: false,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectId`         | *string*            | :heavy_check_mark:  | N/A                 |
| `projectName`       | *string*            | :heavy_check_mark:  | N/A                 |
| `gitForkProtection` | *boolean*           | :heavy_check_mark:  | N/A                 |