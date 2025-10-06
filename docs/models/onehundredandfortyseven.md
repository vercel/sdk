# OneHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortySeven = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `edgeConfigId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `edgeConfigSlug`      | *string*              | :heavy_check_mark:    | N/A                   |
| `edgeConfigTokenIds`  | *string*[]            | :heavy_check_mark:    | ids of deleted tokens |