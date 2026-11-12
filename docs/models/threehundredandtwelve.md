# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: ThreeHundredAndTwelve = {
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