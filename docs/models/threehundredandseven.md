# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndSeven = {
  enabled: true,
  updatedAt: 665.13,
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