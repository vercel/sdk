# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/usereventpayload262origin.js";

let value: ThreeHundred = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `enableFunctionsBeta` | *boolean*             | :heavy_check_mark:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_minus_sign:    | N/A                   |