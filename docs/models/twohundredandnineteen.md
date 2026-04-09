# TwoHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNineteen } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: TwoHundredAndNineteen = {
  enabled: false,
  updatedAt: 3673.94,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |