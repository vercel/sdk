# OneHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFour } from "@vercel/sdk/models/usereventjobpayload1405provider.js";

let value: OneHundredAndEightyFour = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `edgeConfigId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `edgeConfigSlug`      | *string*              | :heavy_check_mark:    | N/A                   |
| `edgeConfigTokenIds`  | *string*[]            | :heavy_check_mark:    | ids of deleted tokens |