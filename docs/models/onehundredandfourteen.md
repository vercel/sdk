# OneHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFourteen } from "@vercel/sdk/models/seventyseven.js";

let value: OneHundredAndFourteen = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `scope`            | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_minus_sign: | N/A                |