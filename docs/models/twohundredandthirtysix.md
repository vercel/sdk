# TwoHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySix } from "@vercel/sdk/models/aws.js";

let value: TwoHundredAndThirtySix = {
  projectId: "<id>",
  enableFunctionsBeta: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectName`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `enableFunctionsBeta` | *boolean*             | :heavy_check_mark:    | N/A                   |