# OneHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFour } from "@vercel/sdk/models/oldenvvar.js";

let value: OneHundredAndSeventyFour = {
  projectId: "<id>",
  scope: "<value>",
  source: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expiresAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `scope`            | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |