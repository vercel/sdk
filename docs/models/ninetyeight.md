# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/ninetyeight.js";

let value: NinetyEight = {
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