# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: TwoHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  protectedSourcemaps: true,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_check_mark:    | N/A                   |
| `protectedSourcemaps` | *boolean*             | :heavy_check_mark:    | N/A                   |