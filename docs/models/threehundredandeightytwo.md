# ThreeHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyTwo } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndEightyTwo = {
  enabled: true,
  updatedAt: 2438.9,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |