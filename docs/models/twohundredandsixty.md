# TwoHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixty } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndSixty = {
  enabled: false,
  updatedAt: 3821.15,
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