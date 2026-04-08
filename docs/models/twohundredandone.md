# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: TwoHundredAndOne = {
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