# TwoHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFour } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndSeventyFour = {
  enabled: true,
  updatedAt: 7767.06,
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