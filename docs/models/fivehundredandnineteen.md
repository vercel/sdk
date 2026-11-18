# FiveHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNineteen } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndNineteen = {
  enabled: false,
  repositoryId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_minus_sign: | N/A                |
| `repository`       | *string*           | :heavy_minus_sign: | N/A                |
| `repositoryId`     | *string*           | :heavy_check_mark: | N/A                |