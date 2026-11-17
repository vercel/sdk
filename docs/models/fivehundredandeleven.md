# FiveHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEleven } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndEleven = {
  enabled: true,
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