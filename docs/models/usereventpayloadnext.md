# UserEventPayloadNext

## Example Usage

```typescript
import { UserEventPayloadNext } from "@vercel/sdk/models/two1.js";

let value: UserEventPayloadNext = {
  clientId: "<id>",
  deploymentType: "<value>",
  issuer: "discover",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `cookieName`       | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentType`   | *string*           | :heavy_check_mark: | N/A                |
| `issuer`           | *string*           | :heavy_check_mark: | N/A                |