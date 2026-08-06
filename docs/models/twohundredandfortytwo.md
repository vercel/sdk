# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndFortyTwo = {
  projectId: "<id>",
  enableFunctionsBeta: true,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectName`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `enableFunctionsBeta` | *boolean*             | :heavy_check_mark:    | N/A                   |