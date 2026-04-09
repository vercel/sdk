# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/onehundredandone.js";

let value: OneHundredAndSix = {
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