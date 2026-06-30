# TwoHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirteen } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: TwoHundredAndThirteen = {
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